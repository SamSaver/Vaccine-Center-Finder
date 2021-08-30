import Age from "./Age";
import Vaccine from "./Vaccine";
import Dose from "./Dose";
import Date from "./DateComp";
function FormDiscrict(props) {
  return (
    <div>
      <div className="mx-auto py-20 max-w-6xl px-12 lg:px-24 mb-24">
        <form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className=" tracking-wide text-black text-xs font-bold mb-2">
                  Discrict <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full bg-blue-50 text-black border border-blue-50 rounded py-3 px-4 mb-3"
                  id="pincode"
                  type="text"
                  required
                />
              </div>
            </div>

            <Date />

            <div className="-mx-3 md:flex mb-2">
              <Vaccine />
              <Dose />
              <Age />
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
  );
}

export default FormDiscrict;
