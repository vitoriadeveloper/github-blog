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
import { api } from "../../api";
import { useEffect, useState } from "react";

interface UserData {
    avatar_url: string;
    bio: string;
    followers: number;
    html_url: string;
    name: string;
    login: string;
}

export function CardProfile() {
    const [userData, setUserData] = useState<UserData | null>(null);
    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await api.get("/users/vitoriadeveloper");
                setUserData(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuário: ", error);
            }
        }
        fetchUserData();
    }, []);

    return (
        <CardContainer>
            <img src={userData?.avatar_url} alt="" className="profile" />
            <CardInfo>
                <CardNavigation>
                    <h3>{userData?.name}</h3>
                    <GithubNav>
                        <a
                            href={userData?.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <img src={link} alt="" />
                    </GithubNav>
                </CardNavigation>
                <p>{userData?.bio}</p>
                <CardSocialMedia>
                    <SocialMedia>
                        <a
                            href={userData?.html_url}
                            className="github-profile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={github} alt="" />
                            <span>{userData?.login}</span>
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <img src={profile} alt="" />
                        <span>{userData?.followers} seguidores</span>
                    </SocialMedia>
                </CardSocialMedia>
            </CardInfo>
        </CardContainer>
    );
}
