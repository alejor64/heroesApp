import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import HeroeCard from '../../../components/heroes/HeroeCard'
import { heroes } from '../../../data/heroes'

describe('Pruebas en el componente <HeroeCard />', () => {
    const hero = heroes[0]
    const id = hero.id
    const superhero = hero.superhero
    const alter_ego =  hero.alter_ego
    const first_appearance = hero.first_appearance
    const characters = hero.characters
    
    test('Debe renderizar el componente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HeroeCard id={id} superhero={superhero} alter_ego={alter_ego} first_appearance={first_appearance} characters={characters} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('img').prop('alt')).toBe(superhero)
        expect(wrapper.find('.card-title').text()).toBe(superhero)
        expect(wrapper.find('a').exists()).toBe(true)
    })
    
})
