import React from 'react';

const Total = (props) => {

  const total = props.parts.reduce((s, part) => s + part.exercises, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total