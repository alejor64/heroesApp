import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import HeroesScreen from '../../../components/heroes/HeroesScreen'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Pruebas en el componente <HeroesScreen />', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    test('Debe de mostrarse el componente <Redirect /> si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <HeroesScreen
                    history={historyMock}
                />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })
    
    test('Debe mostrar un heroe si el parámetro existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk']}>
                <Route path="/heroe/:heroeID" component={HeroesScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('h5').text()).toBe('Characters')
        expect(wrapper.find('img').exists()).toBe(true)
    })

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk']}>
                <Route
                    path="/heroe/:heroeID"
                    component={() => <HeroesScreen history={historyMock} />}
                />
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click')
        expect(historyMock.push).toHaveBeenCalledWith('/marvel')
        expect(historyMock.goBack).not.toHaveBeenCalled()
    })

    test('Debe de regresar a la pantalla anterior con GOBACK', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk']}>
                <Route
                    path="/heroe/:heroeID"
                    component={() => <HeroesScreen history={historyMock} />}
                />
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click')
        expect(historyMock.goBack).toHaveBeenCalled()
        expect(historyMock.push).not.toHaveBeenCalled()
    })
    
    test('Debe de llamar el <Redirect /> si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk123456']}>
                <Route
                    path="/heroe/:heroeID"
                    component={() => <HeroesScreen history={historyMock} />}
                />
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('')
    })
    
})
