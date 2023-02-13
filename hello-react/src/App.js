// import React, { Component } from "react";
// import Counter from './Counter';
// import MyComponent from './MyComponent';
// import Say from './Say';
// import ScrollBox from "./ScrollBox";
// import LifeCycleSample from "./LifeCycleSample";
// import ErrorBoundary from "./ErrorBoundary";

import React, { useState } from 'react';
import Info from './Info';


const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
            onClick={() => {
                setVisible(!visible) 
            }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info />}
        </div>
    );
}



export default App;
