// action 정의 : action 정의는 대문자로 정의한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action 함수를 만들어준다
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter 초기 상태와 리듀서 함수를 만들어 준다.

// counter 초기화
const initialState = {
  number: 0,
};

// counter button 동작 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default: 
      return state;
  }
}

export default counter;