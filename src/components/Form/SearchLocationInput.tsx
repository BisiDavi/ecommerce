/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { updateUserAddress } from "@/redux/payment-slice";
import { useAppDispatch } from "@/redux/store";

let autoComplete;

const loadScript = (url, callback) => {
  let script:any = document.createElement("script"); // create script tag
  script.type = "text/javascript";

  // when script state is ready and loaded or complete we will call callback
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url; // load by url
  document.getElementsByTagName("head")[0].appendChild(script); // append to head
};

// handle when the script is loaded we will assign autoCompleteRef with google maps place autocomplete
function handleScriptLoad(
  updateQuery,
  autoCompleteRef,
  selectedCountry,
  dispatch
) {
  // assign autoComplete with Google maps place one time
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["establishment"] }
  );
  autoComplete.setComponentRestrictions({ country: selectedCountry }),
    autoComplete.setFields(["address_components"]);

  // add a listener to handle when the place is selected
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, dispatch)
  );
}

async function handlePlaceSelect(updateQuery, dispatch) {
  const addressObject = autoComplete.getPlace(); // get place from google api
  const query = addressObject?.address_components;
  dispatch(updateUserAddress(query));

  function filterLocation(location) {
    const place = query?.filter((adr) => adr.types[0] === location);

    let rightPlace = place[0]?.long_name
      ? place[0]?.long_name
      : place[0]?.short_name;
    return rightPlace;
  }

  const address = {
    address1: `${filterLocation("street_number")}  ${filterLocation(
      "route"
    )}  ${filterLocation("neighborhood")} ${filterLocation(
      "locality"
    )}`?.replaceAll("undefined", ""),
    city: filterLocation("locality")?.replace("undefined", ""),
    state: filterLocation("administrative_area_level_1")?.replace(
      "undefined",
      ""
    ),
    zip: filterLocation("postal_code")?.replace("undefined", ""),
  };
  updateQuery.setValues(
    {
      ...updateQuery.values,
      ...address,
    },
    false
  );
}

export default function SearchLocationInput({ formik }) {
  const autoCompleteRef = useRef(null);
  const countryCode = formik.values.country;
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}&libraries=places`,
      () => handleScriptLoad(formik, autoCompleteRef, countryCode, dispatch)
    );
  }, [countryCode]);

  function updateInput(e) {
    e.preventDefault();
    formik.setValues({
      ...formik.values,
      address1: e.target.value,
    });
  }

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="address1">
        Address 1 *
      </label>
      <input
        ref={autoCompleteRef}
        onChange={updateInput}
        placeholder="Address - Line 1"
        value={formik.values.address1}
        name="address1"
        className="form-control"
        autoComplete="true"
      />
      <p className="text-danger errorText">
        {formik.errors["address1"] &&
          formik.touched["address1"] &&
          formik.errors["address1"]}
      </p>
      <style jsx>
        {`
          .errorText {
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
}
