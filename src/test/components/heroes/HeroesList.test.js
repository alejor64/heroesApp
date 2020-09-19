import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import HeroesList from '../../../components/heroes/HeroesList'

describe('Pruebas en el component <HeroesList />', () => {
    test('Debe renderizar el componente', () => {
        const publisher = 'DC Comics'
        const wrapper = mount(
            <MemoryRouter>
                <HeroesList publisher={publisher} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('HeroeCard').length).toBe(10)
    })
    
})
