import type { NextPage } from "next";
import Link from "next/link";
import Worker from "./[worker]";
const AboutUs: NextPage = () => {
  return (
    <div>
      HELLO <Worker />
      <Link href="/aboutus/temp">temp</Link>
    </div>
  );
};

export default AboutUs;
