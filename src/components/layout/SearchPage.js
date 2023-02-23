import { useState } from 'react';
import $ from 'jquery';
export default function SearchPage() {
  const [userInput, setUserInput] = useState("");
  const [songData, setSongData] = useState([]);
  const [searching, setSearching] = useState(false);

  function handleChange(event) {
    setUserInput(event.target.value);
  }
  function HandleSubmit() {
    setSearching(true);
    $.ajax({
      type: "GET",
      data: {
        apikey: "6b6b75aa2cea775de78fdeab6837ab17",
        q_track: userInput,
        f_has_lyrics: true,
        s_artist_rating: "desc",
        format: "jsonp",
        callback: "jsonp_callback",
      },
      url: "https://api.musixmatch.com/ws/1.1/track.search",
      dataType: "jsonp",
      jsonpCallback: "jsonp_callback",
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        setSongData(data.message.body.track_list);
      },
    });
  }
  console.log(userInput);
  return (
    <>
      <h2 className="search">Write a song or a singer</h2>
      <label>Song Name</label>
      <input id="song" type="text" onChange={handleChange} />
      <button onClick={HandleSubmit}>Search </button>
      <div className="songContainer">
        {searching && songData.length === 0 ? (
          <h3 ClassName="nosong">Can't find that song</h3>
        ) : (
          songData.map((item, index) => (
            <div className="card" key={index}>
              <h4>{item.track.artist_name}</h4>
              <h4>{item.track.track_name}</h4>
              {item.track.has_lyrics === 0 ? (
                <h6>No lyrics for this song</h6>
              ) : (
                <a
                  rel="noreferrer"
                  href={item.track.track_share_url}
                  target="_blank"
                >
                  Link to Lyrics
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
