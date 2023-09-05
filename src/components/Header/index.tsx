import { CardProfile } from "../CardProfile";
import { HeaderCover, HeaderContainer } from "./styles";

export interface UserData {
    avatar_url: string;
    bio: string;
    followers: number;
    html_url: string;
    name: string;
    login: string;
}

interface HeaderProps {
    user: UserData | null;
}
export function Header({ user }: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderCover />
            <CardProfile user={user} />
        </HeaderContainer>
    );
}
