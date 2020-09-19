import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import SearchScreen from '../../../components/search/SearchScreen'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Pruebas en el componente <SearchScreen/>', () => {
    
    test('Debe mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').exists()).toBe(true)
    })
    
    test('Debe de mostrar a Batman y el input con el queryString', () => {
        const queryString = 'batman'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe(queryString)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('HeroeCard').exists()).toBe(true)
    })
    
    test('Debe mostrar un error sino se encuentra el heroe', () => {
        const queryString = 'batman123'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-danger').exists()).toBe(true)
        expect(wrapper.find('.alert-danger').text()).toBe(`There is no a heroe with "${queryString}"`)
    })
    
    test('Debe llamar el PUSH del History', () => {
        const history = {
            push: jest.fn()
        }
        const queryString = 'batman'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
                <Route path="/search" component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name: "searchText",
                value: queryString
            }
        })

        wrapper.find('form').prop('onSubmit')({preventDefault(){}})
        expect(history.push).toHaveBeenCalledWith(`?q=${queryString}`)
    })
    
})
