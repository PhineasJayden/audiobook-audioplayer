import { useEffect } from 'react';
import { formatTime } from '../utils/helpers.js';
import { useRef } from 'react';

function AudioRange({ duration, seconds, audio, curTime }) {
  const rangeRef = useRef(null);

  useEffect(() => {
    if (rangeRef.current === null) {
      return;
    } else {
      handleTrack(rangeRef.current);
    }
  }, [seconds]);

  function handleTrack(e) {
    var value = ((e.value - e.min) / (e.max - e.min)) * 100;
    e.style.background =
      'linear-gradient(to right, var(--lila-mittel) 0%, var(--lila-mittel) ' +
      value +
      '%,var(--lila-hell) ' +
      value +
      '%, var(--lila-hell) 100%)';
  }

  return (
    <div>
      <input
        type='range'
        min='0'
        max={duration}
        ref={rangeRef}
        default='0'
        value={seconds}
        onChange={(e) => {
          audio.currentTime = e.target.value;
        }}
        //onInput={(e) => handleTrack(e.target)}
        style={{ marginTop: '30px', marginBottom: '10px' }}
        className='range'
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
          fontSize: 'var(--size-m)',
        }}
      >
        <p>{curTime}</p>
        <p>{formatTime(duration)}</p>
      </div>
    </div>
  );
}

export default AudioRange;
