export default function Input({name, onChange}){
    return(
        <>
            <label htmlFor={name}>Inserisci {name}</label>
            <input type="text" name={name} onChange={onChange} />
        </>
    )
}
