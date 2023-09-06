/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../../../../contexts/PostContext";
import { Spinner } from "../../../../components/Spinner";

interface PostContentProps {
    content: string;
}

export function PostContent({ content }: PostContentProps) {
    const isLoading = useContextSelector(PostContext, (context) => {
        return context.isLoading;
    });
    return (
        <div>
            {!isLoading && (
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(
                                className || "",
                            );
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(
                                        /\n$/,
                                        "",
                                    )}
                                    style={dracula as any}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            )}
        </div>
    );
}
