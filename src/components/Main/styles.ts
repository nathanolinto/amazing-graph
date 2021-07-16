import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 720px){    
        grid-template-columns: 1fr;
    }

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    
    color: var(--gray);

    h2 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    button {
        font-size: 1.5rem;
        color: #FFFFFF;
        background: var(--orange);
        border: 0;
        padding: 0.5rem 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    img {
        width: 100%;
    }
    
`;