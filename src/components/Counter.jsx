import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prev) => prev + 1)
    }
    const decrement = () => {
        setCounter((prev) => prev - 1)
    }

    return (
        <>
            <h1>Contatore</h1>
            <p>Il valore del contatore è {counter} </p>
            <button type="button" className="increment" onClick={increment}>+</button>
            <button type="button" className="decrement" onClick={decrement}>-</button>
        </>
    )

}


