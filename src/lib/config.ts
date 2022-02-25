import swell from "swell-js";

const options = {
  useCamelCase: true,
};

export default function swellClientInit() {
  function initializeSwell() {
    swell.init(
      "sailfish-e-commerce-limited",
      "pk_392OXy2LAsQCLz7F9EQHEQ5tnVhAak6x",
      options
    );
  }

  return {
    swell,
    initializeSwell,
  };
}
