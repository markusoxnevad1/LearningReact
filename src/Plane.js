import React from "react";

function Plane(props) {
    return <h2>I am a { props.brand.model }!</h2>
}

function Hangar() {
    const planeInfo = {name:"Jet", model:"F-16"}
    return (
        <>
            <h1>Who lives in my hangar?</h1>
            <Plane brand={planeInfo}/>
        </>
    )
}
export default Hangar;