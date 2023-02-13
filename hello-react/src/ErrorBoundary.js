import React, { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        error: false
    };
    
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다.')
        console.log({ error, info });
        this.setState({
            error: true,
        });
    }

    render() {
        if (this.state.error) {
            return <div>에러가 발생했습니다!</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
