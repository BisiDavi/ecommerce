import dynamic from "next/dynamic";
import { useState } from "react";

const SelectCountries = dynamic(
  () => import("@/components/Form/SelectCountries")
);
const SearchLocationInput = dynamic(
  () => import("@/components/Form/SearchLocationInput")
);

type inputContentType = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  id: string;
  inputText: "text" | "email" | "password";
  withIcon?: boolean;
};

type selectInputType = {
  name: string;
  placeholder: string;
  selectText: string;
  type: string;
  options: { value: string; name: string }[];
};

interface Props {
  content: inputContentType;
  formik: any;
  className?: string;
  withIcon?: string;
}

interface SelectProps {
  content: selectInputType;
  formik: any;
}

export function Input({ content, formik, className }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  function passwordVisibilityHandler() {
    setShowPassword(!showPassword);
  }
  const passwordInputType = showPassword ? "text" : "password";
  const inputClassName = className ? className : "mb-3";
  return (
    <div className={inputClassName}>
      {content.label && (
        <label className="form-label" htmlFor={content.name}>
          {content.label}
        </label>
      )}
      {content.inputText !== "password" ? (
        <input
          className="form-control"
          type={content.inputText}
          id={content.id}
          name={content.name}
          onChange={formik.handleChange}
          placeholder={content.placeholder}
          onBlur={formik.handleBlur}
          value={formik.values[content.name]}
        />
      ) : (
        <div className="password-toggle">
          <input
            className="form-control"
            type={passwordInputType}
            name={content.name}
            placeholder={content.placeholder}
            id={content.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[content.name]}
          />
          <label
            className="password-toggle-btn"
            aria-label="show/hide-password"
          >
            <input
              onClick={passwordVisibilityHandler}
              className="password-toggle-check"
              checked={showPassword}
              type="checkbox"
            />
            <span className="password-toggle-indicator"></span>
          </label>
        </div>
      )}
      <p className="text-danger error">
        {formik.errors[content.name] &&
          formik.touched[content.name] &&
          formik.errors[content.name]}
      </p>
      <style jsx>
        {`
          .text-danger.error {
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
}

export function TextArea({ content, formik }: Props) {
  return (
    <div className="textarea flex flex-col">
      <textarea
        className="form-control"
        rows={5}
        onChange={formik.handleChange}
        name={content.name}
        value={formik.values[content.name]}
        placeholder={content.placeholder}
      ></textarea>
      <p className="text-danger error">
        {formik.errors[content.name] &&
          formik.touched[content.name] &&
          formik.errors[content.name]}
      </p>
      <style jsx>
        {`
          .text-danger.error {
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
}

export function Select({ content, formik }: SelectProps) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="checkout-country">
        {content.placeholder}
      </label>
      <select
        onChange={formik.handleChange}
        value={formik.values[content.name]}
        name={content.name}
        className="form-select"
        id="checkout-country"
      >
        <option>Choose {content.selectText}</option>
        {content?.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <p className="text-danger error">
        {formik.errors[content.name] &&
          formik.touched[content.name] &&
          formik.errors[content.name]}
      </p>
      <style jsx>
        {`
          .text-danger.error {
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
}

export function displayFormElement(
  content: any,
  _formik: any,
  className?: string,
  withIcon?: string
) {
  switch (content.type) {
    case "input": {
      return (
        <Input
          content={content}
          formik={_formik}
          className={className}
          withIcon={withIcon}
        />
      );
    }
    case "select": {
      return <Select content={content} formik={_formik} />;
    }
    case "selectCountry": {
      return <SelectCountries content={content} formik={_formik} />;
    }
    case "searchLocationInput": {
      return <SearchLocationInput formik={_formik} />;
    }
    case "textarea": {
      return <TextArea content={content} formik={_formik} />;
    }
  }
}
