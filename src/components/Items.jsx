export default function Items({name, index}) {
    return(
        <>
            <li key={index}>{name}</li>
        </>
    )
}