
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
            <div className="absolute w-full h-full flex justify-center items-center z-10">
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
                    className = 'w-full h-full -mr-[20%] max-2xl:!w-[70%] max-2xl:h-[60%] max-2xl:-mr-[20%] max-lg:!w-[70%] max-lg:h-1/2 max-md:rotate-90 max-md:mr-0 max-md:-ml-[12%] max-md:-mb-[25%] max-md:!w-4/5 max-md:h-1/2 max-xs:!w-full max-xs:h-1/3'
                />
            </div>
        </div>
    );
  };
  
  export default YouTubePlayer;