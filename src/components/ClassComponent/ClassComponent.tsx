import React from "react";

class ClassComponent extends React.Component<{ name: string}> {
    
    constructor(props: any) {
        super(props);
        console.log('constructor reached');
    }
    
    state = {
        name: "Mundo !!!!!"
    }
    
    componentDidMount() {
        console.log('did mount reached');
    }
    
    componentDidUpdate(prevProps: Readonly<{ name: string }>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('did update reached');
    }

    render() {
        console.log('render reached');
        return <div>
            <p>Olá, {this.props.name} Eu sou um componente baseado em classe!!!</p>
            <p>name: {this.state.name}</p>
            <button onClick={() => this.setState({name: 'Usuario'})}>Click me</button>        
        </div>;
    }
}

export default ClassComponent;
