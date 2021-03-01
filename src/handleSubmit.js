import useToken from './components/useToken';

const HandleSubmit = async (e, func) => {
    const { setToken } = useToken();
    e.preventDefault();
    const { token } = await func();
    setToken(token);
    
    return window.location = "/chat"
}

export default HandleSubmit;