function Select({ timeFrames, time, setTime }) {
  return (
    <div className="flex items-center justify-end w-full">
      <select
        className="h-10 border-2"
        name="Time"
        id="time"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      >
        <option value="" hidden>
          Please select a option
        </option>
        {Object.keys(timeFrames).map((timeFrame) => (
          <option key={timeFrame} value={timeFrame}>
            {timeFrame}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
