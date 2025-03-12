import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ name, age, hobby }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md w-64 bg-white">
            <h2 className="text-xl font-bold">{name}</h2>
            {age !== undefined && <p className="text-gray-700">Вік: {age}</p>}
            {hobby && <p className="text-gray-700">Хобі: {hobby}</p>}
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    hobby: PropTypes.string,
};

const App = () => {
    return (
        <div className="flex flex-col gap-4 p-6">
            <UserProfile name="Олександр" age={25} hobby="Гітара" />
            <UserProfile name="Марія" age={27} hobby="Читання" />
            <UserProfile name="Іван" age={30} />
        </div>
    );
};

export default App;
