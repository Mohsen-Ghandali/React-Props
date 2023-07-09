import Person from "../Persons/Person";

const App = () => {
    const firstName = "Mohsen"
    const lastName = "Ghandali"
    const age = 35
    const clickHandler=(e)=>{
        console.log(`firstName:${firstName}---lastName:${lastName}`);
        console.log(e);
    }
    return ( 
      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
      <Person firstName={firstName} lastName={lastName} age={age} />
      </div>  
    );
};
 
export default App;
