import React from "react";
import PlayerDuration from "../../elements/main/PlayerDuration";
import PlayerSeekBar from "../../elements/main/PlayerSeekBar";


const SeekControl = ({ songState, setSongState, audioRef, seekWidth }) => {
    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    return (
        <div className="player__seek-controls">
            <PlayerDuration value={`${getTime(songState.elapsed)}`} />
            <PlayerSeekBar
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
                seekWidth={seekWidth}
            />
            <PlayerDuration
                value={`${
                    getTime(songState.duration) === "NaN:aN"
                        ? "0:00"
                        : getTime(songState.duration)
                }`}
            />
        </div>
    );
}

export default SeekControl;