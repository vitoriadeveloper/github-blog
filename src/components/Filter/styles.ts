import styled from "styled-components";

export const FilterCard = styled.form`
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
