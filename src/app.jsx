import React, { useState, useEffect } from 'react';
import './app.css';
import VideosList from './components/video_list/videos_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyCv5MC5IDVhuxXXJRkkIleipPqSTnyPBx4',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <h1>
      <VideosList videos={videos} />
    </h1>
  );
}

export default App;
