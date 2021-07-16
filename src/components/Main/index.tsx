import { Container } from "./styles"
import teamImg from  "../../assets/team.jpg"

export function Main() {
    return (
        <Container>
            <div>
                <h2>Create amazing graphics</h2>
                <p>Colaborate and create beautiful graphics with your team</p>
                <button type="button">Start now</button>
            </div>
            <div>
                <img src={teamImg} alt="Team" />
            </div>
        </Container>
    );
}