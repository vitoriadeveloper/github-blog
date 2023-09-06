import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;

    .aligment {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 2rem;
    }
`;

export const HeaderCover = styled.div`
    height: 296px;
    max-height: 100%;
    background-image: url("./src/assets/cover.svg");
    background-position: center;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme["base-profile"]};
    width: 860px;
    max-width: 100%;
    display: flex;
    padding: 2rem;
    border-radius: 8px;
    margin-top: -94px;
    z-index: 2;
    gap: 2rem;
    margin-bottom: 2rem;

    h4 {
        font-size: 1.5rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
`;

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardNav = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    align-items: center;
    a:hover {
        text-decoration: underline;
    }
    span,
    a {
        color: ${(props) => props.theme.blue};
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: none;
    }
    .link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }
`;

export const CardSocialMedia = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const SectionCard = styled.div`
    width: 860px;
    max-width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
`;
