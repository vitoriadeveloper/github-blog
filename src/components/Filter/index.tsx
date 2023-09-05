import { FilterCard, TotalPublications } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../../contexts/PostContext";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function FilterCards() {
    const total = useContextSelector(PostContext, (context) => {
        return context.postData;
    });
    const fetchPostData = useContextSelector(PostContext, (context) => {
        return context.fetchPostData;
    });
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });
    async function handleSearchPublications(data: SearchFormInput) {
        fetchPostData(data.query);
        console.log(data.query);
    }

    return (
        <FilterCard onSubmit={handleSubmit(handleSearchPublications)}>
            <TotalPublications>
                <h4>Publicações</h4>
                <span>{total.length} publicações</span>
            </TotalPublications>
            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register("query")}
            />
        </FilterCard>
    );
}
