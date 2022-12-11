import './App.css';
import MainContainer from "./component/main/Main-container";
import chillHop from "./data/data";
import {useRef, useState} from "react";
import SongInfo from "./component/main/SongInfo";
import Player from "./component/PlayerUI/Player";

function App() {
    const [uiState, setUiState] = useState({
        aboutShown: false,
        libraryShown: false,
        libraryPinned: false,
        coverSpinning: false,
        songPlaying: false,
        seekWidth: 0,
    });

    const [songState, setSongState] = useState({
        currentSong: [chillHop[0]],
        isPlaying: false,
        elapsed: 0,
        duration: 0,
    });

    const audioRef = useRef(null);


    const songEndHandler = async () => {
        let currentIndex = chillHop.findIndex(
            (song) => song === songState.currentSong[0]
        );
        await setSongState({
            ...songState,
            currentSong: [chillHop[(currentIndex + 1) % chillHop.length]],
        });
        audioRef.current.play();
    };

    const songInfoHandler = (e) => {
        const elapsed = e.target.currentTime;
        const duration = e.target.duration;
        setSongState({
            ...songState,
            duration: duration,
            elapsed: elapsed,
        });
    };

    return (
        <div>
            <SongInfo songState={songState} />
            <MainContainer/>
            <Player
                uiState={uiState}
                setUiState={setUiState}
                audioRef={audioRef}
                songState={songState}
                setSongState={setSongState}
            />
        </div>
    );
}

export default App;
