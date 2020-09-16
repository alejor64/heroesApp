import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher'
import HeroeCard from './HeroeCard'

const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(heroe => (
                    <HeroeCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}

export default HeroesList
