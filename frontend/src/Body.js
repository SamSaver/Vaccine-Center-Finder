import Welcome from "./Welcome";
import FormPincode from "./FormPincode";
import FormDiscrict from "./FormDistrict";

function Body({ form_state, formSetter }) {
  const buttonClickHandler = (id) => {
    formSetter(id);
  };

  const ButtonCard = ({ name, id }) => (
    <button
      onClick={() => buttonClickHandler(id)}
      className="flex items-center duration-300 rounded-md ease-out transform transition-all hover:scale-105 hover:shadow-md cursor-pointer mt-5 justify-center p-6 text-red-200 bg-red-400"
    >
      <h3 className="text-2xl font-medium">{name}</h3>
    </button>
  );

  return (
    <div className="flex items-center flex-col w-full h-screen mt-11">
      {/* Options Start*/}
      <div className='flex flex-col relative items-center mt-2 p-8 bg-red-200 rounded-lg shadow-md hover:shadow-xl'>
        <h2 className="bg-red-300 p-4 rounded-lg text-white font-semibold text-3xl">
          SELECT QUERY TYPE
        </h2>
        <div className="flex space-x-10 items-center">
          <ButtonCard name="BY PINCODE" id={1} />
          <ButtonCard name="BY DISTRICT" id={2} />
        </div>
      </div>
      {/* Options End */}
      {form_state === 0 && <Welcome />}
      {form_state === 1 && <FormPincode />}
      {form_state === 2 && <FormDiscrict />}
    </div>
  );
}

export default Body;
