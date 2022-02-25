import { useQueryClient } from "react-query";

import useAccount from "@/hooks/useAccount";
import useToast from "./useToast";
import { toggleAuthModal } from "@/redux/ui-slice";
import { useAppDispatch } from "@/hooks/useRedux";
import { authorizeError, authorizeUser, logout } from "@/redux/auth-slice";
import { addNewUserToList } from "./useVbout";
import useSwellCart from "./useSwellCart";

export default function useAuth() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();
  const { updateCart } = useSwellCart();
  const { loginUser, logoutUser, signedUserDetails, createUserAccount } =
    useAccount();

  async function signIn(values: any, formik: any, notModal?: boolean) {
    const toastId = isLoading();
    loginUser(values)
      .then((response) => {
        if (response) {
          isSuccessful(toastId, `Welcome back, ${values.email}`);
          formik.resetForm();
          console.log("login response", response);
          formik.setSubmitting(false);          
          dispatch(authorizeUser(response));
          queryClient.invalidateQueries("userdetails");
          queryClient.invalidateQueries("cart");
          !notModal && dispatch(toggleAuthModal());
        } else {
          hasError(toastId, "login not successful");
          formik.setSubmitting(false);
        }
      })
      .catch((error) => {
        hasError(toastId, error?.message);
        dispatch(authorizeError());
        formik.setSubmitting(false);
      });
  }

  async function signUp(values: any, formik: any, notModal?: boolean) {
    const toastId = isLoading();
    addNewUserToList(values.email);
    createUserAccount(values)
      .then((response) => {
        if (response?.email.code === "UNIQUE") {
          hasError(toastId, `${values.email} already exists `);
        } else {
          isSuccessful(toastId, `${values.email}, sign up successful`);
          dispatch(authorizeUser(response));
          console.log("response createUserAccount", response);
          formik.resetForm();
          queryClient.invalidateQueries("userdetails");
          !notModal && dispatch(toggleAuthModal());
        }
        formik.setSubmitting(false);
      })
      .catch((error) => {
        hasError(toastId, error?.message);
        dispatch(authorizeError());
        formik.setSubmitting(false);
      });
  }

  async function userLogout() {
    const toastId = isLoading();
    logoutUser()
      .then((response) => {
        if (response?.success) {
          dispatch(logout());
          isSuccessful(toastId, "logout successful");
          queryClient.invalidateQueries("userdetails");
          queryClient.invalidateQueries("cart");
        } else {
          hasError(toastId, "unable to logout user");
        }
      })
      .catch((err) => {
        hasError(toastId, err?.message);
      });
  }

  async function getUserDetails() {
    return await signedUserDetails();
  }

  return {
    signIn,
    signUp,
    userLogout,
    getUserDetails,
  };
}
