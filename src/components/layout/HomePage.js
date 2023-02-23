import React, { useEffect, useState } from "react";
import Tracks from "../tracks/Tracks";
import $ from "jquery";

const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    $.ajax({
      type: "GET",
      data: {
        apikey: "14aab7e62d4061cc06ea3842feb6fcfe",

        chart_name: "top",
        format: "jsonp",
        callback: "jsonp_callback",
        country: "uk",
        has_lyrics: 1,
      },
      url: "https://api.musixmatch.com/ws/1.1/chart.tracks.get",
      dataType: "jsonp",
      jsonpCallback: "jsonp_callback",
      contentType: "application/json",
      success: function (response) {
        setData(response.message.body.track_list);
      },
    });
  }, []);

  return (
    <>
      <h1>Hey</h1>
      <Tracks allTracks={data} />
    </>
  );
};
export default HomePage;
