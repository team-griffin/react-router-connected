import { connect } from 'react-redux';

const addLocation = connect((state) => {
  return {
    location: state.routing.location,
  };
});

export default addLocation;