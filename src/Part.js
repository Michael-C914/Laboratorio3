import React from 'react'

const Part = (props) => {

	return (
		<div>
			<p>{props.part} {props.exercise}</p>
			<p>{props.part.name} {props.part.exercises}</p>
		</div>
	)
}

export default Part 