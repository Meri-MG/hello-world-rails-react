import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
export const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}

function getGreetings() {
  console.log('getgreetings() Action!');
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });

    return fetch(`v1/greetings.json`)
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        response.json();
      })
      .then((json) => dispatch(getGreetingsSuccess(json)))
      .catch((error) => console.log(`Fetching Error ${error}`));
  };
}
class HelloWorld extends React.Component {
  render() {
    const { greetings } = this.props;
    console.log(greetings, 'this are greetings');
    // const greetingList = greetings.map((greeting) => {
    //   return <li key={greeting.greeting}>{greeting.greeting}</li>;
    // });
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    return (
      <React.Fragment>
        Greeting: <p>{randomGreeting.greeting}</p>
        <button
          className="getGreetingsbtn"
          onClick={() => this.props.getGreetings()}
        >
          getGreetings
        </button>
        <br />
        {/* <ul>{greetingList} </ul> */}
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
