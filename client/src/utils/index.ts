export function extractCommonText(markdownText: string): string {
  const commonTextPattern =
    /(?<=^|\n)[^\n]*\b(common|shared|same)\b[^\n]*(?=\n|$)/gi;
  const matches = markdownText.match(commonTextPattern);
  return matches ? matches.join("\n") : "";
}
