import React, { useState, useEffect } from 'react'
import './styles.css'
import Card from '../../components/Card'

function Home() {
    const [personName, setPersonName] = useState('')
    const [people, setPeople] = useState([])

    function handleAddPerson() {
        const newPerson = {
            name: personName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        }
        setPeople(prevState => [...prevState, newPerson])
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="container">

            <header>
                <h1>Lista de presença</h1>
                <div>
                    <strong>Rodrigo</strong>
                    <img src="https://github.com/rodrigorgtic.png" alt="Foto de perfil" />
                </div>
            </header>

            <input
                type="text"
                placeholder="Digite o nome..."
                onChange={e => setPersonName(e.target.value)} />


            <button type="button" onClick={handleAddPerson}>
                Adicionar
            </button>

            {
                people.map(person => (
                    <Card
                        key={person.time}
                        name={person.name}
                        time={person.time} />
                ))
            }
        </div>
    )
}

export default Home
