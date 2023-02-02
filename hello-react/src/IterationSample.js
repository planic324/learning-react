import React, {useState} from "react";

const IterationSample = () => {
    const [name, setNames] = useState([
        {id: 1 , text : '눈사람'},
        {id: 2 , text : '얼음'},
        {id: 3 , text : '눈'},
        {id: 4 , text : '바람'}
    ]);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames =name.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const nameList = name.map(name => <li key={name.id}>{name.text}</li>);

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>
                <li>{nameList}</li>
            </ul>
        </div>
    );
};

export default IterationSample;
