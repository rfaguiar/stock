import React, {useState} from "react";
import "./TestComponent.css"

function TestComponent (props: {name: string}) {
    
    const [age, setAge] = useState(20)
    
    return <div className={"TestComponent"}>    
            <p>Olá {props.name} idade {age}, Test Component!!!</p>
            <button onClick={() => {
                setAge(age + 1)
            }}>+</button>
        </div>
}

export default TestComponent;