import { createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE'; // action 타입 정의
const DECREASE = 'counter/DECREASE'; // action 타입 정의


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

// 초기 상태 설정
const initialState =  0;

// 초기 상태 설정
const counter = handleActions(
    {
        [INCREASE]: state => state +1,
        [DECREASE]: state => state -1
    },
    initialState
);

export default counter;

// export >> 여러개를 보낼 수 있다.
// export default >> 한 개만 보낼 수 있다.