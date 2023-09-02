import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderCover = styled.div`
    height: 296px;
    width: 100vw;
    max-height: 100%;
    background-image: url("./src/assets/cover.svg");
    background-position: center;
    background-size: cover;
    position: relative;
`;
