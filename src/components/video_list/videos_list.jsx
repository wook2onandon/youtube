import React from 'react';
import VideosItem from '../video_item/videos_item';
import styles from './video_list.module.css';

const VideosList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideosItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideosList;
