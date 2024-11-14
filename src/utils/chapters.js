import k01_audio from '../assets/audio/k01_audio.mp3';
import k02_audio from '../assets/audio/k02_audio.mp3';

import K_01 from '../assets/images/K_01.png';
import K_02 from '../assets/images/K_02.png';

import K_01_prev from '../assets/images/K_01_prev.png';
import K_02_prev from '../assets/images/K_02_prev.png';

export const chapters = [
  {
    id: 'spk363636',
    chapter: 1,
    title: 'Todgeweiht',
    src: k01_audio,
    time: '03:50',
    imgPreview: K_01_prev,
    alt: 'Spooky sitzt zusammengekauert auf seinem Bett',
  },
  {
    id: 'spkBF3030',
    chapter: 2,
    title: 'Schwellenwert',
    src: k02_audio,
    time: '03:48',
    imgPreview: K_02_prev,
    alt: 'Spooky schwebt mit angezogenen Beinen ängstlich durch einen Gang. Aus dem Boden ragen Schattenhände mit klauen',
  },
];
