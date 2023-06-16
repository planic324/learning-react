// 초기 상태 및 리듀서 함수 만들기

const INCREASE = 'counter/INCREASE'; // 액션타입 정의
const DECREASE = 'counter/DECREASE'; // 액션타입 정의

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// export를 사용함에 따라 이 함수를 다른 파일에서 불러와 사용이 가능하다.
// export default와는 다르게 여러개를 내보낼 수 있다.

const initialState = {
    number : 0
};

function counter(state = initialState, action) {
    switch (action.type){
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return{
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter; // 단 한개만 내보낼 수 있다.
