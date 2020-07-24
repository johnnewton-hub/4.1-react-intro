import React from 'react';
import HelloYourName from './HelloYourName';

class HelloStudents extends React.Component
{
  // "props" is what most React developers will call this parameter, stick to convention here!
  constructor ( props )
  {
    // Sets up our object/component to use the properties passed in...
    super( props ); // (We'll be able to reference them later!)

    // Set up initial state (we use "state" to store data for the component.)
    this.state = {
      students: [
        {
          name: "Osa",
          favFood: "Ice Cream"
        },
        {
          name: "Muzzafar",
          favFood: "Pasta"
        },
        {
          name: "Danielle",
          favFood: "Chips"
        }
      ]
    };
  }

  render ()
  {
    return (
      <ul>
        {this.state.students.map( student => (
          <li>
            <HelloYourName name={student.name} favFood={student.favFood} />
          </li>
        ) )}
      </ul>
    );
  }
}

export default HelloStudents;
