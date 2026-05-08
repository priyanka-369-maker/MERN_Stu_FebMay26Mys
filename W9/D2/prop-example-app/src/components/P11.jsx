// import React from "react";
import PropTypes from "prop-types";

// Component
function Profile({ name, age }) {
    return (
        <div className="card">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

// Prop validation
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

// Parent component
export function PropTypesDemo() {
    return (
        <>
            <Profile name="Priya" age={21} />
        </>
    );
}
