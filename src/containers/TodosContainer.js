// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from 'store/modules/todo'

class TodosContainer extends Component{
    handleChange=(e)=>{
        // input 값 변경
        const {TodosActions} = this.props;
        TodosActions.changeInput(e.target.value);
    }

    handleInsert=()=>{
        const { input, TodosActions} = this.props;
        TodosActions.insert(input); 
        TodosActions.changeInput("") //기존 인풋 값 비우기
    }

    handleToggle=(id)=>{
        const {TodosActions } = this.props;
        TodosActions.toggle(id);
    }

    handleRemove=(id)=>{
        const {TodosActions} = this.props;
        TodosActions.remove(id);
    }

    render(){
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;
        const { input, todos } = this.props;
        return(
            <Todos 
                input={input}
                todos={todos}
                onToggle = {handleToggle}
                onRemove={handleRemove}
                onChange={handleChange}
                onInsert={handleInsert}
            />
        );
    }
}

export default connect(
    // state 비구조화 할당
    (todo) => ({
         // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
        input : todo.get('input'),
        todos: todo.get('todos')
    }),
    (dispatch) => ({TodosActions: bindActionCreators(todosActions, dispatch)})

)(TodosContainer)