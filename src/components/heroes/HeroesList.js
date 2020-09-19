import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher'
import HeroeCard from './HeroeCard'
import PropTypes from 'prop-types'

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

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired
}

export default HeroesList
