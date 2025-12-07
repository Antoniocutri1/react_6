import Form from "./Form"
import Counter from "./Counter";
import List from "./List";
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
Main.List = List;