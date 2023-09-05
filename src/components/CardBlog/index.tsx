import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CardContainer, Card, CardContent, Posts } from "./styles";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";

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
                        <CardContainer key={post.id}>
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
                                <p>
                                    {typeof post.body === "string" &&
                                    post.body.length > limitCharacters
                                        ? post.body.slice(0, limitCharacters) +
                                          "..."
                                        : post.body}
                                </p>
                            </Card>
                        </CardContainer>
                    );
                })
            ) : (
                <p>Carregando</p>
            )}
        </Posts>
    );
}
