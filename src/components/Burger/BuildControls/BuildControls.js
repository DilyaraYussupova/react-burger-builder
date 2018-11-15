import React from 'react';
import  './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'; 

const buildControls =(props)=> {

    return (
        <div className='BuildControls'>
        {props.ingredients.map(ctrl =>
              <BuildControl
                key={ctrl.name}
                label={ctrl.label}
                addItems={() =>props.addItems(ctrl.name)}
                removeItems={() =>props.removeItems(ctrl.name)} 
                disable={ctrl.disable}
              />
       )} 
        </div>
    );
}

export default buildControls;