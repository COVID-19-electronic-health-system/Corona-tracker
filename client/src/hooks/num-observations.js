import { useSelector } from 'react-redux';

export default function useNumObservations() {
  const numObservations = useSelector(state => state.observationsReducer.numObservations);
  return numObservations;
}
