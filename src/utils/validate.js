export const checkValidation = (email , password,name) => {

    const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     const isFullName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

     if(!isFullName) return "Enter Valid Name";
    if(!isEmailValid) return "Email Not Valid";
    if(!isPasswordValid) return "Password Must Contain [A-Z] , [a-z] , [0-9] , [@,/,#,$]";

    return null;

}
