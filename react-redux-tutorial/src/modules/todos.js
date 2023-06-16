// 1. 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo르 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크해지
const REMOVE = 'todos/REMOVE'; // todo를 제거

// 2. 액션 생성 함수 만들기
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})

let id = 3;
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});
// 액션 객체를 만들 때 파라미터 외에 사전에 이미 선언되어 있는 id라는 갑에도 의존합니다.
// 이 액션 생성 함수는 호출될 때마다 id 값에 1씩 더 해 줍니다. 이 id 값은 각 todo 객체가 들고 있 될 고윳값입니다.

// 여기서 id 값이 3인 이유 : 초기 상태를 작성할 때 todo 객체 두개를 사전에 미리 넣어 둘 것이기 때문에

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

// 3. 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            };
        case INSERT:
            return{
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return{
                ...state,
                todos: state.todos.map(todo =>
                        todo.id === action.id ? {...todo, done: !todo.done} : todo
                    )
            }
        case REMOVE:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;