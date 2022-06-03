import type { NextPage } from "next";
import { useRouter } from "next/router";

const Worker: NextPage = () => {
  const router = useRouter();
  const { worker } = router.query;

  return <div>hello {worker}</div>;
};

export default Worker;
