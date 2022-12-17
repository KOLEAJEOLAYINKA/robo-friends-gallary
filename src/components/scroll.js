import React from "react";

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll',
            height: "45rem",
            weight: "100%",
            border: "2px solid black"
        }}>
            {props.children}
        </div>
    );

        

}
export default Scroll;