import { Formik } from "formik";
import { useRouter } from "next/router";

import Applayout from "@/layout/Applayout";
import passwordResetForm from "@/json/password-reset.json";
import { displayFormElement } from "@/components/Form/FormElement";
import { forgotPasswordSchema } from "@/components/Form/schema/AuthSchema";
import { useAccount, useToast } from "@/hooks";

export default function AccountPasswordRecovery() {
  const router = useRouter();
  const { recoverPassword } = useAccount();
  const { isLoading, isSuccessful, hasError } = useToast();
  const searchParams = router.query;
  const key: string | any = searchParams.key;

  return (
    <Applayout title="Reset your password">
      <div className="container py-4 py-lg-5 my-4">
        <div className="row justify-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="h3 mb-4">Forgot your password?</h2>
            <p className="fs-md">
              Reaset your password, ensure to fill details appropriately
            </p>
            <div className="card py-2 mt-4">
              <Formik
                initialValues={{
                  newPassword: "",
                  confirmNewPassword: "",
                }}
                validationSchema={forgotPasswordSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const loading = isLoading();
                  recoverPassword(values.newPassword, key)
                    .then((response) => {
                      if (response?.success) {
                        isSuccessful(loading, "Password reset successful");
                        router.push("/my-account");
                      } else {
                        hasError(loading, "error resetting password");
                      }
                    })
                    .catch((err) => {
                      hasError(loading, "error resetting password");
                    });
                  resetForm();
                  setSubmitting(false);
                }}
              >
                {(formik) => (
                  <form
                    onSubmit={formik.handleSubmit}
                    className="card-body needs-validation"
                    noValidate
                  >
                    <div className="row">
                      {passwordResetForm.reset.map((formInput) => (
                        <div className="col-12" key={formInput.name}>
                          {displayFormElement(formInput, formik)}
                        </div>
                      ))}
                    </div>
                    <button
                      aria-label="password reset"
                      className="btn btn-primary"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Applayout>
  );
}
