import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import MarvelScreen from '../../../components/marvel/MarvelScreen'

describe('Pruebas en el componente <DcScreen />', () => {
    test('Debe renderizar el componente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <MarvelScreen />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('HeroesList').exists()).toBe(true)
        expect(wrapper.find('h1').text()).toBe('Marvel')
    })
    
})
