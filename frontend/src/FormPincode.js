import { useState } from "react";
import Age from "./Age";
import Vaccine from "./Vaccine";
import Dose from "./Dose";
import DateComp from "./DateComp";
import axios from "axios";
import Card from "./Card";
function FormPincode() {
  const [pincodeObj, setpincodeObj] = useState({
    pincode: 0,
    date: new Date(),
    vaccine: "Either",
    dose: "Both",
    ageGroup: "Any Age Group",
  });

  const [queryBool, setqueryBool] = useState(false);

  const [result, setResult] = useState([]);

  const onDateChangeHandler = (e) => {
    setpincodeObj((prevState) => ({ ...prevState, date: e.target.value }));
  };

  const onVaccineChangeHandler = (e) => {
    setpincodeObj((prevState) => ({ ...prevState, vaccine: e.target.value }));
  };

  const onDoseChangeHandler = (e) => {
    setpincodeObj((prevState) => ({ ...prevState, dose: e.target.value }));
  };

  const onAgeChangeHandler = (e) => {
    setpincodeObj((prevState) => ({ ...prevState, ageGroup: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/pincode", pincodeObj)
      .then((response) => {
        setResult(response.data.response);
        window.scrollTo(0, 600);
        setqueryBool(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-blue-50 w-screen">
      <div className="mx-auto max-w-2xl py-20 px-12 lg:px-24">
        <div className=' bg-gray-50 rounded-lg p-8 shadow-lg'>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="bg-white shadow-md transition-all duration-200 rounded-2xl px-8 pt-6 pb-8 mb-4 hover:shadow-xl">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className=" tracking-wide text-black text-xs font-bold mb-2">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full bg-blue-50 text-black border border-blue-50 rounded py-3 px-4 mb-3"
                    id="pincode"
                    type="number"
                    min={100000}
                    max={999999}
                    value={pincodeObj.pincode}
                    onChange={(e) =>
                      setpincodeObj((prevState) => ({
                        ...prevState,
                        pincode: e.target.value,
                      }))
                    }
                    placeholder="000000"
                    required
                  />
                </div>
              </div>

              <DateComp onDateChange={onDateChangeHandler} />

              <div className="-mx-3 md:flex mb-2">
                <Vaccine onVaccineChange={onVaccineChangeHandler} />
                <Dose onDoseChange={onDoseChangeHandler} />
                <Age onAgeChange={onAgeChangeHandler} />
              </div>
              <div className="-mx-3 md:flex mt-2">
                <div className=" content-center items-center md:w-full px-3">
                  <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-between">
        {queryBool === true && (
          <h3 className="text-blue-500 font-bold text-2xl mb-4">
            {result.length} VACCINE CENTERS FOUND!
          </h3>
        )}
        {result.length > 0 &&
          result.map((session) => (
            <Card key={session["name"]} session={session} />
          ))}
      </div>
    </div>
  );
}

export default FormPincode;
