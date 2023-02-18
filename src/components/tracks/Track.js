// import React from 'react'

// const Track = (props) => {

//     return (
//       <div>
      
      
      
//       </div>
//     )

// }

// export default Track;

import React from 'react';
import {Link} from 'react-router-dom';

const Track = (props) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm" style={{borderRadius: "20px"}}>
                <div className="card-body">
                    <h5 style={{fontSize: "20px"}}>{props.artist}</h5>
                    <p className="card-text" style={{fontSize: "20px"}}>
                        <strong><i className="fas fa-play"></i>Track</strong>: {props.song}
                        <br />
                        <strong><i className="fas fa-compact-disc"></i>Album</strong>: {props.album}
                    </p>
                    <Link target={'_blank'} to={props.url} className="btn btn-dark btn-block" style={{borderRadius: "20px", fontWeight:"400"}}>
                        <i className="fas fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Track;

