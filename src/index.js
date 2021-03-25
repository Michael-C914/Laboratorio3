import React from 'react'
import ReactDOM from 'react-dom'
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
  	const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
  	 },
  {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
  	 exercises: 7
  },
    {
    name: 'State of a component',
    exercises: 14
 }
 exercises: 14
   }
  ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
      <Content part1={part1}
               part2={part2}
               part3={part3}/>
      <Total part1={part1}
             part2={part2}
             part3={part3}/>
             <Content parts={parts} />
      <Total parts={parts} />
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))