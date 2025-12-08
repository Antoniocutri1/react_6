import Form from "../views/Form"
import Counter from "../views/Counter";
import LoadingData from "../views/LoadingData";

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
Main.LoadingData = LoadingData;