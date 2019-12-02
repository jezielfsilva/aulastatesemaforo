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
                <form>
                    <label>
                        nome :
                        <input onChange={this.getname} type="name" placeholder="escreva aqui" />
                    </label>
                    <p>{this.state.nome}</p>
                    <label>
                        idade :
                        <input onChange={this.getage} type="number" placeholder="digitar aqui" />
                    </label>
                    <p>{this.state.idade}</p>
                </form>
            </div>
        )
    }
}

export default forml;