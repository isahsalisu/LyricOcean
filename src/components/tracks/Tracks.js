

import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';

const Tracks = (props) => {
  return (
    <>
      <div className="image">
      <div className="col-md-6">
        <h1 className='your'>GET YOUR<h1 className='deep'>MUSIC DEEP</h1></h1>
        </div>
        </div>

       
      <div className="name">
        <h1 className='lyric'>LYRIC<h1 className='ocean'>OCEAN</h1></h1>
      </div>
    
      
      <div className="row">
        {
          props.allTracks
          ? props.allTracks.map(item => (
              <Track
                key={item.track.track_id}
                album={item.track.album_name}
                artist={item.track.artist_name}
                song={item.track.track_name}
                url={item.track.track_share_url}
              />
            ))
          : <Spinner />
        }
      </div>
    </>
  );
};

export default Tracks;
