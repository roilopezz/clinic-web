import adoption from "../../imgs/services/adoption.png";
import family from "../../imgs/services/family.png";
import woman from "../../imgs/services/woman.png";
import pray from "../../imgs/services/pray.png";

export const navHE: Array<object> = [
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer ml-10",
    text: "בית",
  },
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer ml-10",
    text: "אודות המרפאה",
  },
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer ml-10",
    text: "צרו קשר",
  },
  {
    href: "#responsive-header",
    className:
      "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer ml-10",
    text: "תמכו בנו",
  },
];

export const headerContentHE: Array<object> = [
  {
    id: "firstTitle",
    className:
      "text-titleHeaderDefault desktop:text-titleHeaderMd  xs:text-titleHeaderSm font-bold m-[-5%] sm: m-[-5%]",
    textTitleOne: "מרפאת ואהבת-",
  },
  {
    id: "secondTitle",
    className:
      "text-titleHeaderDefault desktop:text-titleHeaderMd xs:text-titleHeaderSm font-bold pb-3",
    textTitleTwo: "בריאות שוויונית לכולם",
  },
  {
    id: "secondContent",
    className:
      "text-contentHeaderDefault lg:text-contentHeaderMd xs:text-contentHeaderSm",
    textTitleThree: "שירותי רפואה כלליים למשפחה,",
  },
  {
    id: "firstContent",
    className:
      "text-contentHeaderDefault lg:text-contentHeaderMd  xs:text-contentHeaderSm",
    textTitleFour: "ומגוון שירותי רפואה מקצועיים.",
  },

  {
    id: "btn",
    className:
      "bg-blueBtn w-btnHeaderDesktop h-btnHeaderDesktop mobile:w-btnHeaderMobile mobile:h-btnHeaderMobile  mobile:text-contentBtnMobile mt-5 xs:mt-10 hover:bg-blue-700 text-white font-bold rounded-full mobile:mt-5",
    text: "הכירו אותנו",
  },
];

export const aboutHE: Array<object> = [
  {
    firstTitle: "אודות המרפאה",
  },
  {
    titleOne: "המטרה:שירותי בריאות",
    titleTwo: "מצויינים לכל איש",
    titleThree: "ואישה בישראל.",
  },
  {
    className: "mt-10",
    paragraph: `המרפאה פועלת כולה בהתנדבות ומספקת שירותים לאנשים שנמנעו מהם תושבות
        רשמית בישראל כתוצאה מעקירה מארץ המקור צווות מהפאה עושה מאמצים
        משמעותיים לספק בהתנדבות מלאה ת כל סוגי הטיפול והעזרה הנדרשים`,
  },
  {
    button: "קרא עוד",
  },
];

export const servicesTitlesHE: Array<any> = [
  {
    titleOne: "מה אנחנו עושים?",
    titleTwo: "שירותי המרפאה",
  },
];

export const servicesHE: Array<any> = [
  {
    src: adoption,
    title: "רפואת ילדים",
    text: `במרפאה הילדים ניתנים כל שירותי הבריאות לילדים. שירותים כלולים טיפול רפואי שגרתי,
      חיסונים, מעקב התפתחותי, טיפול בהפרעות תקשרות ועוד.
      `,
  },

  {
    src: family,
    title: "רפואת משפחה",
    text: `שירותי רפואה למשפחה ורפואה מקצועית ניתנים במגוון תחומים לכלל המשפחה.
      המרפאה נעזרת במגוון רחב של אנשי רפואה,
      לפי הצורך.
      `,
  },

  {
    src: woman,
    title: "רפואת נשים",
    text: `מרפאת הנשים מטפלת בנשים הזקוקות למגוון שירותי הבריאות. השירותים כוללים: בדיקות גניקולוגיות שגרתיות, תכנון משפחה, התקנת התקנים למנעית הריון, בדיקות שד, בדיקות לגילוי סרטן, מעקב הריון ועוד.`,
  },

  {
    src: pray,
    title: "רפואת נפש",
    text: ` המרפאה לרפואת הנפש מטפלת במבוגרים ונוער הזקוקים לשירותי יעוץ נפשי,
          מספקת אבחונים פסיכיאטריים, וניהול טיפול תרופתי.`,
  },
];

export const contactHE: object = {
  btnTxt: "צרו קשר",
  title: "אנחנו פה בשבילכם",
  titleClassName:
    "text-titleAboutUsDesktop mobile:text-titleAboutUsMobile font-bold",

  paragraphOne: " המרפאה פעילה בימים ג' ו-ה' בין השעות 19:00 - 16:00",
  paragraphTwo: "וביום שבת בשעות 14:00 - 10:00",

  callOne: "עברית, אנגלית, ערבית",
  callOneClassName: "mr-3",
  callTwo: "טיגריניה, אמהרית",
  callTwoClassOne:
    "w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full mr-5  sm:mr-0",

  locationClass: "mr-3",
  locationOne: "מגדל הנביאים, ח'ורי2,",
  locationTwo: "קומה 6, חיפה",
};

export const formHE: object = {
  toastTxt: "הפרטים נשלחו בהצלחה",
  name: "שם פרטי",
  lastName: "שם משפחה",
  email: "מייל",
  phone: "טלפון",
  content: "מה תרצו לומר לנו?",
  btn: "שליחה",
};

export const footerHE: object = {
  appointment: "לקביעת תור",
  support: "תמכו בנו",
  menu: "תפריט",
  aboutClinic: "אודות המרפאה",
  contact: "צרו קשר",
  languageOne: "עברית, אנגלית, ערבית",
  languageTwo: "טיגריניה, אמהרית",
  locationOne: "מגדל הנביאים, ח'ורי2,",
  locationTwo: " קומה 6, חיפה",
};
