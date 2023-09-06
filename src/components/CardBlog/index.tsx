import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CardContainer, Card, CardContent, Posts } from "./styles";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";
import { Link } from "react-router-dom";
import { PostContent } from "../../pages/About/components/Content";
import { Spinner } from "../Spinner";
const customLinkStyle = {
    textDecoration: "none",
    color: "#AFC2D4",
};

export function CardBlog() {
    const limitCharacters = 100;
    const postData = useContextSelector(PostContext, (context) => {
        return context.postData;
    });
    return (
        <Posts>
            {postData ? (
                postData.map((post) => {
                    return (
                        <Link
                            to={`/${post.number}`}
                            style={customLinkStyle}
                            key={post.id}
                        >
                            <CardContainer>
                                <Card>
                                    <CardContent className="row-space-between">
                                        <h3>{post.title}</h3>
                                        <span>
                                            {formatDistanceToNow(
                                                new Date(post.updated_at),
                                                {
                                                    addSuffix: true,
                                                    locale: ptBR,
                                                },
                                            )}
                                        </span>
                                    </CardContent>

                                    <PostContent
                                        content={
                                            typeof post.body === "string" &&
                                            post.body.length > limitCharacters
                                                ? post.body.slice(
                                                      0,
                                                      limitCharacters,
                                                  ) + "..."
                                                : post.body
                                        }
                                    />
                                </Card>
                            </CardContainer>
                        </Link>
                    );
                })
            ) : (
                <Spinner />
            )}
        </Posts>
    );
}
