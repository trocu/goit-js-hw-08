import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player', {});

const TIMESTAMP = 'videoplayer-current-time';
const onPlay = e => {
  // console.log(e.seconds);
  window.localStorage.setItem(TIMESTAMP, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(window.localStorage.getItem(TIMESTAMP)));
