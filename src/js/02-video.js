import Player from '@vimeo/player';

const videoContainer = document.getElementById('vimeo-player');

const idPlayer = new Player(videoContainer);

idPlayer.on('touchstart', function(event) {
    event.preventDefault();
}, { passive: false });

idPlayer.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    console.log(localStorage.idPlayer = { "videoplayer-current-time": currentTime });

    idPlayer.setCurrentTime(currentTime)
        .then(function(seconds) {
            const actualTime = seconds;
            console.log('Current time set to', actualTime);
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
});
