import { CardProfile } from "../CardProfile";
import { HeaderCover, HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderCover />
            <CardProfile />
        </HeaderContainer>
    );
}
