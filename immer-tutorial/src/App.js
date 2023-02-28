import { useRef, useCallBack, useState } from "react";

const App = () => {
    const nextID = useRef(1);
    const [form, setForm] = useState({ name: "", username: "" });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });

    const onChange = useCallBack(
        e => {
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: [value],
            });
        },
        [form]
    );

    const onSubmit = useCallBack(
        e => {
            e.preventDefault();
            const info = {
                id: nextID.current,
                name: form.name,
                username: form.username,
            };

            setData({
                ...data,
                array: data.array.concat(info),
            });

            setForm({
                name: "",
                username: "",
            });
            nextID.current += 1;
        },
        [data, form.name, form.username]
    );

    const onRemove = useCallBack(
        id => {
            setData({
                ...data,
                array: data.array.filter((info) => info.id !== id),
            });
        },
        [data]
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map((info) => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
