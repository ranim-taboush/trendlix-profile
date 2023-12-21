
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId, isMoblie = false }) => {

    const onReady = (event) => {
      const player = event.target;
    //   player.playVideo();
    };
    const onError = (error) => {
      console.error('YouTube Player Error:', error);
    };
  
    return (
        <div className="w-full h-full relative">
            <div className="absolute w-full h-full flex justify-center items-center">
                <YouTube
                    videoId={videoId}
                    onReady={onReady}
                    onError={onError}
                    opts={{
                        height:"100%",
                        width:"100%",
                        playerVars: {
                            controls: 1
                        }
                    }}
                    className = 'w-full h-full -mr-[20%] max-2xl:!w-[70%] max-2xl:h-[60%] max-2xl:-mr-[20%] max-lg:!w-[70%] max-lg:h-1/2 max-md:'
                />
            </div>
        </div>
    );
  };
  
  export default YouTubePlayer;