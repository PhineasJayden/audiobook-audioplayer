import { chapters } from '../utils/chapters.js';
import AudioItem from '../Audiobook/AudioItem.jsx';
import AudioPlayer from '../Audiobook/AudioPlayer.jsx';
import { useEffect, useState } from 'react';

import ButtonBack from '../ui/ButtonBack.jsx';

function Audiobook() {
  const [curChapter, setcurChapter] = useState(0);
  const [playlist, setShowPlaylist] = useState(false);

  function handleBack() {
    if (playlist) {
      setShowPlaylist(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <>
      {playlist && <ButtonBack handleBack={handleBack} />}

      {playlist ? (
        chapters.map((chapter, index) => {
          return (
            <AudioItem
              img={chapter.imgPreview}
              title={chapter.title}
              key={chapter.id}
              id={index}
              setcurChapter={setcurChapter}
              setShowPlaylist={setShowPlaylist}
              duration={chapter.time}
            />
          );
        })
      ) : (
        <AudioPlayer
          curChapter={curChapter}
          setcurChapter={setcurChapter}
          setShowPlaylist={setShowPlaylist}
          isSingleChapter={false}
        />
      )}
    </>
  );
}

export default Audiobook;

//styling the audio element https://blog.shahednasser.com/how-to-style-an-audio-element/
