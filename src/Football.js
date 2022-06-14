import React from "react";

function Football() {
    const shoot = (a, b) => {
        alert(b.type);
    }

    return (
        <button onClick= {(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
}

function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}

export function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

export default Goal;
