import { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

import styled from 'styled-components';

const VolumeSlider = styled.input`
  -moz-transform: rotate(270deg);
  transform: rotate(270deg);
  border: 0;
  width: 10px;
  height: 5px;
  vertical-align: bottom;
  z-index: 5;
  -webkit-appearance: none;
  appearance: none;
  width: 90%;
  cursor: pointer;
  outline: none;
  margin-bottom: 60px;
  border-radius: 16px;
  accent-color: var(--lila-mittel);

  &::-webkit-slider-runnable-track {
    height: 5px;
    border-radius: 5px;
  }

  &::-moz-range-track {
    height: 5px;
    background: var(--lila-hell);
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    background-color: var(--lila-mittel);
    border-radius: 50%;
    margin-top: -7px;
  }

  ::-moz-range-thumb {
    border: none;
    height: 20px;
    width: 20px;
    background-color: var(--lila-mittel);
    border-radius: 50%;
    margin-top: -7px;
  }
`;

function Volume({ audio }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [volume, setVolume] = useState(0.5);

  function handleVolumeChange(vol) {
    if (!audio) return;
    audio.volume = vol;
    setVolume(vol);
  }

  function togglePopover() {
    if (!isPopoverOpen) {
      setIsPopoverOpen(true);
    } else {
      setIsPopoverOpen(false);
    }
  }

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['top']}
      height={'60px'}
      content={
        <VolumeSlider
          type='range'
          aria-label='volume'
          name='volume'
          min={0}
          step={0.05}
          max={1}
          value={volume}
          class='range'
          onChange={(e) => handleVolumeChange(e.currentTarget.valueAsNumber)}
        />
      }
      onClickOutside={() => setIsPopoverOpen(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {volume === 0 ? (
          <HiVolumeOff onClick={togglePopover} />
        ) : (
          <HiVolumeUp onClick={togglePopover} />
        )}
      </div>
    </Popover>
  );
}

export default Volume;
