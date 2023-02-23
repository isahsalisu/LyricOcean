
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

    if (userInput.length < 2) return;
    setSearching(true);
    $.ajax({
      type: "GET",
      data: {
        apikey: "14aab7e62d4061cc06ea3842feb6fcfe",
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
      <h2 className="search">Get Your Song Lyrics</h2>
      <label></label>
      <input id="song" type="text" onChange={handleChange} placeholder="Type your song title or artist name" />

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

