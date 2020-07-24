import React from 'react';

class HelloYourName extends React.Component
{
  render ()
  {
    return (
      <section>
        <h2>Welcome to our Website!</h2>
        <p>
          Hello there, {this.props.name}.
          Your favourite food must be {this.props.favFood}!
        </p>
      </section>
    );
  }
}

export default HelloYourName;
