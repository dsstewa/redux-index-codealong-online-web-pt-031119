import { connect } from 'react-redux';
import React, { Component } from 'react'
import Todo from './Todo'

class TodosContainer extends Component {
    
  renderTodos = () => { 
        return this.props.todos.map((todo,id) => <Todo key={id} text={todo} />)
             
    }
    
    render() {
        {console.log(this.state)}
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodosContainer);