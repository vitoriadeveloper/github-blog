import { Header } from "../../components/Header";
import { ContainerSection, ContainerHome, ContainerBlogPosts } from "./styles";
import { FilterCards } from "../../components/Filter";
import { CardBlog } from "../../components/CardBlog";

export function Home() {
    return (
        <ContainerHome>
            <Header />
            <ContainerBlogPosts>
                <ContainerSection>
                    <FilterCards />
                    <CardBlog />
                </ContainerSection>
            </ContainerBlogPosts>
        </ContainerHome>
    );
}
