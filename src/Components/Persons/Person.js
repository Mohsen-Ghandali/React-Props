const Person = (props) => {
    const {firstName,lastName,age}=props
    return ( 
        <>
        <h3>firstName:{firstName}</h3>
        <h3>lastName:{lastName}</h3>
        <h3>age:{age}</h3>
        </>
     );
};
 
export default Person;