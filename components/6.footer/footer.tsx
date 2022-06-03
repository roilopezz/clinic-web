import Image from "next/image";
import Button from "../../common/button/button";
import footerLogo from "../../imgs/footer/logoFooter.png";
import iconCall from "../../imgs/icons/iconCall.png";
import iconLocation from "../../imgs/icons/iconLocation.png";

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
    <footer className="flex justify-center p-20 text-right footerMd:mt-[50%] footerSm:mt-[150%]">
      <div>
        {/* <div className="grid grid-cols-4 mobile:grid-cols-1 mobile:flex mobile:flex-col gap-1 w-[100%]"> */}
        <div className="grid grid-cols-4 gap-1 w-[100%] footerSm:grid-cols-1 footerSm:flex footerSm:flex-col">
          {/* <div className="grid grid-cols-4 mobile:grid-cols-1 mobile:flex  gap-4 w-[70%]"> */}

          <div>
            <Image src={footerLogo} />
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col">
              <Button
                className={
                  "border text-blue bg-white w-btnFooterDesktop h-btnFooterDesktop font-bold rounded-full"
                }
                text={lng?.appointment}
              />
              <Button
                className={
                  "border text-blue bg-white w-btnFooterDesktop h-btnFooterDesktop mt-2 font-bold rounded-full"
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

          <div className="footerSm:relative footerSm:right-0 ">
            <div className={`${locale == "en" ? "text-left" : null} `}>
              <div className="font-bold mb-2 ">{lng?.contact}</div>
              <div className="flex flex-row">
                <div className="w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full">
                  <a href="tel:053-4848846">
                    <Image src={iconCall} />
                  </a>
                </div>

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
                <div className="w-[35px] h-[35px] p-2 bg-blueBtn rounded-full">
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
                <div className="w-[35px] h-[35px] p-2 flex justify-center align-center bg-blueBtn rounded-full">
                  <Image src={iconLocation} />
                </div>

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
  );
};

export default Footer;
