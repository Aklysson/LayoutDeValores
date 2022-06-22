import { Summary } from "../summary";
import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
     <Summary />
     <Summary title="Básico" 
        preço="29,90"/>
     <Summary title="Profissional"
     preço="59,90"/>
        </Container>
    )
}