// Espera a animação inicial terminar e exibe o texto "RISE"
setTimeout(() => {
    // Oculta os textos da animação inicial
    const text1 = document.querySelector('.text-1');
    const text2 = document.querySelector('.text-2');
    text1.style.display = 'none';
    text2.style.display = 'none';

    // Exibe o texto "RISE"
    const riseText = document.querySelector('.rise-text');
    riseText.classList.remove('hidden');
    riseText.classList.add('visible');

    // Configura o vídeo após "RISE" aparecer
    setTimeout(() => {
        const videoContainer = document.querySelector('#player');
        videoContainer.classList.add('visible');

        // Carrega o script da API do YouTube
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Função chamada quando a API do YouTube é carregada
        window.onYouTubeIframeAPIReady = () => {
            const player = new YT.Player('player', {
                videoId: 'tIJyu3eBACA', // Substitua pelo ID do vídeo do YouTube
                playerVars: {
                    autoplay: 1, // Iniciar automaticamente
                    mute: 0,     // Vídeo sem som
                    rel: 0,      // Não mostrar vídeos relacionados
                    showinfo: 0  // Não mostrar informações do vídeo
                },
                events: {
                    'onReady': (event) => {
                        // Ao carregar o vídeo, colocar o vídeo em tela cheia
                        const videoElement = event.target.getIframe();
                        if (videoElement.requestFullscreen) {
                            videoElement.requestFullscreen();
                        } else if (videoElement.mozRequestFullScreen) { // Para Firefox
                            videoElement.mozRequestFullScreen();
                        } else if (videoElement.webkitRequestFullscreen) { // Para Safari
                            videoElement.webkitRequestFullscreen();
                        } else if (videoElement.msRequestFullscreen) { // Para IE/Edge
                            videoElement.msRequestFullscreen();
                        }
                    }
                }
            });
        };
        
    }, 2000); // Tempo após o texto "RISE" aparecer
}, 5000); // 5 segundos (tempo total da animação)
