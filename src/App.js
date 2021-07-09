import React from 'react';
import Tabla from './Tabla';

class App extends React.Component {
    render() {

        const personas = [
            {
                nombre: 'Clark',
                apellido: 'Kent',
            },
            {
                nombre: 'Bruce',
                apellido: 'Wayne',
            },
            {
                nombre: 'Peter',
                apellido: 'Parker',
            },
            {
                nombre: 'Selina',
                apellido: 'Kyle',
            },
        ];

        return (
            <div className="container">
                <h1>Tutorial de React de Neoguias!</h1>
                <Tabla datosPersonas={personas} />
            </div>
        );
    }

    state = {
        personas: [
            {
                nombre: 'Clark',
                apellido: 'Kent',
            },
            {
                nombre: 'Bruce',
                apellido: 'Wayne',
            },
            {
                nombre: 'Peter',
                apellido: 'Parker',
            },
            {
                nombre: 'Selina',
                apellido: 'Kyle',
            },
        ],
    }
    eliminarPersona = (indice) => {
        const { personas } = this.state

        this.setState({
            personas: personas.filter((personas, i) => {
                return i !== indice;
            }),
        });
    }
}

export default App;