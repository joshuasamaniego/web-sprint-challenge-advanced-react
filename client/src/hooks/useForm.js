// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState((initialValue) => {
        //function needs to check if we have a value in local storage already
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    //custom setter function that updates state and sets the new value to localStorage
    const setValueToLocal = (key, newValue) => {
        window.localStorage.setItem(JSON.stringify(key, newValue));
        setStoredValue(newValue);
    }
    return [storedValue, setValueToLocal];
}

export default useForm;