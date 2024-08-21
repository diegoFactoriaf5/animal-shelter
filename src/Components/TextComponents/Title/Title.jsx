import React from 'react';


export default function Title({ title, hidden }) {
    return (
        <div >
            <h1 className= {`${hidden} md:block text-3xl md:text-4xl font-bold text-black relative z-10`}>{title}</h1>
        </div>
    );
}