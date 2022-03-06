import './index.css';
import React from 'react';

const styleProps = {
    'singup/teams' : {position : 'relative', top : '300px', left: '700px'}, // marginTop: '300px',  marginLeft: '660px'
    'login' : {position : 'absolute', left: '55px'},
    'singup' : {position : 'absolute', left: '55px'}
}

const Button = ({title, id, onClick, path}) => {
    return (
        <button className = "btn" id = {id} style = {styleProps[`${path}`]} onClick = {onClick}>{title}</button>
    )
}

export default  Button;
