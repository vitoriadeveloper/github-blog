import styled from "styled-components";

export const HeaderCover = styled.div`
    height: 296px;
    max-height: 100%;
    background-image: url("./src/assets/cover.svg");
    background-size: cover;
    position: relative;
`;
export const CardContainer = styled.div`
    background-color: ${(props) => props.theme["base-profile"]};
    width: 860px;
    max-width: 100%;
    display: flex;
    padding: 2rem;
    border-radius: 8px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardNavigation = styled.div`
    display: flex;
`;

export const CardSocialMedia = styled.div`
    display: flex;
`;
