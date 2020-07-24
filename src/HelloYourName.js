import React from 'react';

class HelloYourName extends React.Component
{
  // "props" is what most React developers will call this parameter, stick to convention here!
  constructor ( props )
  {
    // Sets up our object/component to use the properties passed in...
    super( props ); // (We'll be able to reference them later!)
  }

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
