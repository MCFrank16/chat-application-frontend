const makeInitials = (name) => {
    const str = name.split(" ");
    const firstCharacter = str[0].charAt(0);
    const secondCharacter = str[1].charAt(0);
    return firstCharacter + secondCharacter;
}

export default makeInitials;
