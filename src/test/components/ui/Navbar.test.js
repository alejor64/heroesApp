import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom'
import Navbar from '../../../components/ui/Navbar'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'

describe('Pruebas en el componente <Navbar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Alejo',
            logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Debe de mostrarse correctamente', () => {
        // console.log(wrapper.find('.text-info').text())
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text()).toBe(contextValue.user.name)
    })
    
    test('Debe de llamar el Logout y el usar e history', () => {
        wrapper.find('button').simulate('click')

        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })
    
})
