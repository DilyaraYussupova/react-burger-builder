import React from 'react';
import './BuildControl.css';

const buildControl =(props)=> {
 
    return (
        <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button disabled={props.disable} className="btn btn-secondary" onClick={props.removeItems}>REMOVE</button>
        <button className='btn btn-primary' onClick={props.addItems}>ADD</button>   
        </div>
       )
}

export default buildControl;