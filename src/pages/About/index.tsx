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
import { Link } from "react-router-dom";
import { useContext } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";
export function About() {
    const { userData } = useContext(PostContext);

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
                <h4>JavaScript data types and data structures</h4>
                <CardSocialMedia>
                    <SocialMedia>
                        <img src={github} alt="" />
                        <span>cameronwll</span>
                    </SocialMedia>
                    <SocialMedia>
                        <img src={calendar} alt="" />
                        <span>Há 1 dia</span>
                    </SocialMedia>
                    <SocialMedia>
                        <img src={coment} alt="" />
                        <span>5 comentários</span>
                    </SocialMedia>
                </CardSocialMedia>
            </CardContainer>

            <SectionCard>
                <p>
                    Programming languages all have built-in data structures, but
                    these often differ from one language to another. This
                    article attempts to list the built-in data structures
                    available in JavaScript and what properties they have. These
                    can be used to build other data structures. Wherever
                    possible, comparisons with other languages are drawn.
                    Dynamic typing JavaScript is a loosely typed and dynamic
                    language. Variables in JavaScript are not directly
                    associated with any particular value type, and any variable
                    can be assigned (and re-assigned) values of all types:
                </p>
            </SectionCard>
        </HeaderContainer>
    );
}
