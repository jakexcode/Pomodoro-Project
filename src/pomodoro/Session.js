import React from "react";
import {minutesToDuration, secondsToDuration} from "../utils/duration"

function Session({ session, displayDuration, updatedFont, isTimerRunning }) {
  return (session && (
    <div>
      <div className="row mb-2">
        <div className="col">

          <h2 data-testid="session-title">
            {session?.label} for{" "}
            {minutesToDuration(displayDuration(session?.label))} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
          <h2>
              {!isTimerRunning && <h2>Paused</h2>}
          </h2>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={updatedFont}
              style={{ width: `${updatedFont}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Session;