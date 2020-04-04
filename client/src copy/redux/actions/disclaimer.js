import { DISCLAIMER_ANSWER } from './actions';

export function setDisclaimerAnswer(answer) {
  return {
    type: DISCLAIMER_ANSWER,
    answer,
  };
}
