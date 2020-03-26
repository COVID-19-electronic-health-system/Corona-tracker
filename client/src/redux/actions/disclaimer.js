import { SET_DISCLAIMER_MODAL } from './actions'

export const setDisclaimer = (agreeToDisclaimer) => ({
  type: SET_DISCLAIMER_MODAL,
  agreeToDisclaimer
})