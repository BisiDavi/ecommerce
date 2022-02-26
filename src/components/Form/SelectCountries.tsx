import { FormikProps } from "formik";

import countries from "@/json/countries.json";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateCountry } from "@/redux/payment-slice";
import { formType } from "@/types";

type countriesType = {
  name: string;
  Iso2: string | any;
  Iso3: string | null;
};

interface SelectCountriesProps {
  content: {
    name: string;
    label: string;
  };
  formik: FormikProps<formType>;
}

export default function SelectCountries({
  content,
  formik,
}: SelectCountriesProps) {
  const dispatch = useAppDispatch();
  const validCountry: countriesType[] = countries.data?.filter(
    (country) => country.Iso2
  );
  function selectHandler(e: any) {
    const country = e.target.value.toLowerCase();
    const selectedCountryArray = countries.data?.filter(
      (country) => country.Iso2 === e.target.value
    );
    const payload = {
      country,
    };
    formik.setValues({
      ...formik.values,
      ...payload,
    });
    dispatch(updateCountry(payload));
  }

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="checkout-country">
        {content.label}
      </label>
      <select
        className="form-select"
        id="checkout-country"
        name="country"
        onChange={selectHandler}
      >
        <option>Select country </option>
        {validCountry.map(({ name, Iso2 }, index) => (
          <option value={Iso2} key={index}>
            {name}
          </option>
        ))}
      </select>
      <p className="brandContainer text-danger">
        {formik.errors["country"] &&
          formik.touched["country"] &&
          formik.errors["country"]}
      </p>
      <style jsx>
        {`
          .brandContainer {
            width: 150px;
          }
        `}
      </style>
    </div>
  );
}
