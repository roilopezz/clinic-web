const TextArea = ({
  handleChange,
  value,
  label,
  id,
  errors,
}: {
  handleChange: any;
  value: any;
  label: any;
  id: any;
  errors: any;
}) => {
  return (
    <div className="mt-5">
      {/* <br /> */}
      <div>
        <label className="text-sm font-medium font-bold" htmlFor={id}>
          {label}
        </label>

        <div className="relative mt-1">
          <textarea
            id={id}
            onChange={handleChange}
            value={value}
            rows={5}
            className="w-full border rounded"
          />
          {errors ? (
            <div className="text-blue text-sm font-bold">{errors}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
