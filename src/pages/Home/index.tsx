import { useEffect } from "react";
import { api } from "../../api";
import { Header } from "../../components/Header";
import {
    ContainerSection,
    ContainerHome,
    CardContainer,
    Card,
    CardContent,
} from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";
import { FilterCards } from "../../components/Filter";

export function Home() {
    const { postData, setPostData } = useContext(PostContext);
    const limitCharacters = 100;
    useEffect(() => {
        async function fetchPostData() {
            try {
                const response = await api.get(
                    "repos/vitoriadeveloper/github-blog/issues",
                );
                setPostData(response.data);
            } catch (error) {
                console.error("Erro ao buscar posts: ", error);
            }
        }
        fetchPostData();
    }, [setPostData]);

    return (
        <ContainerHome>
            <Header />
            <ContainerSection>
                <FilterCards />
                <div className="posts">
                    {postData ? (
                        postData.map((post) => {
                            return (
                                <CardContainer key={post.number}>
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
                                            {post.body.length > limitCharacters
                                                ? post.body.slice(
                                                      0,
                                                      limitCharacters,
                                                  ) + "..."
                                                : post.body.length}
                                        </p>
                                    </Card>
                                </CardContainer>
                            );
                        })
                    ) : (
                        <p>Carregando</p>
                    )}
                </div>
            </ContainerSection>
        </ContainerHome>
    );
}
