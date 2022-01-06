// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from 'store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) => {
    // 인풋 값 변경
    const { TodosActions } = this.props;
    TodosActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    // 아이템 추가
    const { input, TodosActions } = this.props;
    TodosActions.insert(input); // 추가하고
    TodosActions.changeInput(''); // 기존 인풋값 비우기
  }

  handleToggle = (id) => {
    // 삭제선 켜고 끄기
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  }

  handleRemove = (id) => {
    // 아이템 제거
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onRemove={handleRemove}
        onInsert={handleInsert}
        onToggle={handleToggle}
      />
    );
  }
}

export default connect(
  // state 를 비구조화 할당 해주었습니다
  ({ todo }) => ({
    // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
    input: todo.get('input'),
    todos: todo.get('todos')
  }),
  (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodosContainer);