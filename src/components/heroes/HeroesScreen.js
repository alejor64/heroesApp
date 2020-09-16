import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selector/getHeroesById'

const HeroesScreen = ({history}) => {

    const {heroeID} = useParams()
    const heroe = useMemo(() => getHeroesById(heroeID), [heroeID])

    if(!heroe){
        return <Redirect to="/" />
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = heroe

    const handleReturn = () => {
        if(history.length <= 2 && publisher==='DC Comics'){
            history.push('/dc')
        }else if (history.length <= 2 && publisher==='Marvel Comics') {
            history.push('/marvel')
        } else {
            history.goBack()
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeID}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: {alter_ego}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: {publisher}</b>
                    </li>
                    <li className="list-group-item">
                        <b>First Apparance: {first_appearance}</b>
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroesScreen
