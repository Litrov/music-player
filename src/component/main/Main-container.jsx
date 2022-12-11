import chillHop from "../../data/data";
import {RiPlayListLine, RiSkipBackLine, RiSkipForwardLine,} from "react-icons/ri";
import PlayerPlayButton from "../../elements/main/PlayerPlayButton";

const MainContainer = ({uiState, setUiState, songState, setSongState, audioRef,}) => {

    let currentIndex = chillHop.findIndex(
        (song) => song === songState.currentSong[0]
    );

    const previousSongHandler = () => {
        setTimeout(() => {
            if ((currentIndex - 1) % chillHop.length === -1) {
                setSongState({
                    ...songState,
                    currentSong: [chillHop[chillHop.length - 1]],
                });
            } else {
                setSongState({
                    ...songState,
                    currentSong: [
                        chillHop[(currentIndex - 1) % chillHop.length],
                    ],
                });
            }
            if (songState.isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.then((audio) => {
                        audioRef.current.play();
                    });
                }
            }
        }, 300);
    };

    const nextSongHandler = () => {
        setTimeout(() => {
            setSongState({
                ...songState,
                currentSong: [chillHop[(currentIndex + 1) % chillHop.length]],
            });
            if (songState.isPlaying) {
                audioRef.current.play();
            }
        }, 150);
    };

    const songEndHandler = async () => {
        await setSongState({
            ...songState,
            currentSong: [chillHop[(currentIndex + 1) % chillHop.length]],
        });
        if (songState.currentSong[0].isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => audioRef.current.play());
            }
        }
    };

    return <div className="player__control">
        <RiPlayListLine
            uiState={uiState}
            setUiState={setUiState}
            className="player__control-icon disabled-on-desktop"
            //onClick={libraryToggleHandler}
        />
        <RiSkipBackLine
            className="player__control-icon"
            onClick={previousSongHandler}
        />
        <PlayerPlayButton
            uiState={uiState}
            setUiState={setUiState}
            setSongState={setSongState}
            songState={songState}
            audioRef={audioRef}
        />
        <RiSkipForwardLine
            className="player__control-icon"
            onClick={nextSongHandler}
        />
    </div>
}

export default MainContainer;