import Image from "next/image";
import Button from "../../common/button/button";
import iconCall from "../../imgs/icons/iconCall.png";
import Form from "../../common/form/form";

import { useRouter } from "next/router";
import { contactHE } from "../../common/lang/he";
import { contactEN } from "../../common/lang/en";
import { useEffect, useState } from "react";

const Contact = () => {
  const router = useRouter();
  const [lng, setLng] = useState<any>();

  const { locale } = router;

  useEffect(() => {
    const { locale } = router;

    if (locale === "en") {
      setLng(contactEN);
    } else {
      setLng(contactHE);
    }
  }, [router, lng]);

  return (
    <div className="flex justify-center w-full bg-[#F4F3FD] xs:bg-white pt-10  h-[500px] relative ">
      <div className="grid grid-cols-2 mobile:grid-cols-1  gap-1">
        <div className="bg-gray mt-10 mobile:mb-10 mobile:mt-[-140px]">
          <div className="mobile:p-5">
            <div className="mb-2 text-blue">
              <Button
                className="mobile:hidden text-blue bg-white w-btnContactDesktop h-btnContactDesktop mobile:w-btnHeaderMobile mobile:h-btnHeaderMobile  mobile:text-contentBtnMobile mt-5 xs:mt-10 text-white font-bold rounded-full"
                text={lng?.btnTxt}
              />
              <h1 className="lg:hidden">{lng?.btnTxt}</h1>
            </div>
            <div className={lng?.titleClassName}>
              <h1>{lng?.title}</h1>
            </div>

            <p className="mt-5 text-sm">
              {lng?.paragraphOne}
              <br />
              {lng?.paragraphTwo}
            </p>

            <div className="flex mobile:flex-col mt-9 ">
              <div className="flex flex-wrap">
                <div className="w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full">
                  <a href="tel:053-4848846 ">
                    <Image alt="iconPhone" src={iconCall} />
                  </a>
                </div>

                <div className={lng?.callOneClassName}>
                  {lng?.callOne}
                  <br />
                  <a href="tel:053-4848846">053-4848846</a>
                </div>
              </div>

              <div className="flex mr-1 mobile:mr-0 ">
                <div
                  className={`${lng?.callTwoClassOne} mobile:relative mobile:top-2`}
                >
                  <a href="tel:053-4848846">
                    <Image alt="iconPhone" src={iconCall} />
                  </a>
                </div>

                <div
                  className={`${locale == "en" ? "ml-2 mobile:ml-2" : "mr-3"}`}
                >
                  {lng?.callTwo}
                  <br />
                  <a href="tel:053-4848846">053-4848846</a>
                </div>
              </div>
            </div>

            <div className="flex mobile:flex-col flex-wrap mt-5">
              <div className="flex mobile:relative mobile:bottom-2">
                <div className="w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full mobile:relative mobile:top-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      // fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      // clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className={lng?.locationClass}>
                  {lng?.locationOne}
                  <br />
                  {lng?.locationTwo}
                </div>
              </div>

              <div className="flex">
                <div
                  className={`${
                    locale == "en"
                      ? "w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full ml-2 mobile:ml-0 mobile:mr-0 mobile:relative mobile:top-1"
                      : "w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full mr-2 mobile:mr-0 mobile:relative mobile:top-1"
                  }`}
                >
                  <a href="mailto:veahavta.clinic@gmail.com">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </a>
                </div>

                <div
                  className={`${
                    locale === "en"
                      ? "ml-2 mobile:ml-2 mobile:pt-2"
                      : "mr-3 pt-1 mobile:pt-2"
                  }`}
                >
                  <a href="mailto:veahavta.clinic@gmail.com">
                    veahavta.clinic@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            locale === "en"
              ? `xl:ml-5 mobile:h-[600px] xs:bg-[#F4F3FD] 
          mobile:mt-20 mobile:flex mobile:justify-center`
              : `xl:ml-5 mobile:h-[600px] xs:bg-[#F4F3FD] mobile:w-screen
          mobile:mt-20 mobile:flex mobile:justify-center`
          }`}
        >
          {/* circle right */}
          <div className="overflow-hidden absolute right-0">
            <div
              className="sm:hidden relative right-[-150px] top-[-1px] bg-[#D3D0FC]
          sm:absolute bottom:0 rounded-full  border p-20 "
            >
              <div className="rounded-full border p-20 bg-[#F4F3FD]"></div>
            </div>
          </div>

          {/* circle left */}
          <div className="overflow-hidden absolute left-0 bottom-1 sm:bottom-[-600px]">
            <div
              className="relative right-[150px]  bg-[#D3D0FC]
                        bottom:0 rounded-full  border p-20 "
            >
              <div className="rounded-full border p-20 bg-[#F4F3FD]"></div>
            </div>
          </div>

          <div className="max-w-screen-xl">
            {/* <div className=" max-w-lg mx-auto absolute bottom-[80px] mobile:relative mobile:bottom-0"> */}
            <div
              className="p-10  w-[500px]
              mb-0 space-y-4 rounded-[30px] bg-white
              mr-10
              absolute
              bottom-[90px]
               border
               xs:w-[300px]
               mobile:relative
               mobile:bottom-[70px]
               mobile:p-4
               mobile:mr-0"
            >
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
