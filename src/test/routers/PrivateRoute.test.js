import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import PrivateRoute from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en el componente <PrivateRoute />', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn()

    test('Debe retornar el componente si está autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>    
                <PrivateRoute
                    isAuthenticated= {true}
                    component= {() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })

    test('Debe bloquear el componente si no está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>    
                <PrivateRoute
                    isAuthenticated= {false}
                    component= {() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(false)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
    
})
