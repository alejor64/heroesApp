import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import PublicRoute from '../../routers/PublicRoute'

describe('Pruebas en el <PublicRoute />', () => {
    test('Debe retornar el componente si no está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated= {false}
                    component= {() => <span>Probado!</span>}
                />
            </MemoryRouter>
        )

        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(true)
    })

    test('No debe retornar el componente si está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated= {true}
                    component= {() => <span>Probado!</span>}
                />
            </MemoryRouter>
        )

        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(false)
    })
    
})
