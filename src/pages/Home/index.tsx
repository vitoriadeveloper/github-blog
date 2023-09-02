import { Header } from "../../components/Header";
import {
    ContainerSection,
    ContainerHome,
    FilterCard,
    TotalPublications,
    CardContainer,
    Card,
    CardContent,
} from "./styles";

export function Home() {
    const limitCharacters = 100;
    const textAPI =
        "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to";

    const validaty =
        textAPI.length > limitCharacters
            ? textAPI.slice(0, limitCharacters) + "..."
            : textAPI.length;

    return (
        <ContainerHome>
            <Header />
            <ContainerSection>
                <FilterCard>
                    <TotalPublications>
                        <h4>Publicações</h4>
                        <span>6 publicações</span>
                    </TotalPublications>
                    <input type="text" placeholder="Buscar conteúdo" />
                </FilterCard>

                <CardContainer>
                    <Card>
                        <CardContent className="row-space-between">
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </CardContent>
                        <p>{validaty}</p>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </CardContent>
                        <p>{validaty}</p>
                    </Card>
                </CardContainer>
            </ContainerSection>
        </ContainerHome>
    );
}
