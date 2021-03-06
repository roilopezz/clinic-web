import Image from "next/image";
import imgSeven from "../../imgs/header/Rectangle 10.png";
import Button from "../../common/button/button";
import { headerImagesGroupOne, headerImagesGroupTwo } from "./headerContent";
import { useRouter } from "next/router";
import { headerContentHE } from "../../common/lang/he";
import { headerContentEN } from "../../common/lang/en";
import { useEffect, useState } from "react";

function Header() {
  const router = useRouter();
  const [lng, setLng] = useState<any>([]);

  useEffect(() => {
    const { locale } = router;

    if (locale === "en") {
      setLng(headerContentEN);
    } else {
      setLng(headerContentHE);
    }
  }, [router]);

  return (
    <div className="flex justify-between h-bgHeaderHight bg-gradient-to-l from-violet-300 pt-50 relative overflow-hidden">
      <div className="flex justify-start lg:flex mobile:hidden ">
        {headerImagesGroupOne.map((imgAndClass: any) => {
          return (
            <div key={imgAndClass.id} className={imgAndClass.className}>
              <Image alt="img" src={imgAndClass.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col text-center justify-center items-center w-full sm:mb-[50%]  lg:mb-[10%] mt-56">
        <div className="absolute top-[-50px] left-[637px] h-[380px] w-[315px] lg:block mobile:hidden">
          <Image alt="img" src={imgSeven} />
        </div>

        {lng.map((content: any) => (
          <div key={content.id}>
            {content.id == "btn" ? (
              <Button
                className="bg-blueBtn w-btnHeaderDesktop h-btnHeaderDesktop mobile:w-btnHeaderMobile mobile:h-btnHeaderMobile  text-contentBtnMobile mt-10 xs:mt-10 hover:bg-blue-700 text-white font-bold rounded-full mobile:mt-20"
                text={content.text}
              />
            ) : (
              <div className="desktop:relative desktop:bottom-[55px]">
                <h1 className="mb-3 text-titleHeaderDefault desktop:text-titleHeaderMd  xs:text-titleHeaderSm font-bold ">
                  {content.textTitleOne}
                </h1>
                <h1 className="text-titleHeaderDefault desktop:text-titleHeaderMd  xs:text-titleHeaderSm font-bold m-[-2%] sm: m-[-5%] mb-2">
                  {content.textTitleTwo}
                </h1>
                <h1 className="text-lg ">{content.textTitleThree}</h1>
                <h1 className="text-lg ">{content.textTitleFour}</h1>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end lg:flex mobile:hidden">
        {headerImagesGroupTwo.map((imgAndClass: any) => {
          return (
            <div key={imgAndClass.id} className={imgAndClass.className}>
              <Image alt="img" src={imgAndClass.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
