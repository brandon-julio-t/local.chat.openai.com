"use client";

import { useChat } from "ai/react";
import clsx from "clsx";
import toast from "react-hot-toast";

import Button from "@/components/common/button";
import Card from "@/components/common/card";
import CardTitle from "@/components/common/card-title";
import TextField from "@/components/forms/text-field";

export default function HomePageView() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();

  if (error) {
    const message = error.message;
    toast.error("Error when chatting with OpenAI", { id: message });
    console.error(error);
  }

  return (
    <main className="grid h-screen w-screen place-items-center">
      <div className="mx-auto h-full w-full max-w-screen-lg p-4 pb-32">
        <Card className="h-full">
          <CardTitle>Chat</CardTitle>

          {messages.map((m) => (
            <div
              key={m.id}
              className={clsx(
                "chat",
                m.role === "user" ? "chat-end" : "chat-start",
              )}
            >
              <div
                className={clsx(
                  "chat-bubble whitespace-pre-wrap",
                  m.role === "user"
                    ? "chat-bubble-primary"
                    : "chat-bubble-secondary",
                )}
              >
                {m.content}
              </div>
            </div>
          ))}
        </Card>

        <section className="fixed bottom-0 left-0 right-0 mx-auto max-w-screen-lg px-4">
          <Card>
            <form
              onSubmit={handleSubmit}
              className="flex flex-row flex-wrap gap-4"
            >
              <TextField
                className="flex-1"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
                isLoading={isLoading}
              />

              <Button variant="primary" type="submit" isLoading={isLoading}>
                Send
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </main>
  );
}
