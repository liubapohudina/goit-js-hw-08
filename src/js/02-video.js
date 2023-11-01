import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoContainer = document.getElementById('vimeo-player');

const idPlayer = new Player(videoContainer);
const onPlay = function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}
idPlayer.on('timeupdate', throttle(onPlay, 1000));
//idPlayer.on('touchstart', function(event) {
   // event.preventDefault();
//}, { passive: false });

const actualTime = localStorage.getItem('videoplayer-current-time')
 console.log(actualTime)
idPlayer.setCurrentTime(actualTime)
        .then(function(seconds) {
            //const actualTime = seconds;
            //console.log('Current time set to', actualTime);
        })
        .catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    console.error('The time was out of range (less than 0 or greater than the video’s duration).');
                    break;
                default:
                    console.error('Some other error occurred:', error);
                    break;
            }
        });

