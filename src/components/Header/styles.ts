import styled from "styled-components";
import cover from "../../assets/cover.svg";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

export const HeaderCover = styled.div`
    height: 296px;
    width: 100%;
    max-height: 100%;
    background-image: url(${cover});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow-x: hidden;
`;
