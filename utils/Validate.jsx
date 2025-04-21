export const checkValidData = (nameVal, email, password) => {
    const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(nameVal)
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(password);

    if(!isNameValid) return "username is not valid"
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "password is not valid";

    return null;

}