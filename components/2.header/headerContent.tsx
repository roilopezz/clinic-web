import imgOne from "../../imgs/header/imgOne.png";
import imgTwo from "../../imgs/header/imgTwo.png";
import imgThree from "../../imgs/header/imgThree.png";
import imgFour from "../../imgs/header/imgFour.png";
import imgFive from "../../imgs/header/imgFive.png";
import imgSix from "../../imgs/header/imgSix.png";

export const headerContent: Array<object> = [
  {
    id: "firstTitle",
    className:
      "text-titleHeaderDefault desktop:text-titleHeaderMd xs:text-titleHeaderSm font-bold m-[-5%] sm: m-[-5%]",
    text: "מרפאת ואהבת-",
  },
  {
    id: "secondTitle",
    className:
      "text-titleHeaderDefault desktop:text-titleHeaderMd xs:text-titleHeaderSm font-bold pb-3",
    text: "בריאות שוויונית לכולם",
  },
  {
    id: "firstContent",
    className:
      "text-contentHeaderDefault lg:text-contentHeaderMd  xs:text-contentHeaderSm",
    text: "ומגוון שירותי רפואה מקצועיים.",
  },
  {
    id: "secondContent",
    className:
      "text-contentHeaderDefault lg:text-contentHeaderMd xs:text-contentHeaderSm",
    text: "שירותי רפואה כלליים למשפחה,",
  },
  {
    id: "btn",
    className:
      "bg-blueBtn w-btnHeaderDesktop h-btnHeaderDesktop mobile:w-btnHeaderMobile mobile:h-btnHeaderMobile  mobile:text-contentBtnMobile mt-5 xs:mt-10 hover:bg-blue-700 text-white font-bold rounded-full",
    text: "הכירו אותנו",
  },
];

export const headerImagesGroupOne: Array<object> = [
  {
    id: "imgOne",
    className: "absolute top-0 left-[165px] h-[380px] w-[315px]",
    src: imgOne,
  },
  {
    id: "imgTwo",
    className: "absolute top-[300px] left-[-43px] h-[380px] w-[315px]",
    src: imgTwo,
  },
  {
    id: "imgThree",
    className: "absolute bottom-[-20%] left-[322px] h-[380px] w-[315px]",
    src: imgThree,
  },
];

export const headerImagesGroupTwo: Array<object> = [
  {
    id: "imgFour",
    className: "absolute top-0 right-[165px] h-[380px] w-[315px]",
    src: imgFour,
  },
  {
    id: "imgFive",
    className: "absolute top-[300px] right-[-43px] h-[380px] w-[315px]",
    src: imgFive,
  },
  {
    id: "imgSix",
    className: "absolute bottom-[-20%] right-[322px] h-[380px] w-[315px]",
    src: imgSix,
  },
];
