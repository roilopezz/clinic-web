import adoption from "../../imgs/services/adoption.png";
import family from "../../imgs/services/family.png";
import woman from "../../imgs/services/woman.png";
import pray from "../../imgs/services/pray.png";

export const navEN: Array<object> = [
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer mr-10",
    text: "Home",
  },
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer mr-10",
    text: "About",
  },
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer mr-10",
    text: "Contact",
  },
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer mr-10",
    text: "SupportUs",
  },
];

export const headerContentEN: Array<object> = [
  {
    id: "firstTitle",
    className:
      "text-titleHeaderDefault desktop:text-titleHeaderMd xs:text-titleHeaderSm font-bold m-[-5%] sm: m-[-5%]",
    text: "Loved Clinic-",
  },
  {
    id: "secondTitle",
    className:
      "text-titleHeaderDefault desktop:text-titleHeaderMd xs:text-titleHeaderSm font-bold pb-3",
    text: "Equal health for all",
  },
  {
    id: "firstContent",
    className:
      "text-contentHeaderDefault lg:text-contentHeaderMd  xs:text-contentHeaderSm",
    text: "and a variety of professional medical services.",
  },
  {
    id: "secondContent",
    className:
      "text-contentHeaderDefault lg:text-contentHeaderMd xs:text-contentHeaderSm",
    text: "General Medical Services for the Family",
  },
  {
    id: "btn",
    className:
      "bg-blueBtn w-btnHeaderDesktop h-btnHeaderDesktop mobile:w-btnHeaderMobile mobile:h-btnHeaderMobile  mobile:text-contentBtnMobile mt-5 xs:mt-10 hover:bg-blue-700 text-white font-bold rounded-full",
    text: "Get to know us",
  },
];

export const aboutEN: Array<object> = [
  {
    firstTitle: "About the clinic",
    className: "mb-2 text-blue",
  },
  {
    titleOne: "Goal Health Services",
    titleTwo: "Excellent for every man",
    titleThree: "And a woman in Israel.",
  },
  {
    className: "mt-10",
    paragraph: `The clinic operates entirely voluntarily and provides services to people who have been denied residency 
    Officially in Israel as a result of displacement from the country of origin, orders from the wig make efforts
    Significantly provide full voluntary delivery of all types of care and assistance required`,
  },
  {
    classNameBtn:
      "bg-blueBtn w-btnHeaderDesktop h-btnHeaderDesktop mobile:w-btnHeaderMobile mobile:h-btnHeaderMobile  mobile:text-contentBtnMobile mt-5 xs:mt-10 hover:bg-blue-700 text-white font-bold rounded-full",
    button: "Reed More",
  },
];

export const servicesTitlesEN: Array<any> = [
  {
    titleOne: "What do we do?",

    classNameTitleTwo: "text-titleServices font-bold mobile:hidden",
    titleTwo: "Clinic Services",
  },
];

export const servicesEN: Array<any> = [
  {
    src: adoption,
    title: "Pediatrics",
    text: `The children's clinic provides all children's health services. Services included in routine medical care and vaccinations, Developmental follow-up treatment of communication disorders and more.
      `,
  },
  {
    src: family,
    title: "Family Medicine",
    text: `Family medical services and professional medicine are provided in a variety of fields for the whole family.
    The clinic is assisted by a wide range of medical professionals as needed.
      `,
  },

  {
    src: woman,
    title: "Gynaecology",
    text: `The women's clinic treats women who need a variety of health services. Services include gynecological examinations
    Family planning installing devices to prevent pregnancy
    Breast tests tests for cancer follow pregnancy follow-up and more.`,
  },

  {
    src: pray,
    title: "Psychiatry",
    text: `The Mental Health Clinic treats adults and youth who need mental counseling services,
    Provides psychiatric diagnoses and drug treatment management.`,
  },
];

export const contactEN: object = {
  btnTxt: "Contact us",
  title: "We're here for you.",
  titleClassName:
    "text-titleAboutUsDesktop mobile:text-titleAboutUsMobile font-bold",

  paragraphOne:
    "The clinic is active on Tuesdays and Thursdays between the hours 19:00 - 16:00",
  paragraphTwo: "And on Saturday hours 14:00 - 10:00",

  callOne: "Hebrew, English, Arabic",
  callOneClassName: "ml-2",
  callTwo: "Tigrinya, Amharic",
  callTwoClassOne:
    "xl:ml-5 lg:ml-5 w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full mr-5  sm:mr-0",
  callTwoClassTwo: "mobile:absolute right-[10px] ml-0",

  locationClass: "ml-2",
  locationOne: "Khoury Prophets Tower2,",
  locationTwo: "6th floor Haifa",
};

export const formEN: object = {
  toastTxt: "the details send successfully",
  name: "first Name",
  lastName: "Last Name",
  email: "email",
  phone: "phone",
  content: "What would you like to tell us?",
  btn: "Send",
};

export const footerEN: object = {
  appointment: "appointment",
  support: "Support us",
  menu: "Menu",
  aboutClinic: "About the clinic",
  contact: "Contact us",
  languageOne: "Hebrew, English, Arabic",
  languageTwo: "Tigrinya, Amharic",
  locationOne: "Khoury Prophets Tower2,",
  locationTwo: "6th floor Haifa",
};
