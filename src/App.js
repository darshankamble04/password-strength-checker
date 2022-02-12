import { useState } from 'react';
import { Bookmark } from 'react-bookmark';
import './App.css';
import Loader from './components/loader/Loader';



function App() {

  const [pwLength, setPwLength] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const toggleChange = (e) => {
    const password = e.target.value;

    // console.log(password.length)
    let character = '';
    let flag1 = 1;
    let flag2 = 1;
    let flag3 = 1;

    for (let i = 0; i <= password.length; i++) {
      character = password.charAt(i);

      if (isNaN(character * 1)) {
        if (character == character.toUpperCase()) {
          // console.log('upper case true');
          setIsUppercase(true)
          flag1 = 0;
        }
        if (character == character.toLowerCase()) {
          // console.log('lower case true');
          setIsLowercase(true)
          flag2 = 0;
        }
      }
      if (i >= 8) {
        setPwLength(true)
        flag3 = 0;
      }
      console.log(character)
      if(!isNaN(character)){
        console.log(character + " is a number <br/>");
       }
    }

    // console.log(isNumber(character))
    // console.log(_.isNumber(character))
    // if(Number(character)){
    //   console.log("Num is entereed")
    // }
    if (flag1 === 1) {
      setIsUppercase(false)
    }
    if (flag2 === 1) {
      setIsLowercase(false)
    }
    if (flag3 === 1) {
      setPwLength(false)
    }
  }

  return (
    <div>
      {/* <div className={`${isLoad ? "d-none" : ""}`}>
        <Loader />
      </div> */}
      <Bookmark className="coolClass" href="/cool/path" title="My Cool Website" />
      <form className="form container" action="">
        {/* <div>
        <label style={{ paddingRight: "20px" }} >Password</label>
        <input  autoFocus type="text" />
      </div> */}
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input onChange={toggleChange} autoFocus className="form-control" />
          </div>

        </div>
        <div className="checkPoints my-3 d-grid flex-column">
          <span className="">Password requirements : </span>

          <span className={`point ${isUppercase ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isUppercase ? "done" : "noise_control_off"}</span> At Least one CAPITAL letter</span>
          <span className={`point ${isLowercase ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isLowercase ? "done" : "noise_control_off"}</span> At least one small letter</span>
          <span className={`point ${isNumber ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isNumber ? "done" : "noise_control_off"}</span> At least one number</span>
          <span className={`point ${isSymbol ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{isSymbol ? "done" : "noise_control_off"}</span> Include at least one of the following special characters: {`!#$%&*+/=>?@][^_ '~{|}`}</span>
          <span className={`point ${pwLength ? "detect" : ""} my-1 mx-4 d-flex align-items-center`}> <span className="material-icons mx-1 fw-bolder">{pwLength ? "done" : "noise_control_off"}</span> Be at least 8 charactors</span>

        </div>
      </form>
    </div>
  );
}

export default App;
