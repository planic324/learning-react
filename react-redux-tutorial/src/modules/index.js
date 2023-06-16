// combineReducers 로 리듀서 하나로 합치기
import { combineReducers } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux';
// createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야된다.
// 그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐주는 과정이 필요
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;

