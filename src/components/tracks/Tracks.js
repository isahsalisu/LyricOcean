// import React, {Component} from 'react';
// import {Consumer} from '../../context';
// import Spinner from '../layout/Spinner';
// import Track from '../tracks/Track';

// class Tracks extends Component {
//     render(){
//         return(
//             <>
//             <div>Hey</div>
//             </>
//             // <Consumer>
//             //     {value => {
//             //         const {track_list, heading} = value;
//             //         if(track_list === undefined || track_list.length === 0){
//             //             return <Spinner />;
//             //         }else{
//             //             return (
//             //                 <React.Fragment>
//             //                     <h3 style={{color: "#212529", fontWeight: "bold"}} className="text-center mb-4">{heading}</h3>
//             //                 <div className="row">
//             //                     {track_list.map(item => (
//             //                         <Track key={item.track.track_id} track={item.track} />
//             //                     ))}
//             //                 </div>
//             //                 </React.Fragment>
//             //             );
//             //         }
//             //     }}
//             // </Consumer>
//         )
//     }
// }

// export default Tracks;

import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';

const Tracks = (props) => {

//   if (track_list === undefined || track_list.length === 0) {
//     return <Spinner />;
//   }
console.log(props.allTracks)
  return (
    <>
      <h3 style={{ color: "#212529", fontWeight: "bold" }} className="text-center mb-4">All Tracks</h3>
      <div className="row">

        { !props.allTracks ? <div>Loading</div> : props.allTracks.map(item => (
            <Track album={item.track.album_name} artist={item.track.artist_name} song={item.track.track_name} url={item.track.track_share_url} />
        ))}
      </div>
    </>
  );
};

export default Tracks;
