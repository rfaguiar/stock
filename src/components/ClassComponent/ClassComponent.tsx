import React from "react";

class ClassComponent extends React.Component<{ name: string}> {
    
    state = {
        name: "Mundo !!!!!"
    }
    
    render() {
        return <div>
            <p>Olá, {this.props.name} Eu sou um componente baseado em classe!!!</p>
            <p>name: {this.state.name}</p>
            <button onClick={() => this.setState({name: 'Usuario'})}>Click me</button>        
        </div>;
    }
}

export default ClassComponent;
