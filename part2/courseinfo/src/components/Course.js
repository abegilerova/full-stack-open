import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'


const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course