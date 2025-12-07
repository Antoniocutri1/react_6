import Form from "./Form"
import Counter from "./Counter";
import LoadingData from "./LoadingData";

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