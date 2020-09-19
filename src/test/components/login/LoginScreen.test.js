import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import {AuthContext} from '../../../auth/AuthContext'
import LoginScreen from '../../../components/login/LoginScreen'
import { types } from '../../../types/types'

describe('Pruebas en el componente <LoginScreen />', () => {
    const historyMock = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper.find('button').text()).toBe('Login')
    })
    
    test('Debe realizar el dispatch y navegación', () => {
        wrapper.find('button').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'alejor'
            }
        })
        expect(historyMock.replace).toHaveBeenCalledWith('/')
    })

    test('Debe realizar el dispatch y leer el localStorage', () => {
        wrapper.find('button').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'alejor'
            }
        })
        expect(historyMock.replace).toHaveBeenCalledWith('/')

        localStorage.setItem('lastPath', '/dc')
        wrapper.find('button').simulate('click')

        expect(historyMock.replace).toHaveBeenCalledWith('/dc')
    })
    
})
