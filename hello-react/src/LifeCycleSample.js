import React, { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };

    myRef = null;

    constructor(props) {
        super(props); // react에서 construtor을 가져오는거다
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    // 다음 받을 Props값과 다음 Props를 가져온다.
    // 특정 조건에 따라 업데이트를 막아줄 수 있는 함수 !
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    
    // 컴포넌트 제거
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    // 업데이트 되기 바로 직전에 return해서 컴포넌트 파일의 value를 가져올 수 있다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState);
        if (snapshot) {
            console.log("업데이트 되기 직전 색상: ", snapshot);
        }
    }

    render() {
        console.log("render");

        const style = {
            color: this.props.color,
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
