import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"A D H I K  A R I "
      }
    }
     changeName=()=>{
        this.setState({name:"R A J A T "})
    }
  render() {
   
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button  onClick={()=>this.changeName()}>Click Me</button>
      </div>
    )
  }
}