import {
    CardContainer,
    CardInfo,
    CardNavigation,
    GithubNav,
    CardSocialMedia,
    SocialMedia,
} from "./styles";
import github from "../../assets/github.svg";
import profile from "../../assets/profile.svg";
import link from "../../assets/link.svg";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";

export function CardProfile() {
    const user = useContextSelector(PostContext, (context) => {
        return context.userData;
    });
    return (
        <CardContainer>
            <img src={user?.avatar_url} alt="" className="profile" />
            <CardInfo>
                <CardNavigation>
                    <h3>{user?.name}</h3>
                    <GithubNav>
                        <a
                            href={user?.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <img src={link} alt="" />
                    </GithubNav>
                </CardNavigation>
                <p>{user?.bio}</p>
                <CardSocialMedia>
                    <SocialMedia>
                        <a
                            href={user?.html_url}
                            className="github-profile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={github} alt="" />
                            <span>{user?.login}</span>
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <img src={profile} alt="" />
                        <span>{user?.followers} seguidores</span>
                    </SocialMedia>
                </CardSocialMedia>
            </CardInfo>
        </CardContainer>
    );
}
