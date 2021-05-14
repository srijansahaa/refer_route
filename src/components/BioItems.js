import React from 'react';
// import { ReactSVG } from 'react-svg'
import { ReactSVG } from 'react-svg';

const BioItems = ({icon, text}) => {
    return (
        <div className="d-flex bioItems">
            <ReactSVG src={icon}/>
            <span>{text}</span>
        </div>
    )
}

export default BioItems;