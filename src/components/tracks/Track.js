

import React from 'react';

const Track = (props) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{props.song}</h5>
          <p className="card-text">
            <strong><i className="fas fa-play"></i> Track</strong>: {props.song}
            <br />
            <strong><i className="fas fa-compact-disc"></i> Album</strong>: {props.album}
            <br />
            <strong><i className="fas fa-user"></i> Artist</strong>: {props.artist}
          </p>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i> View Lyrics
          </a>
        </div>
      </div>
    </div>
  );
};

export default Track;



