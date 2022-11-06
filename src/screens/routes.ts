import { WelcomeScreen, Login, Signup } from "./exports";

export const routesList = {
  // route
  onboarding: {
    name: "/onboarding",
    // nested route
    welcome: {
      name: "welcome",
      url: "/onboarding/welcome",
      component: WelcomeScreen
    }
  },
  // route
  auth: {
    name: "/auth",
    // nested route
    login: {
      name: "login",
      url: "/auth/login",
      component: Login
    },
    signup: {
      name: "signup",
      url: "/auth/signup",
      component: Signup
    }
  }
};
