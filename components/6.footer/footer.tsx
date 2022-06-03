import Image from "next/image";
import Button from "../../common/button/button";
import footerLogo from "../../imgs/footer/logoFooter.png";

import { useRouter } from "next/router";
import { footerHE } from "../../common/lang/he";
import { footerEN } from "../../common/lang/en";
import { useEffect, useState } from "react";
const Footer = () => {
  const router = useRouter();
  const [lng, setLng] = useState<any>([]);

  const { locale } = router;

  useEffect(() => {
    const { locale } = router;

    if (locale === "en") {
      setLng(footerEN);
    } else {
      setLng(footerHE);
    }
  }, [router]);

  return (
    <>
      <footer className="flex justify-center p-20 text-right footerMd:mt-[50%] footerSm:mt-[150%]">
        <div>
          <div className="grid grid-cols-4 gap-1 w-[100%] footerSm:grid-cols-1 footerSm:flex footerSm:flex-col">
            <div>
              <Image alt="footerLogo" src={footerLogo} />
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col">
                <Button
                  className={
                    "borderBtnFooter text-blue bg-white w-btnFooterDesktop h-btnFooterDesktop font-bold rounded-full"
                  }
                  text={lng?.appointment}
                />
                <Button
                  className={
                    "borderBtnFooter text-blue bg-white w-btnFooterDesktop h-btnFooterDesktop mt-2 font-bold rounded-full"
                  }
                  text={lng?.support}
                />
              </div>
            </div>

            <div className={`${locale == "en" ? "text-left ml-10" : "mr-20"} `}>
              {/* <div className="flex flex-col mr-20 text-left"> */}
              <div className="footerSm:hidden">
                <div className="font-bold mb-2 ">{lng?.menu}</div>
                <div className="">{lng?.aboutClinic}</div>
                <div className="">{lng?.contact}</div>
                <div className="">{lng?.support}</div>
              </div>
            </div>

            <div className="footerSm:relative footerSm:right-0">
              <div className={`${locale == "en" ? "text-left" : null} `}>
                <div className="font-bold mb-2 ">{lng?.contact}</div>
                <div className="flex flex-row">
                  <a href="tel:053-4848846">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-blue w-[35px] h-[35px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>

                  <div
                    className={`${locale == "en" ? "relative left-2" : null} `}
                  >
                    <div className="mr-3">
                      {lng?.languageOne}
                      <a
                        className={`${locale == "en" ? "ml-2" : "mr-2"} `}
                        href="tel:053-4848846"
                      >
                        053-4848846
                      </a>
                    </div>
                    <div className="mr-3">
                      {lng?.languageTwo}
                      <a
                        className={`${locale == "en" ? "ml-2" : "mr-2"} `}
                        href="tel:053-4848846"
                      >
                        053-4848846
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row">
                  <a href="mailto:veahavta.clinic@gmail.com">
                    <svg
                      className="w-5 h-5 text-blue w-[35px] h-[35px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </a>

                  <div
                    className={`${locale == "en" ? "relative left-2" : null} `}
                  >
                    <div className="mr-3 mobile:pt-2">
                      <a href="mailto:veahavta.clinic@gmail.com">
                        veahavta.clinic@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mt-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue w-[35px] h-[35px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div
                    className={`${locale == "en" ? "relative left-2" : null} `}
                  >
                    <div className="mr-3">
                      {lng?.locationOne}

                      <br />
                      {lng?.locationTwo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx global>
        {`
          .borderBtnFooter {
            border: 1px solid blue;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
