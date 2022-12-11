import React from "react";
import MainContainer from "../main/Main-container";
import SeekControl from "../main/SeekControl";


const Player = ({uiState, setUiState, songState, setSongState, audioRef, seekWidth,}) => {

    return (
        <div className="player">
            <SeekControl
                uiState={uiState}
                setUiState={setUiState}
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
                seekWidth={seekWidth}
            />
            <MainContainer
                uiState={uiState}
                songState={songState}
                setUiState={setUiState}
                setSongState={setSongState}
                audioRef={audioRef}
            />
        </div>
    );
}

export default Player;