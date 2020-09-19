import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import AppRouter from '../../routers/AppRouter'
import {AuthContext} from '../../auth/AuthContext'

describe('Pruebas en <AppRouter />', () => {
    
    test('Debe de mostrar el login sino está autenticado', () => {
        const user = {
            logged: false
        }

        const wrapper = mount(
            <AuthContext.Provider value= {{user}}>
                <AppRouter />
            </AuthContext.Provider>
        )

        // console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('button').text()).toBe('Login')
    })

    test('Debe de mostrar el componente Marvel si está autenticado', () => {
        const user = {
            logged: true,
            name: 'Probado!'
        }

        const wrapper = mount(
            <AuthContext.Provider value= {{user}}>
                <AppRouter />
            </AuthContext.Provider>
        )

        // console.log(wrapper.html())
        expect(wrapper.find('h1').text()).toBe('Marvel')
    })
    
})
