import styled from "styled-components";

export const Container = styled.header`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 470px){    
        display: block;
        padding-bottom: 1rem;
        h1{
            margin-bottom: 1rem;
        }
    }

    h1 {
        color: var(--orange);
    }
    nav {

        ul {
            list-style: none;
            
            li {
                display: inline-block;
                & + li {
                    margin-left: 1rem;
                }
                a {
                    text-decoration: none;
                    color: var(--gray);
                    font-size: 1.5rem;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            
                     
        }
    }
`;