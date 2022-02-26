import { Formik } from "formik";

import { signupFormSchema } from "@/components/Form/schema/AuthSchema";
import authContent from "@/json/authForm.json";
import { displayFormElement } from "@/components/Form/FormElement";
import { useAuth } from "@/hooks";

export default function SignupForm() {
  const { signUp } = useAuth();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signupFormSchema}
      onSubmit={(values, formik) => signUp(values, formik)}
    >
      {(formik) => (
        <form
          className="needs-validation tab-pane fade"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          noValidate
          id="signup-tab"
        >
          {authContent.signUp.map((content: any, index) => {
            return content?.length ? (
              <div key={index} className="row">
                {content.map((inputContent: any, index: number) => (
                  <div key={index} className="col-lg-6 col-sm-12">
                    {displayFormElement(inputContent, formik)}
                  </div>
                ))}
              </div>
            ) : (
              <div key={index} className="row">
                {displayFormElement(content, formik)}
              </div>
            );
          })}
          <button
            aria-label="Sign up"
            className="btn btn-primary btn-shadow d-block w-100"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Sign up
          </button>
        </form>
      )}
    </Formik>
  );
}
