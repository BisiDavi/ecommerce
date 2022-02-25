import { useQueryClient } from "react-query";
import swellClientInit from "@/lib/config";

type checkoutData = {
  firstName: string;
  lastName: string;
  email?: string;
};

type userLoginType = {
  email: string;
  password: string;
};

type userDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type createUserAccountAtCheckoutData = checkoutData & {
  address1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  address2: string;
};

export default function useAccount() {
  const { swell, initializeSwell } = swellClientInit();
  initializeSwell();

  const queryClient = useQueryClient();

  async function createUserAccount(userDetails: userDetailsType) {
    const { firstName, lastName, email, password } = userDetails;
    return await swell.account.create({
      firstName,
      lastName,
      email,
      password,
    });
  }

  async function signedUserDetails() {
    return await swell.account.get();
  }

  async function loginUser(userLogin: userLoginType) {
    const { email, password } = userLogin;
    return await swell.account.login(email, password);
  }

  async function logoutUser() {
    return await swell.account.logout();
  }

  async function forgotPassword(email: string) {
    return await swell.account.recover({
      email,
      reset_url: `https://livehealthy.hk/password-reset?key={reset_key}`,
    });
  }

  async function getUserAccount() {
    return await swell.account.get();
  }

  async function recoverPassword(password: string, reset_key: string) {
    return await swell.account.recover({
      password,
      reset_key,
    });
  }

  async function createUserAccountAtCheckout(
    data: createUserAccountAtCheckoutData
  ) {
    return await swell.account.createAddress({
      name: `${data.firstName} ${data.lastName}`,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      country: data.country,
    });
  }

  function displayUserDetails(): any {
    const userDetails = queryClient.getQueryData("getAccount");
    return userDetails;
  }

  async function createUserAddresstAtCheckout(data: checkoutData) {
    return await swell.account.create({
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
    });
  }

  async function updateUserBillingInfo(
    data: createUserAccountAtCheckoutData,
    token: string
  ) {
    return await swell.cart.update({
      billing: {
        name: `${data.firstName} ${data.lastName}`,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        card: {
          token,
        },
      },
      shipping: {
        name: `${data.firstName} ${data.lastName}`,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
      },
    });
  }

  return {
    createUserAccount,
    signedUserDetails,
    loginUser,
    logoutUser,
    forgotPassword,
    getUserAccount,
    displayUserDetails,
    createUserAccountAtCheckout,
    recoverPassword,
    createUserAddresstAtCheckout,
    updateUserBillingInfo,
  };
}
