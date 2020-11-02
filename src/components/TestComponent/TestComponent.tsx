import React, {useEffect, useState} from "react";
import "./TestComponent.css"

function TestComponent (props: {name: string}) {
    
    const [age, setAge] = useState(20)
    
    useEffect(() => {
        console.log("TestComponent was created");
    }, [])
    
    useEffect(() => {
        console.log("Age has been updated to: " + age);
    }, [age])
    
    return <div className={"TestComponent"}>    
            <p>Olá {props.name} idade {age}, Test Component!!!</p>
            <button onClick={() => {
                setAge(age + 1)
            }}>+</button>
        </div>
}

export default TestComponent;