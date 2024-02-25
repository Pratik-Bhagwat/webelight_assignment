function Select({ options, value, setValue }) {
  return (
    <div className="flex items-center justify-end w-full">
      <select
        className="h-10 border-2"
        name="Value"
        id="value"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        <option value="" hidden>
          Please select a option
        </option>
        {Object.keys(options).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
