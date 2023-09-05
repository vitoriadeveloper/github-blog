import { PostContext } from "../../contexts/PostContext";
import { FilterCard, TotalPublications } from "./styles";
import { useContext } from "use-context-selector";

export function FilterCards() {
    const { postData, setPostData } = useContext(PostContext);
    return (
        <FilterCard>
            <TotalPublications>
                <h4>Publicações</h4>
                <span>6 publicações</span>
            </TotalPublications>
            <input type="text" placeholder="Buscar conteúdo" />
        </FilterCard>
    );
}
