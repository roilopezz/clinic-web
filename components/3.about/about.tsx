import Image from "next/image";
import aboutImg from "../../imgs/about/about.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { aboutHE } from "../../common/lang/he";
import { aboutEN } from "../../common/lang/en";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  const router = useRouter();
  const [lng, setLng] = useState<any>([]);

  const { locale } = router;

  useEffect(() => {
    if (locale === "en") {
      setLng(aboutEN);
    } else {
      setLng(aboutHE);
    }
  }, [router]);

  return (
    <div className="flex justify-center mt-20 mobile:mt-10">
      <div className="grid grid-cols-2 mobile:grid-cols-1 mobile:flex mobile:flex-col gap-2 w-[70%]">
        <div className={`${locale === "en" ? "xl:mr-10" : "xl:ml-10"}`}>
          <Image alt="aboutImg" src={aboutImg} />
        </div>

        <div className="bg-gray mt-10 mobile:mb-10">
          {lng.map((l: any) => {
            return (
              <div key={uuidv4()}>
                <div>
                  <div className="mb-2 text-blue">{l.firstTitle}</div>
                </div>
                <div className=" text-titleAboutUsDesktop mobile:text-titleAboutUsMobile font-bold">
                  <h1
                    className={`${locale === "en" ? "mobile:text-xl" : null}`}
                  >
                    {l.titleOne}
                  </h1>
                  <h1
                    className={`${locale === "en" ? "mobile:text-xl" : null}`}
                  >
                    {l.titleTwo}
                  </h1>
                  <h1
                    className={`${locale === "en" ? "mobile:text-xl" : null}`}
                  >
                    {l.titleThree}
                  </h1>
                </div>
                <p className={l.className}>{l.paragraph}</p>
              </div>
            );
          })}

          <button
            className="bg-blue mt-10 border rounded-full w-btnHeaderMobile 
          text-aboutBtnMobile h-btnHeaderMobile bg-blueBtn text-white font-bold"
          >
            {locale === "en" ? "Read More" : "?????? ??????"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
