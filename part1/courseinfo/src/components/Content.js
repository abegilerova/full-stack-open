import React from 'react';
import Part from './Part'

const Content = (props) => {

  const result = () => props.parts.map(part =>
    <Part name={part.name} exercises={part.exercises} />

  )

  return (
    <div>
      {result()}

    </div>
  )
}

export default Content;