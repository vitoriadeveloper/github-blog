import {
    CardContainer,
    CardInfo,
    CardNav,
    CardSocialMedia,
    HeaderContainer,
    HeaderCover,
    SectionCard,
    SocialMedia,
} from "./styles";
import { CaretLeft } from "phosphor-react";
import link from "../../assets/link.svg";
import coment from "../../assets/coment.svg";
import calendar from "../../assets/calendar.svg";
import github from "../../assets/github.svg";
import { Link, useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostContent } from "./components/Content";

export function About() {
    const { postId } = useParams();
    const user = useContextSelector(PostContext, (context) => {
        return context.userData;
    });
    const postData = useContextSelector(PostContext, (context) => {
        return context.postData;
    });
    const selectedPost = postData.find(
        (post) => post.number === Number(postId),
    );

    if (!selectedPost) {
        return <p>Post não encontrado</p>;
    }
    return (
        <HeaderContainer>
            <HeaderCover />

            <CardContainer>
                <CardInfo>
                    <CardNav>
                        <Link to={"/"} className="link">
                            <CaretLeft
                                size={12}
                                color="#3294F8"
                                weight="bold"
                            />
                            <span>voltar</span>
                        </Link>
                    </CardNav>
                    <CardNav>
                        <a href="">ver no github</a>
                        <img src={link} alt="" />
                    </CardNav>
                </CardInfo>
                <h4>{selectedPost.title}</h4>
                <CardSocialMedia>
                    <SocialMedia>
                        <img src={github} alt="" />
                        <span>{user?.login}</span>
                    </SocialMedia>
                    <SocialMedia>
                        <img src={calendar} alt="" />
                        <span>
                            {" "}
                            {formatDistanceToNow(
                                new Date(selectedPost.updated_at),
                                {
                                    addSuffix: true,
                                    locale: ptBR,
                                },
                            )}
                        </span>
                    </SocialMedia>
                    <SocialMedia>
                        <img src={coment} alt="" />
                        <span>{selectedPost.comments} comentários</span>
                    </SocialMedia>
                </CardSocialMedia>
            </CardContainer>

            <SectionCard>
                <SectionCard>
                    <PostContent content={selectedPost.body} />
                </SectionCard>
            </SectionCard>
        </HeaderContainer>
    );
}
