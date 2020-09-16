import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import HeroeCard from '../heroes/HeroeCard'
import { getHeroesByName } from '../../selector/getHeroesByName'

const SearchScreen = ({history}) => {

    const location = useLocation()
    const {q = ''} = queryString.parse(location.search)

    const [values, handleInputChange] = useForm({
        searchText: q
    })
    
    const {searchText} = values

    const heroesFilter = useMemo(() => getHeroesByName(q), [q])
    
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q ==='') && 
                            <div className="alert alert-info">
                                Search a Heroe
                            </div>
                    }

                    {
                        (q !=='' && heroesFilter.length === 0) && 
                            <div className="alert alert-danger">
                                There is no a heroe with "{q}"
                            </div>
                    }

                    {
                        heroesFilter.map(heroe => (
                            <HeroeCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
