import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
`;
export const ContainerSection = styled.div`
    width: 864px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const FilterCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin-bottom: 3rem;

    input {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme["base-border"]};
        background-color: ${(props) => props.theme["base-input"]};
        color: ${(props) => props.theme["base-label"]};
    }

    ::placeholder {
        color: ${(props) => props.theme["base-label"]};
    }
`;

export const TotalPublications = styled.div`
    display: flex;
    justify-content: space-between;

    h4 {
        font-size: 1.125rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
    span {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
    }
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
