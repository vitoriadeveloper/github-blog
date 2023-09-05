import { Header, UserData } from "../../components/Header";
import { ContainerSection, ContainerHome } from "./styles";

import { useContext } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";
import { FilterCards } from "../../components/Filter";
import { CardBlog } from "../../components/CardBlog";

export function Home() {
    const { userData } = useContext(PostContext);

    return (
        <ContainerHome>
            <Header user={userData as UserData | null} />
            <ContainerSection>
                <FilterCards />
                <CardBlog />
            </ContainerSection>
        </ContainerHome>
    );
}
