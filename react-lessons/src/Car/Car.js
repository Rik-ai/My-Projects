import React, { Component } from 'react';
import Radium from 'radium'
import './Car.css'

const Car = props => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        border: '3px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
        ':hover': { //псевдоселектор с которым при наведении мышки на обьект он будет выделятся
            border: '2px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
            cursor: 'pointer'
        }
    }

    return (
        <div className='Car' style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                type='text'
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')} //данный параметр не понмает массивы по этому  мы передаём массив и превращяем его в строку через .join который соединяет каким-то символом все элементы в массиве
            />
            <button onClick={props.onDelete}>Delete!</button>
        </div>
    )
}


export default Radium(Car)