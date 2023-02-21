// import { useState } from "react";
// import axios from "axios";
// import Tracks from "../tracks/Tracks";
// import Lyrics from "../lyrics/Lyrics";

// function SearchPage() {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [lyrics, setLyrics] = useState("");

//   const handleSearchInputChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleSearchFormSubmit = (e) => {
//     e.preventDefault();
//     if (searchText.trim() !== "") {
//       axios
//         .get(
//           `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${searchText}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
//         )
//         .then((res) => {
//           setSearchResults(res.data.message.body.track_list);
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   const handleLyricsButtonClick = (trackId) => {
//     axios
//       .get(
//         `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
//       )
//       .then((res) => {
//         setLyrics(res.data.message.body.lyrics.lyrics_body);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center mb-5">Search for a Track</h1>
//       <form onSubmit={handleSearchFormSubmit}>
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search for a track..."
//             value={searchText}
//             onChange={handleSearchInputChange}
//           />
//           <div className="input-group-append">
//             <button className="btn btn-primary" type="submit">
//               Search
//             </button>
//           </div>
//         </div>
//       </form>
//       {searchResults.length === 0 ? null : (
//         <Tracks
//           allTracks={searchResults}
//           handleLyricsButtonClick={handleLyricsButtonClick}
//         />
//       )}
//       {lyrics === "" ? null : <Lyrics lyrics={lyrics} />}
//     </div>
//   );
// }

// export default SearchPage;


import { useState } from 'react';
import $ from 'jquery';
export default function SearchPage() {
  const [userInput, setUserInput] = useState('');
  const [songData, setSongData] = useState([]);
  const [searching, setSearching] = useState(false);

  function handleChange(event) {
    setUserInput(event.target.value);
  }
  function HandleSubmit() {
    setSearching(true);
    $.ajax({
      type: 'GET',
      data: {
        apikey: '6b6b75aa2cea775de78fdeab6837ab17',
        q_track: userInput,
        f_has_lyrics: true,
        s_artist_rating: 'desc',
        format: 'jsonp',
        callback: 'jsonp_callback',
      },
      url: 'https://api.musixmatch.com/ws/1.1/track.search',
      dataType: 'jsonp',
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json',
      success: function (data) {
        console.log(data);
        setSongData(data.message.body.track_list);
      },
    });
  }
  console.log(userInput)
  return (
    <>
      <h2>Search</h2>
      <label>Song Name</label>
      <input id="song" type="text" onChange={handleChange} />
      <button onClick={HandleSubmit}>Search </button>
      <div className="songContainer">
        {searching && songData.length === 0 ? (
          <h3>Can't find that song</h3>
        ) : (
          songData.map((item, index) => (
            <div className="card" key={index}>
              <h4>{item.track.artist_name}</h4>
              <h4>{item.track.track_name}</h4>
              {item.track.has_lyrics === 0 ? (
                <h6>No lyrics for this song</h6>
              ) : (
                <a href={item.track.track_share_url} target="_blank">
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