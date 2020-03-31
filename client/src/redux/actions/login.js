export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';

export function setLoginLoading(isLoading) {
  return {
    type: SET_LOGIN_LOADING,
    isLoading,
  };
}
