module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        bgHeaderHight: "780px",
        navHight: "73px",
        btnHeaderDesktop: "60px",
        btnHeaderMobile: "60px",
        btnContactDesktop: "30px",
        btnFooterDesktop: "40px",
      },

      width: {
        btnHeaderDesktop: "185px",
        btnHeaderMobile: "185px",
        btnContactDesktop: "90px",
        btnFooterDesktop: "120px",
      },

      textColor: {
        blue: "#4E47F9",
        orange: "#D25C78",
      },

      screens: {
        sm: { min: "1px", max: "1500px" },
        xs: { min: "1px", max: "1000px" },
        desktop: { min: "660px", max: "1720px" },
        mobile: { min: "1px", max: "1500px" },
        mobileHamburger: { min: "1px", max: "1500px" },
        footerMd: { min: "800px", max: "1500px" },
        footerSm: { min: "1px", max: "800px" },
      },

      backgroundColor: {
        bgNavHamburger: "#E6E4FD",
        blueBtn: "#4E47F9",
      },

      fontSize: {
        titleHeaderDefault: "70px",
        contentHeaderDefault: "28px",
        aboutBtnMobile: "22px",
        contentBtnMobile: "22px",
        titleHeaderMd: "50px",
        contentHeaderMd: "25px",
        titleHeaderSm: "33px",
        contentHeaderSm: "20px",
        titleAboutUsDesktop: "42px",
        titleAboutUsMobile: "25px",
        titleServices: "70px",
      },
    },
  },
  plugins: [],
};
