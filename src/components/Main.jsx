import Form from "./Form"
import Counter from "./Counter";
export default function Main({children}){

    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}

Main.Form = Form;
Main.Counter = Counter;