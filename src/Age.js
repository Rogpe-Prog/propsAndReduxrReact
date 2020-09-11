import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, sub } from './actions'

class Age extends Component{
    render(){
        return(
            <div>
                <p>
                Just Age: {this.props.age}
                <span> </span>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
                </p>
                <p>
                 {this.props.age >= 18 ? 'You are of age!' : this.props.age < 0 ? 'You do not born...' : 'Sorry you are minor'}
                </p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        add: () => dispatch(add),
        sub: () => dispatch(sub),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Age)