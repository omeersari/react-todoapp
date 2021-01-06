import React from 'react';

const Item = ({item, setForm, setUpdate}) => {
    const editHandler = () => {
        setForm(item)
        setUpdate(true)
    }
    return (
        <div className={`itemBox ${item.status}`}>
            <div className="top">
                <h1>{item.title}</h1>
                <button onClick={editHandler}>EDIT</button>
            </div>
            <div className="bottom">
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default Item;