import React from 'react'
import PureComp from './PureComp'

const LowerComp = () => {
  return (
    <div className='lower'>
        <h1> šP U R E C O M P O N E N Tš„</h1>
        <ul>
            <li>š” Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or not.</li>
            <li>PureComponent class are treated as pure components.</li>
            <li>A React component is considered pure if it renders the same output for the same state and props.</li>
        </ul>
        <PureComp/>
        
    </div>
  )
}

export default LowerComp