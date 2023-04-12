const INCREASE = 'counter/INCREASE'; // action 타입 정의
const DECREASE = 'counter/DECREASE'; // action 타입 정의

export const increase = () => ({ type: INCREASE}); // action 생성 함수
export const decrease = () => ({ type: DECREASE}); // action 생성 함수
// 함수를 생성할 때 앞에 'export'를 입력함으로서 다른 파일에서 불러와 사용할 수 있다

// 리듀서 함수 생성

// 초기 상태 설정
const initialState =  {
    number: 0
};

// 초기 상태 설정
function counter(state = initialState, action){
    switch (action.type){
        case INCREASE :
            return{
                number: state.number + 1
            };
        case DECREASE :
            return{
                number: state.nuber - 1
            };
        default:
            return state;
    }
}

export default counter;

// export >> 여러개를 보낼 수 있다.
// export default >> 한 개만 보낼 수 있다.