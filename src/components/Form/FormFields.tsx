import checkoutFormInputs from "@/json/address-input-group.json";

interface Props {
  formik: any;
}

interface InputProps {
  formContent: {
    className: string;
    placeholder: string;
    type: string;
  };
}

interface TextAreaProps {
  formContent: {
    rows?: number;
    className: string;
    placeholder: string;
    type: string;
  };
}

export function TextArea({ formContent }: TextAreaProps) {
  return (
    <div className={formContent.className}>
      <textarea
        className="form-control"
        rows={formContent.rows}
        placeholder={formContent.placeholder}
        required
      ></textarea>
    </div>
  );
}

export function Input({ formContent }: InputProps) {
  return (
    <div className={formContent.className}>
      <input
        className="form-control"
        type={formContent.type}
        placeholder={formContent.placeholder}
        required
      />
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */

export function AddressInputGroup({ formik }: Props): JSX.Element {
  function updateInput(e: any) {
    e.preventDefault();
    formik.setValues({
      ...formik.values,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      {checkoutFormInputs.map((formRow, index) => (
        <div key={index} className="row">
          {formRow.map((formInput, index) => (
            <div key={index} className="col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor={formInput.name}>
                  {formInput.label}
                </label>
                <input
                  value={formik.values[formInput.name]}
                  className="form-control"
                  onChange={updateInput}
                  name={formInput.name}
                />
                <p className="text-danger text">
                  {formik.errors[formInput.name] &&
                    formik.errors[formInput.name]}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
      <style jsx>
        {`
          .text {
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
}
