import React from 'react'
import ReactDOM from 'react-dom'

const Courses = ({ courses }) => {
  const listCourses = () =>
    courses.map(course => <Course key={course.id} course={course} />)

  return (
    <div>
      {listCourses()}
    </div>
  )
}

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

const Header = (props) => {
  console.log(props)
  return (

    <h1>{props.course}</h1>

  )
}

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

const Part = (props) => {

  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}


const Total = (props) => {

  const total = props.parts.reduce((s, part) => s + part.exercises, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}


export default Courses