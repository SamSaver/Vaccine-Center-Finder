function DateComp({onDateChange}) {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  return (
    <div className="mt-8 mb-8">
      <label className="block text-black text-xs font-bold">Start Date</label>
      <div className="mt-1 focus:ring-blue-500 focus:border-blue-500 block sm:text-md border-blue-50 rounded-md items-center">
        <input
          type="date"
          name="date"
          id="date"
          min={today}
          required
          onChange={(e) => onDateChange(e)}
          className=" focus:ring-blue-500 focus:border-blue-500 block sm:text-md border-blue-50 rounded-md items-center"
        />
      </div>
    </div>
  );
}

export default DateComp;
