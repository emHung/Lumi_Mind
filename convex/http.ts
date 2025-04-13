import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { Webhook } from "svix";

interface WebhookResult {
	type: string;
	data: {
		id: string;
		email_addresses: Array<{ email_address: string }>;
		first_name?: string;
		last_name?: string;
		image_url: string;
		user_id?: string;
	};
}

const http = httpRouter();

export const clerk = http.route({
	path: "/clerk",
	method: "POST",
	handler: httpAction(async (ctx, request) => {
		const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

		if (!WEBHOOK_SECRET) {
			throw new Error("Missing CLERK_WEBHOOK_SECRET");
		}

		const svix_id = request.headers.get("svix-id");
		const svix_timestamp = request.headers.get("svix-timestamp");
		const svix_signature = request.headers.get("svix-signature");

		if (!svix_id || !svix_timestamp || !svix_signature) {
			return new Response("Error occured -- no svix headers", {
				status: 400,
			});
		}

		const payload = await request.json();
		const body = JSON.stringify(payload);

		const wh = new Webhook(WEBHOOK_SECRET);

		try {
			const result = wh.verify(body, {
				"svix-id": svix_id,
				"svix-timestamp": svix_timestamp,
				"svix-signature": svix_signature,
			}) as WebhookResult;

			switch (result.type) {
				case "user.created":
					await ctx.runMutation(internal.users.createUser, {
						tokenIdentifier: `${process.env.CLERK_ISSUER_URL}|${result.data.id}`,
						email: result.data.email_addresses[0]?.email_address,
						name: `${result.data.first_name ?? "Guest"} ${result.data.last_name ?? ""}`,
						image: result.data.image_url,
						role: "user",
					});
					break;
				case "user.updated":
					await ctx.runMutation(internal.users.updateUser, {
						tokenIdentifier: `${process.env.CLERK_ISSUER_URL}|${result.data.id}`,
						image: result.data.image_url,
					});
					break;
				case "session.created":
					await ctx.runMutation(internal.users.setUserOnline, {
						tokenIdentifier: `${process.env.CLERK_ISSUER_URL}|${result.data.user_id}`,
					});
					break;
				case "session.ended":
					await ctx.runMutation(internal.users.setUserOffline, {
						tokenIdentifier: `${process.env.CLERK_ISSUER_URL}|${result.data.user_id}`,
					});
					break;
			}

			return new Response(null, {
				status: 200,
			});
		} catch (err) {
			console.error("Error verifying webhook:", err);
			return new Response("Error occured", {
				status: 400,
			});
		}
	}),
});

http.route({
	path: "/",
	method: "GET",
	handler: async (ctx, request) => {
		return new Response(JSON.stringify({ hello: "world" }), {
			headers: {
				"Access-Control-Allow-Origin": "https://emhung.github.io",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
				"Content-Type": "application/json",
			},
		});
	},
});

// Add CORS preflight handler
http.route({
	path: "/*",
	method: "OPTIONS",
	handler: async (ctx, request) => {
		return new Response(null, {
			headers: {
				"Access-Control-Allow-Origin": "https://emhung.github.io",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	},
});

export default http;

// https://docs.convex.dev/functions/http-actions
// Internal functions can only be called by other functions and cannot be called directly from a Convex client.
