function Card({ session }) {

  const SlotComp = (slot) => <span className="mx-1 text-sm">{slot}</span>;

  return (
    <div className="w-3/6 p-4">
      <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="p-4">
          <span className="inline-block text-gray-400 px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Vaccine Center
          </span>
          <h2 className="mt-2 mb-2  font-bold text-xl">{session["name"]}</h2>
          <p className="text-sm">{session["address"]}</p>
          <div className="mt-3 flex items-center">
            <span className=" font-bold">{session["vaccine"]}</span>&nbsp;
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            Age Limit {session["min_age_limit"]}
          </span>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center">
            Slots: {session['slots']}
          </span>
          <span className="flex items-center">
            Timings: {session["from"]} - {session["to"]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
