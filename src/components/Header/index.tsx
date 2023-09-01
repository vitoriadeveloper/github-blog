import {
    CardContainer,
    CardInfo,
    CardNavigation,
    CardSocialMedia,
    HeaderCover,
    HeaderContainer,
    SocialMedia,
    GithubNav,
} from "./styles";
import github from "../../assets/github.svg";
import profile from "../../assets/profile.svg";
import link from "../../assets/link.svg";
import userProfile from "../../assets/user-profile.svg";
export function Header() {
    return (
        <HeaderContainer>
            <HeaderCover />
            <CardContainer>
                <img src={userProfile} alt="" />
                <CardInfo>
                    <CardNavigation>
                        <h3>Cameron Williamson</h3>
                        <GithubNav>
                            <a href="">Github</a>
                            <img src={link} alt="" />
                        </GithubNav>
                    </CardNavigation>
                    <p>
                        Tristique volutpat pulvinar vel massa, pellentesque
                        egestas. Eu viverra massa quam dignissim aenean
                        malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </p>
                    <CardSocialMedia>
                        <SocialMedia>
                            <img src={github} alt="" />
                            <span>cameronwll</span>
                        </SocialMedia>
                        <SocialMedia>
                            <img src={profile} alt="" />
                            <span>32 seguidores</span>
                        </SocialMedia>
                    </CardSocialMedia>
                </CardInfo>
            </CardContainer>
        </HeaderContainer>
    );
}
