

import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';

const Tracks = (props) => {
  return (
    <>
      <h3 style={{ color: "#212529", fontWeight: "bold" }} className="text-center mb-4">All Tracks</h3>
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
