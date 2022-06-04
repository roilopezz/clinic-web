import Image from "next/image";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { servicesHE, servicesTitlesHE } from "../../common/lang/he";
import { servicesEN, servicesTitlesEN } from "../../common/lang/en";

const Services = () => {
  const router = useRouter();
  const [lngTitles, setLngTitles] = useState<any>([]);
  const [lng, setLng] = useState<any>([]);

  const { locale } = router;

  useEffect(() => {
    const { locale } = router;

    if (locale === "en") {
      setLngTitles(servicesTitlesEN);
      setLng(servicesEN);
    } else {
      setLngTitles(servicesTitlesHE);
      setLng(servicesHE);
    }
  }, [router]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center mt-36 mb-36 mobile:mt-10">
      {lngTitles.map((title: any) => {
        return (
          <div key={uuidv4()}>
            <div
              className={`${
                locale === "en"
                  ? "text-orange mobile:text-left mobile:ml-[15%]"
                  : "text-orange mobile:text-right mobile:mr-[17%]"
              }`}
            >
              {title.titleOne}
            </div>

            <div className="text-titleServices font-bold mobile:hidden">
              {title.titleTwo}
            </div>
          </div>
        );
      })}

      <div className="flex justify-center mt-10 text-right">
        <div className="grid grid-cols-4 mobile:grid-cols-1 mobile:flex mobile:flex-col-reverse gap-4 w-[70%]">
          {lng.map((service: any) => (
            <div
              key={uuidv4()}
              className="rounded-[30px] shadow mobile:hidden "
            >
              <div className="bg-[#F4F3FD] rounded-[30px] py-10 text-center">
                <Image alt="services" src={service?.src} />
              </div>
              <div className="p-6">
                <div className="text-blue font-bold ">{service.title}</div>
                <div>{service.text}</div>
              </div>
            </div>
          ))}

          <Slider className="lg:hidden md:block relative" {...settings}>
            {lng.map((service: any) => (
              <div key={uuidv4()} className="rounded-[30px] border">
                <div className="bg-[#F4F3FD] rounded-[30px] py-10 text-center">
                  <Image alt="services" src={service?.src} />
                </div>

                <div className={`${locale == "en" ? "p-6 text-left" : "p-6"} `}>
                  <div className="text-blue font-bold mobile:text-lg">
                    {service.title}
                  </div>
                  <div>{service.text}</div>
                </div>
              </div>
            ))}
          </Slider>

          <style jsx global>
            {`
              .slick-arrow {
                z-index: 99 !important;
              }

              .slick-arrow::before {
                color: black !important;
                font-size: 70px;
                position: absolute;
                right: -25px;
                bottom: -20px;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Services;
