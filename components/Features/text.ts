import Feature from "../../types/feature";
import iconOnline from '../../public/images/icon-online.svg';
import iconBudgeting from '../../public/images/icon-budgeting.svg';
import iconOnboarding from '../../public/images/icon-onboarding.svg';
import iconAPI from '../../public/images/icon-api.svg';

export const title = "Why choose Easybank?";
export const paragraph = "We leverage Open Banking to turn your bank account into financial Hub. Control your finances like never before.";

export const features: Feature[] = [
  {
    icon: iconOnline,
    title: "Online Banking",
    paragraph: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: iconBudgeting,
    title: "Simple Budgeting",
    paragraph: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
  },
  {
    icon: iconOnboarding,
    title: "Fast Onboarding",
    paragraph: "We don't do branches. Open your account in minutes online ans start taking control of your finances right away.",
  },
  {
    icon: iconAPI,
    title: "Open API",
    paragraph: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
]