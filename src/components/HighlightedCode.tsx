import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("csharp", csharp);

/**
 * Server component: code is highlighted at build time, so project pages ship
 * no syntax-highlighting JavaScript at all.
 */
export default function HighlightedCode({ code, language }: { code: string; language: string }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{ margin: 0, padding: "1rem 1rem 1.25rem", fontSize: "0.78rem", lineHeight: 1.65, background: "#121211" }}
      codeTagProps={{ style: { fontFamily: "var(--font-mono)" } }}
      showLineNumbers
      lineNumberStyle={{ color: "#5a5852", minWidth: "2.2em" }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
