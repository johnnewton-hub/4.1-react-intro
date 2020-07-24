// We must import React in order to reference "React.Component" and/or other React classes/features.
import React from 'react';

// We extend a class to carry over all of its properties/methods, and we can add our own for our new class.
class Hello extends React.Component {
  /**
   * render
   * @summary An expected method for React components.
   * @return (JSX) Output objects/string for when this component is referenced.
   */
  render ()
  {
    /*
     * We can only return one object at a time.
     * This means we must have a wrapper JSX 'element', or if we don't want a wrapper...
     * we can use <></> (a blank 'element') to get around that!
     */
    return (
      <>
        <h2>My First Component</h2>
        <p>Hello, World!</p>
      </>
    )
  }
}

// In order for Hello to be accessible via import in other files, we have to have an export in this file.
export default Hello;
