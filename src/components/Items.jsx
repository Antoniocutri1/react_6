import { Link } from "react-router";

export default function Items({name, index, id}) {
    return(
        <>
            <li key={index}> <strong>Titolo:</strong> {name} <Link to={`/post/${id}`} >Dettaglio</Link></li>
        </>
    )
}