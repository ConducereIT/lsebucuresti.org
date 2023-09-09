import React from 'react';
import {useState} from 'react';

export default function Home() {

    const [data, setData] = useState(1);

    const handler = () => {
        setData(data + 1);
    }

    return (
        <div>
            <a href="/">Home</a>
            <p></p>
            <a href="/membrii">Membrii</a>
            <p> Count: {data}</p>
            <button onClick={handler}>Click me</button>
        </div>
    );

}