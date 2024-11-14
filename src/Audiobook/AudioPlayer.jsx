import { chapters } from '../utils/chapters.js';
import { Oval } from 'react-loader-spinner';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbPlayerSkipBack,
  TbPlayerPlayFilled,
  TbPlayerSkipForward,
  TbPlayerPauseFilled,
  TbRewindBackward10,
  TbRewindForward10,
} from 'react-icons/tb';
import { LuListMusic } from 'react-icons/lu';
import { formatTime } from '../utils/helpers.js';
import { IconContext } from 'react-icons/lib';

import AudioRange from './AudioRange.jsx';
import Volume from './Volume.jsx';

const ListIcon = styled(LuListMusic)`
  font-size: var(--size-l) !important;
  color: var(--lila-mittel) !important;
  margin-right: 10px;
`;

const AudioPlayerContainer = styled.div`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-bottom: 60px;
  margin-top: 135px;
`;

const Img = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
  align-self: center;
  border-radius: 38px;
  box-shadow: var(--shadow);
  margin-bottom: 35px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 370px;
  margin-bottom: 3px;
`;

function AudioPlayer({
  curChapter,
  setcurChapter,
  setShowPlaylist,
  isSingleChapter,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [curTime, setCurTime] = useState('00:00');

  const [duration, setDuration] = useState(0);

  const [seconds, setSeconds] = useState();

  const [activeChapter, setActiveChapter] = useState(chapters[0]);

  const { imgPreview, id, src, chapter, title, alt } = activeChapter;

  const [audio, setAudio] = useState();

  const audioRef = useRef(null);

  useEffect(() => {
    setActiveChapter(chapters[curChapter]);
  }, [curChapter]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio) {
        setSeconds(audio.currentTime);
        const newTime = formatTime(audio.currentTime);

        setCurTime(newTime);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [audio]);

  useEffect(() => {
    if (isSingleChapter || curChapter === 0) return;
    audioRef.current?.pause();
    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [curChapter, isSingleChapter]);

  function skipForward() {
    console.log('skipped');
    audio.currentTime = audio.currentTime + 10;
  }
  function skipBack() {
    audio.currentTime = audio.currentTime - 10;
  }

  function handlePause() {
    audio.pause();
    setIsPlaying(false);
  }

  function handlePlay() {
    audio.play();
    setIsPlaying(true);
  }

  function handlePrevious() {
    const newChapter = curChapter - 1;
    setcurChapter(newChapter);
  }

  function handleNext() {
    if (curChapter === chapters.length - 1) return;
    const newChapter = curChapter + 1;
    setcurChapter(newChapter);
  }

  function handleOnLoaded() {
    setIsReady(true);
    setIsLoading(false);
    setAudio(audioRef.current);
  }

  return (
    <AudioPlayerContainer>
      <IconContext.Provider
        value={{
          style: { fontSize: '30px' },
        }}
      >
        <audio
          src={src}
          preload='auto'
          id={id}
          onEnded={handleNext}
          ref={audioRef}
          onLoadStart={() => setIsLoading(true)}
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onLoadedMetadata={handleOnLoaded}
          onCanPlay={handleOnLoaded}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <Img src={imgPreview} alt={alt} />

        <Row>
          <h3>{title}</h3>
          <Volume audio={audioRef.current} />
        </Row>

        <Row style={{ justifyContent: 'flex-start' }}>
          {!isSingleChapter && (
            <ListIcon onClick={() => setShowPlaylist(true)} />
          )}
          <p>Kapitel {chapter}</p>
        </Row>

        <AudioRange
          duration={duration}
          seconds={seconds}
          audio={audio}
          curTime={curTime}
        />

        <Row>
          {curChapter === 0 || isSingleChapter ? (
            <TbPlayerSkipBack
              aria-label='vorheriges kapitel'
              disabled={true}
              aria-disabled
            />
          ) : (
            <TbPlayerSkipBackFilled
              onClick={handlePrevious}
              aria-label='vorheriges Kapitel abspielen'
            />
          )}
          <TbRewindBackward10
            onClick={skipBack}
            aria-label='10 Sekunden zurückspulen'
          />
          {isLoading && (
            <Oval
              visible={true}
              height='20'
              width='20'
              strokeWidth={4}
              strokeWidthSecondary={4}
              color='#CEB7FF'
              secondaryColor='rgba(206,183,255,0.3)'
              ariaLabel='oval-loading'
              wrapperStyle={{}}
              wrapperClass=''
            />
          )}

          {!isLoading && !isPlaying ? (
            <TbPlayerPlayFilled
              onClick={handlePlay}
              disabled={!isReady}
              aria-label='abspielen'
            />
          ) : (
            !isLoading && (
              <TbPlayerPauseFilled onClick={handlePause} aria-label='pause' />
            )
          )}
          <TbRewindForward10
            onClick={skipForward}
            aria-label='10 sekunden vorspulen'
          />
          {!isSingleChapter && curChapter !== chapters.length - 1 ? (
            <TbPlayerSkipForwardFilled
              onClick={handleNext}
              aria-label='nächstes Kapitel abspielen'
            />
          ) : (
            <TbPlayerSkipForward
              aria-label='go to next'
              disabled={true}
              aria-disabled
            />
          )}
        </Row>
      </IconContext.Provider>
    </AudioPlayerContainer>
  );
}

AudioPlayer.propTypes = {
  curChapter: PropTypes.any,
  setcurChapter: PropTypes.any,
  setShowPlaylist: PropTypes.any,
  isSingleChapter: PropTypes.bool,
};

export default AudioPlayer;
