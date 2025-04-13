import { Video } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { randomID } from "@/lib/utils";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { Button } from "../ui/button";

interface VideoCallButtonProps {
    conversationId: Id<"conversations">;
}

export default function VideoCallButton({ conversationId }: VideoCallButtonProps) {
    const { user } = useClerk();
    const sendTextMessage = useMutation(api.messages.sendTextMessage);
    const messages = useQuery(api.messages.getMessages, { conversation: conversationId });

    const handleVideoCall = async () => {
        try {
            // Generate a random room ID
            const roomID = randomID(5);
            
            // Construct the video call URL with both roomID and conversationId
            const videoCallUrl = `${window.location.origin}/video-call?roomID=${roomID}&conversationId=${conversationId}&isCreator=true`;
            
            // Check if there's already an active video call link in recent messages
            const recentMessages = messages?.slice(-10) || [];
            const hasActiveCall = recentMessages.some(msg => 
                msg.content.includes('/video-call?roomID=') &&
                msg.content.includes(`conversationId=${conversationId}`)
            );

            if (!hasActiveCall) {
                // Send the link to the conversation only if there's no active call
                await sendTextMessage({
                    content: videoCallUrl,
                    conversation: conversationId,
                });
            }

            // Open video call in new window
            window.open(videoCallUrl, '_blank');
        } catch (error) {
            console.error("Failed to start video call:", error);
        }
    };

    return (
        <Button 
            variant="ghost" 
            size="icon"
            onClick={handleVideoCall}
            className="hover:bg-gray-light/10"
        >
            <Video size={23} />
        </Button>
    );
} 