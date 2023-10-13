import { AUTH_REQUEST, setUser, unsetUser } from "../services/auth/actions";
import { authReducer, initialAuth } from "../services/auth/reducer";

describe('test auth', () => {
    it('should send an auth request', () => {
        expect(authReducer(initialAuth, {
            type: AUTH_REQUEST
        })).toEqual({
            authRequest: true,
            authChecked: false,
            authSuccess: false,
            email: '',
            name: ''
        });
    });

    it('should set user', () => {
        expect(authReducer(initialAuth, setUser({
            name: 'sagittaracc',
            email: 'sagittaracc@gmail.com'
        }))).toEqual({
            authRequest: false,
            authChecked: true,
            authSuccess: true,
            email: 'sagittaracc@gmail.com',
            name: 'sagittaracc'
        });
    });

    it('should unset user', () => {
        expect(authReducer(initialAuth, unsetUser())).toEqual({
            authRequest: false,
            authChecked: true,
            authSuccess: false,
            email: '',
            name: ''
        })
    })
});