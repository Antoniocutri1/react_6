import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Form() {
      
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [card, setCard] = useState(null);
    
    const submit = (e) => {
        setCard({name, email})
        e.preventDefault()
    }
    

    return (
        <>
            <form className="form" action="" onSubmit={submit}>

                <Form.Input name="name" onChange={(e) => setName(e.target.value)}/>
                <Form.Input name="email" onChange={(e) => setEmail(e.target.value)}/>
    
                <button type="submit" >Invia</button>

            </form>
            {card && (
                <Form.Card name={card.name} email={card.email}/>
            )}
        </>
    )
    
}

Form.Card = Card;
Form.Input = Input;
