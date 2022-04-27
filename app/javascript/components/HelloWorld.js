import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
  console.log('getgreetings() Action!');
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });

    return fetch(`v1/greetings.json`)
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingsSuccess(json)))
      .catch((error) => console.log(`Fetching Error ${error}`));
  };
}

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}
class HelloWorld extends React.Component {
  render() {
    const { greetings } = this.props;
    const greetingList = greetings.map((greeting) => {
      return (
        <li key={greeting.guid}>
          {greeting.name} {greeting.guid}
        </li>
      );
    });
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button
          className="getGreetingsbtn"
          onClick={() => this.props.getGreetings()}
        >
          getGreetings
        </button>
        <br />
        <ul>{greetingList} </ul>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
