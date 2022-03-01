import { Formik } from "formik";

import { useAuth } from "@/hooks";
import { signupFormSchema } from "@/components/Form/schema/AuthSchema";
import formContent from "@/json/AccountAuthform.json";
import { mapContent } from "@/components/Form/ContactForMoreForm";

export default function AccountSignupForm() {
  const { signUp } = useAuth();

  return (
    <div className="col-md-6 pt-4 mt-3 mt-md-0">
      <h2 className="h4 mb-3">No account? Sign up</h2>
      <p className="fs-sm text-muted mb-4">
        Registration takes less than a minute but gives you full control over
        your orders.
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupFormSchema}
        onSubmit={(values, formik) => signUp(values, formik, true)}
      >
        {(formik) => (
          <form
            className="needs-validation"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            {formContent.signup.map((content: any, index) => (
              <div className="row" key={index}>
                {content.length === 2
                  ? mapContent(content, "col-sm-6", formik)
                  : content.length === 1 &&
                    mapContent(content, "col-sm-12", formik)}
              </div>
            ))}
            <div className="col-12 text-end">
              <button
                aria-label="submit signup form"
                className="btn btn-primary"
                type="submit"
              >
                <i className="ci-user me-2 ms-n1"></i>
                Sign Up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
