// counter.js + todo.js 합치기
// createStore 함수를 사용하여 스토어를 만들때는 리듀서를 1개만 사용해야한다.
// 때문에, 만들어 놓은 counter.js, todo.js 리듀서를 합쳐야된다.
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
