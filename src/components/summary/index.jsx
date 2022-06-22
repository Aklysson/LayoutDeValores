import { Container } from "./style";

export function Summary(props) {
    return (
        <Container>
            <h4>{props.title ?? "Free"}</h4>
            <p><strong>R$ {props.preço ?? "0,00"}</strong>/mês</p>
            <p>Lorem ipsum dolor sit amet consectetur dolor.</p>
            
 
        </Container>
    )
}