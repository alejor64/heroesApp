import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import Navbar from '../components/ui/Navbar'

const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/heroe/:heroeID" component={HeroesScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </Fragment>
    )
}

export default DashboardRoutes
