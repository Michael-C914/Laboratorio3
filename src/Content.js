import React from 'react'
import Part from './Part.js'

const Content = (props) => {
	return (
		<div>
		    <Part part={props.part1}/>
		    <Part part={props.part2}/>
		    <Part part={props.part3}/>
		    {props.parts.map((part) => {
			    return(
			        <Part
			          part={part}
			        />
			    )
			})}
		</div>
	)
}

export default Content 