import { Container } from "./styles"

export function Header() {
    return (
        <Container>
            <h1>DevChallenge</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/feature">Features</a>
                    </li>
                    <li>
                        <a href="/contato">Contact</a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}