## Why?

1. You want to use Chat GPT-4 but don't want to pay subscription price of $20 per month.
2. There are free available online tools, but cannot see the source code and you don't trust them.
3. You are paranoid about online free service and prefer to self-host things on your own.

You can use this simple chat UI web app as chat interface to Chat with GPT-4 model. You just need to create your own API key from OpenAI at https://platform.openai.com/api-keys and then self-host the app on your own server.

## Getting Started

1. Create API key from https://platform.openai.com/api-keys

![step 1](./docs/1.%20create-api-keys.png)

2. Copy `.env.example` into `.env.local`
3. Paste your API key into `OPENAI_API_KEY` in `.env.local`

![step 2](./docs/2.%20setup-env.png)

4. Open terminal and run these commands

```bash
npm run install
npm run build
npm run start
```

5. You should see the following output in your terminal

![step 3](./docs/3.%20start-server.png)

6. Visit `http://localhost:3000` in your browser
7. Start chatting

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
