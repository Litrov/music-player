import React from "react";
import colors from "../../utils/Colors";
import gradients from "../../utils/Gradients";
import shadow from "../../utils/Shadows";


const PlayerSeekBar = ({ songState, audioRef, setSongState }) => {
    const currentPalette = songState.currentSong[0].color;

    const playerSeekHandler = (e) => {
        //Changing the value of the duration and elapsed
        const value = e.target.value;
        audioRef.current.currentTime = value;
        setSongState({
            ...songState,
            elapsed: value,
        });
    };

    return (
        <div className="player__seek-bar--wrapper">
            <div
                className="player__seek-bar--gradient"
                style={{
                    boxShadow: `${shadow(
                        0,
                        0,
                        30,
                        0,
                        colors[`${currentPalette}`]
                    )}`,
                    background: `${gradients[`${currentPalette}`]}`,
                    width: `${(songState.elapsed / songState.duration) * 100}%`,
                }}
            ></div>
            <input
                min={0}
                max={songState.duration || 0}
                value={songState.elapsed || 0}
                onChange={playerSeekHandler}
                type="range"
                className="player__seek-bar"
                defaultValue={0}
            />
        </div>
    );
}

export default PlayerSeekBar;