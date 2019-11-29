import React from 'react';

class Semaforo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            semaforo: 'off',
        }
    }

    ficar = (type) => {
        this.setState({
            semaforo: type,
        });

        document.getElementById('cor').style.color = type;
    }

    render() {
        return (
            <div>
                <p id={'cor'}>{this.state.semaforo}</p>
                <button onClick={() => this.ficar('red')}>vermelho</button>
                <button onClick={() => this.ficar('yellow')}>amarelo</button>
                <button onClick={() => this.ficar('green')}>verde</button>
            </div>
        )
    }
}

export default Semaforo;