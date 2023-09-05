import styled from "styled-components";

export const Posts = styled.div`
    display: flex;
    gap: 0.875rem;
`;
export const CardContainer = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 0 4rem 0;
`;

export const Card = styled.div`
    cursor: pointer;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme["base-post"]};
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
        width: 240px;
        max-width: 100%;
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-title"]};
    }

    span {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
    }
`;
