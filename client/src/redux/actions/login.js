import { SET_LOGIN_LOADING } from './actions'

export function setLoginLoading(isLoading) {
    return {
        type: SET_LOGIN_LOADING,
        isLoading
    }
}