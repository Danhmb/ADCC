setTimeout(() => {
    const text1 = document.querySelector('.text-1');
    const text2 = document.querySelector('.text-2');
    text1.style.display = 'none';
    text2.style.display = 'none';

    const riseText = document.querySelector('.rise-text');
    riseText.classList.remove('hidden');
    riseText.classList.add('visible');

    setTimeout(() => {
        const videoContainer = document.querySelector('#player');
        videoContainer.classList.add('visible');

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            const player = new YT.Player('player', {
                videoId: 'tIJyu3eBACA', 
                playerVars: {
                    autoplay: 1, 
                    mute: 0,     
                    rel: 0,      
                    showinfo: 0  
                },
                events: {
                    'onReady': (event) => {
                        const videoElement = event.target.getIframe();
                        if (videoElement.requestFullscreen) {
                            videoElement.requestFullscreen();
                        } else if (videoElement.mozRequestFullScreen) { 
                            videoElement.mozRequestFullScreen();
                        } else if (videoElement.webkitRequestFullscreen) { 
                            videoElement.webkitRequestFullscreen();
                        } else if (videoElement.msRequestFullscreen) {
                            videoElement.msRequestFullscreen();
                        }
                    }
                }
            });
        };
        
    }, 2000); 
}, 5000);
