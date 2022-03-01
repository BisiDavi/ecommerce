import { Formik } from "formik";
import Link from "next/link";

import { FooterBottomSocials } from "@/components/Footer/FooterBottomElement";
import { useAuth } from "@/hooks";
import { signinFormSchema } from "@/components/Form/schema/AuthSchema";
import formContent from "@/json/AccountAuthform.json";
import { displayFormElement } from "./FormElement";

export default function AccountSigninForm() {
  const { signIn } = useAuth();
  return (
    <div className="col-md-6">
      <div className="card border-0 shadow">
        <div className="card-body">
          <h2 className="h4 mb-1">Sign in</h2>
          <div className="py-3">
            <h3 className="d-inline-block align-middle fs-base fw-medium mb-2 me-2">
              With social account:
            </h3>
            <FooterBottomSocials />
          </div>
          <hr />
          <h3 className="fs-base pt-4 pb-2">Or using form below</h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signinFormSchema}
            onSubmit={(values, formik) => signIn(values, formik, true)}
          >
            {(formik) => (
              <form
                className="needs-validation"
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                noValidate
              >
                {formContent.signin.map((content, index) => (
                  <div key={index} className="row">
                    {displayFormElement(content, formik)}
                  </div>
                ))}
                <div className="flex flex-wrap justify-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked
                      id="remember_me"
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                      Remember me
                    </label>
                  </div>
                  <Link href="/account-password-recovery" passHref>
                    <a className="nav-link-inline fs-sm">Forgot password?</a>
                  </Link>
                </div>
                <hr className="mt-4" />
                <div className="text-end pt-4">
                  <button
                    aria-label="submit-form"
                    className="btn btn-primary"
                    type="submit"
                  >
                    <i className="ci-sign-in me-2 ms-n21"></i>
                    Sign In
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
