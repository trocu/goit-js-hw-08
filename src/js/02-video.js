import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const onPlay = function (timestamp) {
  //   console.log(timestamp.seconds);
  window.localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(timestamp.seconds)
  );
};

player.on('timeupdate', onPlay);

// console.log(
//   JSON.parse(window.localStorage.getItem('videoplayer-current-time'))
// );
// console.log(window.localStorage.getItem('videoplayer-current-time'));
player
  .setCurrentTime(window.localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
