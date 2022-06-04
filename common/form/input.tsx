const Input = ({
  handleChange,
  value,
  label,
  id,
  type,
  errors,
}: {
  handleChange: any;
  value: any;
  label: any;
  id: any;
  type: any;
  errors: any;
}) => {
  return (
    <>
      <div className="mt-5">
        {/* <div className="mobile:flex mobile:flex-col"> */}
        <label className="text-sm font-medium font-bold" htmlFor={id}>
          {label}
        </label>
        <div className="relative mt-1">
          <input
            id={id}
            type={type}
            onChange={handleChange}
            value={value}
            // className="w-full p-2 text-sm border-gray-200 border rounded shadow-sm"
            className="w-full border rounded p-2"
          />
          {errors ? (
            <div className="errors text-sm font-bold">{errors}</div>
          ) : null}
        </div>
        {/* </div> */}
        {/* <br /> */}
      </div>
      <style jsx global>
        {`
          .errors {
            color: rgba(255, 0, 0, 0.821);
          }
        `}
      </style>
    </>
  );
};

export default Input;
