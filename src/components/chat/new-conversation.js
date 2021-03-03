import { useState } from 'react';
import { Link } from 'react-router-dom';

const Newconversation = ({ setChange, change }) => {
    const [button, setButton] = useState('+');
    
    const changeEffect = (e) => {
        e.preventDefault();
        const btn = document.getElementById('new').innerHTML;
        btn === '+' ? setButton('x') : setButton('+');
        setChange(!change)
    }

    return (
        <div className="new-message-container">
            <Link to="" className="new" id="new" onClick={changeEffect}>{button}</Link>
        </div>
    )
}

export default Newconversation;
