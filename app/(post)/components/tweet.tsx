import React, { type ReactNode } from "react";
import { Caption } from "./caption";

interface TweetArgs {
  id: string;
  caption: ReactNode;
}

export async function Tweet({ id, caption }: TweetArgs) {
  return (
    <div className="tweet my-6">
      <div className="flex justify-center">
        
          <a href={`https://x.com/i/web/status/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 underline"
        >
          트위터에서 보기
        </a>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}