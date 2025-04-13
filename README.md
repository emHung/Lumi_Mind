
1. Run `npm install` to install dependencies.
2. Run `npm run dev`. It will prompt you to log into [Convex](https://convex.dev) and create a project.
3. It will then ask you to supply the `CLERK_ISSUER_URL`. To do this:
    1. Make a [Clerk](https://clerk.dev) account.
    2. Copy both the `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` [API keys](https://dashboard.clerk.com/last-active?path=api-keys) into `.env.local`.
    3. Do steps 1-3 [here](https://docs.convex.dev/auth/clerk) and copy the Issuer URL.
       It should look something like `https://some-animal-123.clerk.accounts.dev`.
    4. Add `CLERK_ISSUER_URL` to your [Convex Environment Variables](https://dashboard.convex.dev/deployment/settings/environment-variables?var=CLERK_ISSUER_URL)
       Paste the Issuer URL as the value and click "Save".
4. Add `CLERK_HOST_NAME` to your [Convex Environment Variables](https://dashboard.convex.dev/deployment/settings/environment-variables?var=CLERK_ISSUER_URL) as for the value paste the `CLERK_ISSUER_URL's` value
5. Set up Clerk following the instructions [here](https://docs.convex.dev/auth/clerk) and make sure to fill the `CLERK_SECRET_KEY` and `CLERK_ISSUER_URL` environment variables in the Convex dashboard.
6. From your [CLERK](https://clerk.dev) account, under the WebHooks, add an endpoint which should look like this: `https://your-convex-url.convex.site/clerk` and select `user.created` `user.updated` `session.created` `session.ended` events. Copy the webhook secret and in your Convex Dashboard add this env variable `CLERK_WEBHOOK_SECRET` and paste the value
7. Now your frontend and backend should be running and you should be able to log in but not support OpenAI features.
8. Make sure to add a GitHub OAuth app and fill the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` environment variables in the Clerk dashboard. [See here](https://docs.clerk.com/integrations/oauth/github-oauth)
9. To enable video calling, create a [ZEGOCLOUD](https://www.zegocloud.com) account, create a project and select voice && video calls. Paste `ZEGO_APP_ID` and `ZEGO_SERVER_SECRET` to .env.local and save
10. Now it should be up and running. Check out the [TUTORIAL](https://youtu.be/sQ1zvdS8eU8) for a complete walk-through.
