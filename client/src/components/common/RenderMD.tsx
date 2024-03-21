"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/utils/cn";

type Props = {
  markdown: string;
  className?: string;
};

const RenderMD = ({ markdown, className }: Props) => {
  return (
    <div className={cn("prose mx-auto md:prose-lg", className)}>
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
};

export default RenderMD;
