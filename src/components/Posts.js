import React from 'react';
import { ReactSVG } from 'react-svg'
import Thumbnail from '../assets/Thumbnail.svg'

const Posts = ({title}) => {
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-2">
        //             <ReactSVG src={Thumbnail} />
        //         </div>
        //         <div className="col-10 d-flex flex-column justify-content-center">
        //             <div className="d-flex">
        //                 <div className="d-flex flex-column justify-content-center">
        //                     <h6>Job Title</h6>
        //                     <p>Scelerisque sem phasellus et egestas nibh.</p>
        //                 </div>
        //                 <div>
        //                     August 4, 2020 | 8:55 PM
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="posts d-flex justify-content-between">
            <div className="d-flex">
                <ReactSVG src={Thumbnail} />
                <div className="d-flex flex-column justify-content-center ms-5">
                    <h6>{title}</h6>
                    <p>Scelerisque sem phasellus et egestas nibh.</p>
                </div>
            </div>
            <div className="timeDate">August 4, 2020 | 8:55 PM</div>
        </div>
    )
}

export default Posts;