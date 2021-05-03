import React from 'react';
import VideosItem from '../video_item/videos_item';
import styles from './video_list.module.css';

const VideosList = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideosItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideosList;
