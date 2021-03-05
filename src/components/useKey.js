import { useState } from 'react'

const SendKey = () => {
    const [key, setKey] = useState('');

    const saveKey = (key) => setKey(key);

    return {
        key,
        saveKey
    }
}

export default SendKey;
