import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player', {});
const TIMESTAMP = 'videoplayer-current-time';

const onPlay = e => {
  window.localStorage.setItem(TIMESTAMP, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

//Check if there's a timestamp in localStorage, if false (null) return last value (0)
player.setCurrentTime(JSON.parse(window.localStorage.getItem(TIMESTAMP)) || 0);
