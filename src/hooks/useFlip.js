import React, {useState} from "react";


const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);

    const setFlip = () => {
        setState(state => !state);
    }

    return [state, setFlip];

};

export default useFlip;