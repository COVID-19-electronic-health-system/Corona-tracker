import { useSelector } from 'react-redux';

export function useNumObservations() {
  const numObservations = useSelector(state => state.observationsReducer.numObservations);
  return numObservations;
};
