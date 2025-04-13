import { randomID } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

export function getUrlParams(url = window.location.href) {
	let urlStr = url.split("?")[1];
	return new URLSearchParams(urlStr);
}

export default function VideoUIKit() {
	const roomID = getUrlParams().get("roomID") || randomID(5);
	const conversationId = getUrlParams().get("conversationId");
	const isCreator = getUrlParams().get("isCreator") === "true";
	const { user } = useClerk();
	const sendTextMessage = useMutation(api.messages.sendTextMessage);

	let myMeeting = (element: HTMLDivElement) => {
		const initMeeting = async () => {
			try {
				if (!user?.id) {
					throw new Error("User not authenticated");
				}

				console.log("Fetching ZegoCloud token for user:", user.id);
				const res = await fetch(`/api/zegocloud?userID=${user.id}`);
				
				if (!res.ok) {
					const errorData = await res.json();
					throw new Error(errorData.error || "Failed to get ZegoCloud token");
				}

				const data = await res.json();
				console.log("Received response:", { 
					hasToken: !!data.token,
					appID: data.appID,
					roomID,
					isCreator 
				});

				if (!data.token || !data.appID) {
					throw new Error("Invalid token or appID received");
				}

				const username = user.fullName || user.emailAddresses[0].emailAddress.split("@")[0];
				console.log("Joining with username:", username);

				const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
					data.appID,
					data.token,
					roomID,
					user.id,
					username
				);

				const personalLink = 
					window.location.protocol + 
					"//" + 
					window.location.host + 
					window.location.pathname + 
					"?roomID=" + 
					roomID +
					(conversationId ? `&conversationId=${conversationId}` : "");

				// Only send message if this user is the creator of the room
				if (conversationId && isCreator) {
					try {
						await sendTextMessage({
							content: personalLink,
							conversation: conversationId as Id<"conversations">,
						});
					} catch (error) {
						console.error("Failed to send video call link message:", error);
					}
				}

				console.log("Creating ZegoUIKit instance");
				const zp = ZegoUIKitPrebuilt.create(kitToken);

				console.log("Joining room:", roomID);
				zp.joinRoom({
					container: element,
					sharedLinks: [
						{
							name: "Personal link",
							url: personalLink,
						},
					],
					scenario: {
						mode: ZegoUIKitPrebuilt.GroupCall,
					},
					showScreenSharingButton: true,
				});

			} catch (error) {
				console.error("Error in video call initialization:", error);
				// You might want to show an error message to the user here
			}
		};
		initMeeting();
	};

	return <div className='myCallContainer' ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>;
}
