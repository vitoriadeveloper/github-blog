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
                        <p>
                            Programming languages all have built-in data
                            structures, but these often differ from one language
                            to another. This article attempts to list the
                            built-in data structures available in JavaScript and
                            what properties they have. These can be used to
                            build other data structures. Wherever possible,
                            comparisons with other languages are drawn. Dynamic
                            typing JavaScript is a loosely typed and dynamic
                            language. Variables in JavaScript are not directly
                            associated with any particular value type, and any
                            variable can be assigned...
                        </p>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3>JavaScript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </CardContent>
                        <p>
                            Programming languages all have built-in data
                            structures, but these often differ from one language
                            to another. This article attempts to list the
                            built-in data structures available in JavaScript and
                            what properties they have. These can be used to
                            build other data structures. Wherever possible,
                            comparisons with other languages are drawn. Dynamic
                            typing JavaScript is a loosely typed and dynamic
                            language. Variables in JavaScript are not directly
                            associated with any particular value type, and any
                            variable can be assigned...
                        </p>
                    </Card>
                </CardContainer>
            </ContainerSection>
        </ContainerHome>
    );
}
