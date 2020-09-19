import '@testing-library/jest-dom'
import { authReducer } from "../../auth/authReducer"
import { types } from '../../types/types'

describe('Pruebas en authReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged : false})
    })
    
    test('Debe autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Alejandro'
            }
        }
        const state = authReducer({logged: false}, action)
        // console.log(state)
        expect(state).toEqual({
            logged : true,
            name: 'Alejandro'
        })
    })
    
    test('Debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({logged: false}, action)
        // console.log(state)
        expect(state).toEqual({logged : false})
    })
    
})
