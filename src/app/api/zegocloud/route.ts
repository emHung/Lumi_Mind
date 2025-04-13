import { generateToken04 } from "./zegoServerAssistant";

export async function GET(req: Request) {
	const url = new URL(req.url);
	const userID = url.searchParams.get("userID")!;

	// Ensure appID is treated as a number
	const appID = parseInt(process.env.ZEGO_APP_ID!, 10);
	const serverSecret = process.env.ZEGO_SERVER_SECRET!;

	console.log("ZegoCloud Config:", {
		appID,
		userID,
		hasServerSecret: !!serverSecret,
	});

	if (!appID || !serverSecret) {
		console.error("Missing credentials:", { appID, hasServerSecret: !!serverSecret });
		return Response.json({ error: "Missing ZegoCloud credentials" }, { status: 500 });
	}

	const effectiveTimeInSeconds = 3600;
	const payload = "";

	try {
		const token = generateToken04(appID, userID, serverSecret, effectiveTimeInSeconds, payload);
		console.log("Generated token successfully:", { token: token.substring(0, 20) + "..." });
		return Response.json({ token, appID });
	} catch (error) {
		console.error("Error generating ZegoCloud token:", error);
		return Response.json({ error: "Failed to generate token" }, { status: 500 });
	}
}
