import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [isValid,setIsValid] = useState(true)
  const [isRateValid,setRateIsValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)
  const [year, setYear] = useState(0)
  
  const ValidPrinciple = (e)=>{
    // console.log(e)
    const {value,name} = e.target
    if(!!value.match(/^[0-9]+$/)){
      if (name === "principle") {
        setPrinciple(value)
        setIsValid(true)
      }else if(name === "rate"){
        setRate(value)
        setRateIsValid(true)
      }else if(name === "year"){
        setYear(value)
        setIsYearValid(true)
      }
    }else{
      if(name === "principle"){
        setPrinciple(value)
        setIsValid(false)
      }else if(name === "rate"){
        setRate(value)
        setRateIsValid(false)
      }else if(name === "year"){
        setYear(value)
        setIsYearValid(false)
      }
    }
  }
  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the form completly")
    } else {
      setInterest(principle * rate * year / 100)
    }
  }
  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setRateIsValid(true)
    setIsYearValid(true)
    setIsValid(true)
  }
  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center bg-dark">
      <div style={{ width: "450px" }} className="bg-light rounded p-4 ">
        <div className="Heading">
          <h3>Simple interest calculator</h3>
          <p>calculate your simple interest Easily.</p>
        </div>
        <div style={{ height: "150px" }} className="interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-warning shadow text-light">
          <h1>₹ {interest} </h1>
          <p className="fw-bold">Total simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate}>
          <div className="mb-3"> <TextField className="w-100" id="outlined-basic" label="Principle Amount" variant="outlined" name="principle" value={principle || ""} onChange={(e) => ValidPrinciple(e)} /></div>
          {
            !isValid &&
            <div className="mb-1 text-danger">
              * Invalid Input
            </div>
          }
          <div className="mb-3"> <TextField className="w-100" id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" name = "rate" value={rate || ""} onChange={(e) => ValidPrinciple(e)} /></div>
          {
            !isRateValid &&
            <div className="mb-1 text-danger">
              * Invalid Input
            </div>
          }
          <div className="mb-3"> <TextField className="w-100" id="outlined-basic" label="Time peroid (Yr)" variant="outlined" name="year" value={year || ""} onChange={(e) => ValidPrinciple(e)} /></div>
          {
            !isYearValid &&
            <div className="mb-1 text-danger">
              * Invalid Input
            </div>
          }
          <Stack direction="row" spacing={20}>
            <Button type='submit' className="bg-warning" disabled ={isValid&&isRateValid&&isYearValid?false:true} variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
