import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        userName: "",
        message: "",
    };

    // **** constructor를 이용한 메서드 작성 방법 ****

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value,
    //     });
    // }

    // handleClick(e) {
    //     alert(this.state.message);
    //     this.setState({
    //         message: "",
    //     });
    // }

    handleChange = (e) => {
        this.setState({
            // message: e.target.value,
            [e.target.name]: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.username + ":" + this.state.message);
        this.setState({
            username: "",
            message: "",
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="내용을 입력하세요."
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button type="button" onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;
