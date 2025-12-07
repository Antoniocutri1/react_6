import { useState } from "react";

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
            <form action="" onSubmit={submit}>
                <label htmlFor="name">Inserisci il nome</label>
                <input type="text" name="name" id="name" onBlur={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Inserisci e-mail</label>
                <input type="email" name="email" id="email" onBlur={(e) => setEmail(e.target.value)}/>

                <button type="submit" >Invia</button>
            </form>

            {card && (
                <div className="card">
                    <h3>Card Utente</h3>
                    <p><strong>Nome:</strong> {card.name}</p>
                    <p><strong>Email:</strong> {card.email}</p>
                </div>
            )}
        </>
    )
    
}