import { useState } from "react";
import axios from "axios";
import Tracks from "../tracks/Tracks";
import Lyrics from "../lyrics/Lyrics";

function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [lyrics, setLyrics] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${searchText}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then((res) => {
          setSearchResults(res.data.message.body.track_list);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLyricsButtonClick = (trackId) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics.lyrics_body);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Search for a Track</h1>
      <form onSubmit={handleSearchFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a track..."
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      {searchResults.length === 0 ? null : (
        <Tracks
          allTracks={searchResults}
          handleLyricsButtonClick={handleLyricsButtonClick}
        />
      )}
      {lyrics === "" ? null : <Lyrics lyrics={lyrics} />}
    </div>
  );
}

export default SearchPage;