import React, {useState} from "react"
import SongResults from "./songResults.js"
import {base_url} from "./constants.js"

export default function Search() {
  const [formSong, setSong] = useState("")
  const [songResults, setSongResults] = useState({})
  const [searchType, setSearchType] = useState("song")
  const [endpoint, setEndpoint] = useState("/tracks/search?track=")
  const handleChange = (event) => {
    setSong(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(base_url + endpoint + formSong)
    .then(response => response.json())
    .then(json => setSongResults(json))
    .catch(error => console.log(error))
    setSong("")
  }
  return (
    <div className="search">
      <button
        id={
          searchType === "song" ?
          "active" : "inactive"
        }
        className="waves-effect waves-light btn-large"
        onClick={() => {
          setSearchType("song")
          setEndpoint("/tracks/search?track=")
        }}
        >Song</button>
      <button
        id={
          searchType === "lyrics" ?
          "active" : "inactive"
        }
        className="waves-effect waves-light btn-large"
        onClick={() => {
          setSearchType("lyrics")
          setEndpoint("/tracks/lyrics?lyrics=")
        }}
        >Lyrics</button>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="song"
              type="text"
              value={formSong}
              onChange={handleChange}
              placeholder={
                searchType === "song" ?
                "Song Title"
                : "Lyrics from a song (ex. Imagine there's no heaven)"
              }
            />
          </div>
        </div>
        <input
          className="waves-effect waves-light btn-large"
          type="submit"
          value="Search"/>
      </form>
      {
        typeof songResults.tracks !== "undefined" && songResults.tracks.length > 0 ?
        <SongResults
          songResults={songResults}
        />
        :
        <div className="response-message">
          {
            typeof songResults.message !== "undefined" ?
            <p>{songResults.message}</p>
            : null
          }
        </div>
      }
    </div>
  );
}
