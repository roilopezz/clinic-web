import { useFormik } from "formik";
import Input from "./input";
import TextArea from "./textArea";
import { toast } from "react-toastify";
import Button from "../button/button";

import { useRouter } from "next/router";
import { formHE } from "../../common/lang/he";
import { formEN } from "../../common/lang/en";
import { useEffect, useState } from "react";

const Form = () => {
  const router = useRouter();
  const [lng, setLng] = useState<any>([]);

  console.log(typeof lng);

  useEffect(() => {
    const { locale } = router;

    if (locale === "en") {
      setLng(formEN);
    } else {
      setLng(formHE);
    }
  }, [router]);

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      content: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      toast.success(`${values.name} ${lng?.toastTxt} `);
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div
          className="flex gap-4 mobile:flex
                mobile:flex-col"
        >
          <Input
            handleChange={formik.handleChange}
            value={formik.values.name}
            label={lng?.name}
            id={"name"}
            errors={formik.errors.name}
            type={"text"}
          />

          <Input
            handleChange={formik.handleChange}
            value={formik.values.lastName}
            label={lng?.lastName}
            id={"lastName"}
            errors={formik.errors.lastName}
            type={"text"}
          />
        </div>

        <div className="flex gap-4 mobile:flex mobile:flex-col">
          <Input
            handleChange={formik.handleChange}
            value={formik.values.email}
            label={lng?.email}
            id={"email"}
            errors={formik.errors.email}
            type={"email"}
          />
          <Input
            handleChange={formik.handleChange}
            value={formik.values.phone}
            label={lng?.phone}
            id={"phone"}
            errors={formik.errors.phone}
            type={"text"}
          />
        </div>
        <TextArea
          handleChange={formik.handleChange}
          value={formik.values.content}
          label={lng?.content}
          id={"content"}
          errors={formik.errors.content}
        />

        <div className="text-center">
          <Button
            className={
              "bg-blueBtn w-btnHeaderDesktop h-btnHeaderDesktop mt-5 text-lg hover:bg-blue-700 text-white font-bold rounded-full "
            }
            text={lng?.btn}
          />
        </div>
      </form>
    </>
  );
};

const validate = (values: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (
    !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.phone)
  ) {
    errors.phone = "Invalid Phone Number";
  }

  if (!values.content) {
    errors.content = "Required";
  } else if (values.content.length > 100) {
    errors.content = "Must be 100 characters or less";
  }

  return errors;
};

export default Form;
