import React from 'react';

class forml extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            idade: null,
        }
    }

    getname = (event) => {
        this.setState({
            nome: event.target.value,
        })
    }

    getage = (event) => {
        this.setState({
            idade: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form className="FormEnter">
                    <label className="BoxEnter">
                        nome :
                        <input className="Enter" onChange={this.getname} type="name" placeholder="escreva aqui" />
                    </label>
                    <label className="BoxEnter">
                        idade :
                        <input className="Enter" onChange={this.getage} type="number" placeholder="digitar aqui" />
                    </label>
                    <p className="Text">{this.state.nome}</p>
                    <p className="Text">{this.state.idade}</p>
                </form>
            </div>
        )
    }
}

export default forml;