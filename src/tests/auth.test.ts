import { setUser, unsetUser } from "../services/auth/actions";
import { authReducer, initialAuth } from "../services/auth/reducer";

describe('test auth', () => {
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