import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (value) => {
    setGood(value)
  }

  const setNeutralValue = (value) => {
    setNeutral(value)
  }

  const setBadValue = (value) => {
    setBad(value)
  }

  return (
    <>

      <p1>give feedback</p1>
      <br></br>

      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />

      <br></br>

      <p1>statistics</p1>

      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />


    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)