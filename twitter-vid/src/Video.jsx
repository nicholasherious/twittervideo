const Video = ({videoUrl}) => {
    
    const videoLink = videoUrl[0]?.url.split('?')[0]
    // const { videoData } = videoUrl
    console.log(videoLink)
  return (
    <>
    <video controls width='100%'>
      <source src={videoLink} type='video/mp4' />
      Sorry, your browser doesn't support videos.
    </video>
    <p><a href={videoLink}>Download Video</a></p>
    </>
  );
};

export default Video;
