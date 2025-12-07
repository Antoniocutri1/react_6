export default function Items({name, index, email}) {
    return(
        <>
            <li key={index}><strong>Nome:</strong> {name} <strong>E-mail:</strong> {email}</li>
        </>
    )
}