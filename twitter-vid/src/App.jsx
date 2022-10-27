import axios from 'axios';
import { useState } from 'react';
import Video from './Video';
import './App.css';

const url = 'http://localhost:4000/twitter';

function App() {
  const [twitterId, setTwitterId] = useState('');
  const [videoData, setVideoData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { twitterId: twitterId });
      setVideoData(response.data[0]);
      setTwitterId('');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(videoData);
  return (
    <div className='App'>
      <div>
        {videoData ? <Video videoUrl={videoData} /> : null}
      </div>
     
      <div className='formContainer'>
        <form className='form'>
          <input
            type='text'
            name='twitterId'
            id='twitterId'
            value={twitterId}
            onChange={(e) => setTwitterId(e.target.value)}
            className='formInput'
            placeholder='twitter id'
          />
          <button className='formButton' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <p className='read-the-docs'>Submit twitter id to download video</p>
    </div>
  );
}

export default App;
