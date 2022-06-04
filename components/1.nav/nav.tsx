import { useEffect, useState } from "react";
import NavLogo from "../../imgs/nav/navLogo.png";
import he from "../../imgs/icons/ISR_2x.png";
import en from "../../imgs/icons/GBR_2x.png";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import { navHE } from "../../common/lang/he";
import { navEN } from "../../common/lang/en";

function Nav() {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [matches, setMatches] = useState<boolean>(true);
  const [lng, setLng] = useState<any>([]);
  const router = useRouter();

  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  useEffect(() => {
    // -- This for close the nav if the user in mobile mode -- //
    setMatches(window.matchMedia("(min-width: 1500px)").matches);

    const checkScreen = () => {
      let screen = matchMedia("(min-width: 1500px)").addEventListener(
        "change",
        (e) => setMatches(e.matches)
      );

      return screen;
    };

    checkScreen();

    setCollapse(!matches ? false : true);
  }, [matches]);

  const { locale } = router;

  useEffect(() => {
    const { locale } = router;

    if (locale === "en") {
      setLng(navEN);
    } else {
      setLng(navHE);
    }
  }, [router]);

  return (
    <>
      <div className="flex justify-center relative z-10">
        <nav className="nav absolute top-3 mobile:top-10 rounded-[12px] flex justify-center bg-center items-center w-8/12 mobile:w-11/12 h-navHight flex-wrap bg-white">
          <div
            className={`${
              locale === "en"
                ? "flex items-center flex-shrink-0 text-white mr-6 md:pl-[2%] sm:ml-0  sm:ml-[100px] xs:ml-[40px] mobile:mr-[120px]"
                : "flex items-center flex-shrink-0 text-white mr-6 md:pl-[2%] sm:ml-0  sm:ml-[100px] xs:ml-[40px] mobile:ml-[130px]"
            }`}
          >
            {/* <div className="flex items-center flex-shrink-0 text-white mr-6 md:pl-[2%] sm:ml-0  sm:ml-[100px] xs:ml-[40px] mobile:ml-[140px]"> */}
            <Image alt="navLogo" src={NavLogo} />
          </div>
          <div
            className={
              locale == "en"
                ? "block mobileHamburger:block lg:hidden mobile:relative mobile:right-[5%]"
                : "block mobileHamburger:block lg:hidden mobile:relative mobile:left-[5%]"
            }
          >
            <button
              onClick={() => setCollapse((prev: boolean) => !prev)}
              className="flex items-center px-2 py-2 border bg-bgNavHamburger rounded text-black-200 rounded-full"
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {collapse ? (
            <div
              className={`${
                locale === "en"
                  ? "navBottomRadius p-2 mobile:p-6 bg-white w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-left sm:text-left"
                  : "navBottomRadius p-2 mobile:p-10 bg-white w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-right sm:text-right"
              }`}
            >
              {/* // <div className="rounded-b-lg p-5 bg-white w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-right sm:text-right"> */}
              <div className="text-lg flex xs:flex-col lg:flex-grow ">
                {lng.map((tab: any) => (
                  // <a key={uuidv4()} className={tab.className}>
                  <a
                    key={uuidv4()}
                    className="block font-bold mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue cursor-pointer ml-10"
                  >
                    {tab.text}
                  </a>
                ))}
              </div>
              <div className="flex mobile:flex-col relative mt-2">
                <div
                  className={`${
                    locale == "en"
                      ? "gap-4  flex mobile:flex-col justify-center  sm:absolute mobile:bottom-[1px] mobile:left-[240px]"
                      : "gap-4  flex mobile:flex-col justify-center  sm:absolute mobile:bottom-[1px] mobile:right-[200px]"
                  }`}
                >
                  <div>
                    <Image
                      onClick={() => changeLocale("he")}
                      key={uuidv4()}
                      className="cursor-pointer"
                      src={he}
                      alt="btnLang"
                    />
                  </div>
                  <div>
                    <Image
                      onClick={() => changeLocale("en")}
                      key={uuidv4()}
                      className="cursor-pointer"
                      src={en}
                      alt="btnLang"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
      <style jsx global>
        {`
          .navBottomRadius {
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          }
        `}
      </style>
    </>
  );
}

export default Nav;
