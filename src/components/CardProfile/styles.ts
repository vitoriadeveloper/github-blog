import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${(props) => props.theme["base-profile"]};
    width: 860px;
    max-width: 100%;
    display: flex;
    padding: 2rem;
    border-radius: 8px;
    margin-top: -94px;
    z-index: 2;
    gap: 2rem;

    .profile {
        width: 148px;
        border-radius: 8px;
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardNavigation = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        line-height: 130%;
        color: ${(props) => props.theme["base-title"]};
        font-size: 1.5rem;
    }
`;

export const GithubNav = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    a {
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        color: ${(props) => props.theme.blue};
    }
    :hover {
        text-decoration: underline;
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

    span {
        color: ${(props) => props.theme["base-subtitle"]};
    }

    .github-profile {
        display: flex;
        text-decoration: none;
        align-items: center;
        gap: 0.5rem;
    }
`;
