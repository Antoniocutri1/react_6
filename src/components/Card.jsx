export default function Card({name, email}) {
    return(
        <>
            <div>
                <h3>Card Utente</h3>
                <p><strong>Nome:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </>
    )

}