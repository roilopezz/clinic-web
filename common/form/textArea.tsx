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
    <>
      <div className="mt-5">
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
              <div className="errors text-sm font-bold">{errors}</div>
            ) : null}
          </div>
        </div>
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

export default TextArea;
