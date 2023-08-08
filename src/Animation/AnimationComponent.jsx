import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TiLocation } from "react-icons/ti";
import { BsFillBookmarkStarFill, BsBuildings } from "react-icons/bs";

import "./AnimationComponent.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const AnimationComponent = () => {
  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          scale: 2,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".line03, .text03", {}, 0.58)
      .to(".line01, .text01", {}, 2.11)
      .to(".line02, .text02", {}, 3.76);

    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: 6,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .from(".theLine", { drawSVG: 0, duration: 10 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: 10,
        },
        0
      )
      .add(pulses, 0)
      .to(".card3", { opacity: 1 }, 0.58)
      .to(".card1", { opacity: 1 }, 2.11)
      .to(".card2", { opacity: 1 }, 3.76);
  }, []);

  return (
    <div className="body relative pb-8">
      <svg
        className="animation-svg"
        id="svg"
        viewBox="0 0 670 855"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ball ball01"
          d="M345.438 10.218C345.168 9.936 344.906 9.646 344.636 9.374C344.359 9.09839 344.074 8.83094 343.782 8.572C337.879 3.04338 330.088 -0.022749 322 3.65755e-06C317.796 -0.0100983 313.632 0.813336 309.748 2.42269C305.865 4.03204 302.339 6.39537 299.374 9.376C287.166 21.574 286.906 41.252 298.572 53.782C298.832 54.074 299.092 54.354 299.364 54.636L300.208 55.438C306.12 60.9577 313.912 64.0191 322 64C330.552 64 338.584 60.678 344.636 54.636C356.834 42.428 357.094 22.748 345.438 10.218ZM301.02 11.02C303.769 8.25627 307.038 6.06531 310.64 4.57399C314.241 3.08267 318.102 2.32063 322 2.332C329.532 2.332 336.636 5.124 342.136 10.218L339.47 12.896C334.707 8.51925 328.47 6.09772 322.002 6.114C318.601 6.10293 315.232 6.76766 312.09 8.06959C308.948 9.37151 306.096 11.2847 303.7 13.698C301.288 16.095 299.375 18.947 298.073 22.0887C296.771 25.2304 296.106 28.5993 296.116 32C296.116 38.532 298.512 44.678 302.898 49.468L300.22 52.134C289.47 40.508 289.728 22.312 301.02 11.02ZM337.812 14.532V14.542L335.104 17.25C331.508 14.0132 326.838 12.2277 322 12.24C319.404 12.2324 316.833 12.7405 314.435 13.7348C312.037 14.729 309.861 16.1897 308.032 18.032C306.191 19.8618 304.732 22.0385 303.737 24.436C302.743 26.8336 302.234 29.4045 302.24 32C302.23 36.8357 304.012 41.5038 307.24 45.104L304.542 47.812C300.604 43.4895 298.429 37.8475 298.448 32C298.439 28.9057 299.044 25.8403 300.228 22.9813C301.411 20.1223 303.15 17.5264 305.344 15.344C307.526 13.1504 310.122 11.4114 312.981 10.2277C315.84 9.04399 318.906 8.43909 322 8.448C327.906 8.448 333.468 10.604 337.812 14.532ZM339.428 32C339.428 36.656 337.616 41.032 334.324 44.322C331.032 47.612 326.658 49.436 322.002 49.436C317.785 49.4337 313.712 47.8976 310.544 45.114V45.104C310.252 44.854 309.96 44.604 309.68 44.322C309.411 44.0413 309.151 43.7532 308.898 43.458C306.105 40.2956 304.567 36.2193 304.576 32C304.576 27.344 306.388 22.968 309.68 19.678C311.294 18.0546 313.215 16.7676 315.33 15.8915C317.445 15.0153 319.713 14.5675 322.002 14.574C326.262 14.574 330.284 16.106 333.46 18.896C333.752 19.146 334.054 19.396 334.324 19.678C334.606 19.96 334.856 20.25 335.106 20.542C337.899 23.7044 339.437 27.7807 339.428 32ZM308.896 46.76C312.497 49.9888 317.164 51.773 322 51.77C324.597 51.778 327.169 51.2691 329.567 50.273C331.965 49.2769 334.141 47.8134 335.968 45.968C337.81 44.139 339.27 41.9625 340.264 39.5647C341.259 37.167 341.767 34.5957 341.76 32C341.77 27.1643 339.988 22.4962 336.76 18.896L339.468 16.188C343.398 20.5155 345.571 26.1542 345.562 32C345.569 35.095 344.962 38.1606 343.777 41.0196C342.592 43.8785 340.851 46.4741 338.656 48.656C336.474 50.851 333.879 52.5915 331.02 53.7769C328.161 54.9623 325.095 55.5691 322 55.562C316.154 55.5713 310.516 53.3981 306.188 49.468L308.896 46.76ZM342.98 52.98C340.231 55.7437 336.962 57.9347 333.36 59.426C329.759 60.9173 325.898 61.6794 322 61.668C314.531 61.6861 307.334 58.8675 301.864 53.782L304.542 51.116C309.306 55.4904 315.542 57.9115 322.01 57.898C325.411 57.9038 328.779 57.2357 331.921 55.9322C335.062 54.6288 337.914 52.7159 340.312 50.304C342.722 47.9054 344.633 45.0531 345.935 41.9117C347.237 38.7704 347.903 35.4023 347.896 32.002C347.909 25.5372 345.488 19.3044 341.114 14.544L343.78 11.866C354.53 23.492 354.272 41.688 342.98 52.98Z"
          fill="white"
        />
        <path
          className="theLine"
          d="M325 32.5C121.388 96.9113 133.372 142.718 325 237.5C527.602 340.259 488.583 381.946 325 442.5C134.919 512.565 152.895 558.395 325 647.5C517.26 746.064 526.882 791.875 325 852.5"
          stroke="white"
          strokeWidth="4"
        />
        <line
          className="line line01"
          x1="544"
          y1="348"
          x2="657"
          y2="348"
          stroke="white"
          strokeWidth="4"
        />
        <line
          className="line line02"
          y1="531"
          x2="113"
          y2="531"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="text text01"
          d="M599.807 330V328.466L605.568 322.159C606.244 321.42 606.801 320.778 607.239 320.233C607.676 319.682 608 319.165 608.21 318.682C608.426 318.193 608.534 317.682 608.534 317.148C608.534 316.534 608.386 316.003 608.091 315.554C607.801 315.105 607.403 314.759 606.898 314.514C606.392 314.27 605.824 314.148 605.193 314.148C604.523 314.148 603.938 314.287 603.438 314.565C602.943 314.838 602.56 315.222 602.287 315.716C602.02 316.21 601.886 316.79 601.886 317.455H599.875C599.875 316.432 600.111 315.534 600.582 314.761C601.054 313.989 601.696 313.386 602.509 312.955C603.327 312.523 604.244 312.307 605.261 312.307C606.284 312.307 607.19 312.523 607.98 312.955C608.77 313.386 609.389 313.969 609.838 314.702C610.287 315.435 610.511 316.25 610.511 317.148C610.511 317.79 610.395 318.418 610.162 319.031C609.935 319.639 609.537 320.318 608.969 321.068C608.406 321.812 607.625 322.722 606.625 323.795L602.705 327.989V328.125H610.818V330H599.807ZM620.031 330.239C618.747 330.239 617.653 329.889 616.75 329.19C615.847 328.486 615.156 327.466 614.679 326.131C614.202 324.79 613.963 323.17 613.963 321.273C613.963 319.386 614.202 317.776 614.679 316.44C615.162 315.099 615.855 314.077 616.759 313.372C617.668 312.662 618.759 312.307 620.031 312.307C621.304 312.307 622.392 312.662 623.295 313.372C624.205 314.077 624.898 315.099 625.375 316.44C625.858 317.776 626.099 319.386 626.099 321.273C626.099 323.17 625.861 324.79 625.384 326.131C624.906 327.466 624.216 328.486 623.312 329.19C622.409 329.889 621.315 330.239 620.031 330.239ZM620.031 328.364C621.304 328.364 622.293 327.75 622.997 326.523C623.702 325.295 624.054 323.545 624.054 321.273C624.054 319.761 623.892 318.474 623.568 317.412C623.25 316.349 622.79 315.54 622.188 314.983C621.591 314.426 620.872 314.148 620.031 314.148C618.77 314.148 617.784 314.77 617.074 316.014C616.364 317.253 616.009 319.006 616.009 321.273C616.009 322.784 616.168 324.068 616.486 325.125C616.804 326.182 617.261 326.986 617.858 327.537C618.46 328.088 619.185 328.364 620.031 328.364ZM629.338 330V328.466L635.099 322.159C635.776 321.42 636.332 320.778 636.77 320.233C637.207 319.682 637.531 319.165 637.741 318.682C637.957 318.193 638.065 317.682 638.065 317.148C638.065 316.534 637.918 316.003 637.622 315.554C637.332 315.105 636.935 314.759 636.429 314.514C635.923 314.27 635.355 314.148 634.724 314.148C634.054 314.148 633.469 314.287 632.969 314.565C632.474 314.838 632.091 315.222 631.818 315.716C631.551 316.21 631.418 316.79 631.418 317.455H629.406C629.406 316.432 629.642 315.534 630.114 314.761C630.585 313.989 631.227 313.386 632.04 312.955C632.858 312.523 633.776 312.307 634.793 312.307C635.815 312.307 636.722 312.523 637.511 312.955C638.301 313.386 638.92 313.969 639.369 314.702C639.818 315.435 640.043 316.25 640.043 317.148C640.043 317.79 639.926 318.418 639.693 319.031C639.466 319.639 639.068 320.318 638.5 321.068C637.938 321.812 637.156 322.722 636.156 323.795L632.236 327.989V328.125H640.349V330H629.338ZM649.767 330.239C648.642 330.239 647.639 330.045 646.759 329.659C645.884 329.273 645.188 328.736 644.67 328.048C644.159 327.355 643.881 326.551 643.835 325.636H645.983C646.028 326.199 646.222 326.685 646.562 327.094C646.903 327.497 647.349 327.81 647.901 328.031C648.452 328.253 649.063 328.364 649.733 328.364C650.483 328.364 651.148 328.233 651.727 327.972C652.307 327.71 652.761 327.347 653.091 326.881C653.42 326.415 653.585 325.875 653.585 325.261C653.585 324.619 653.426 324.054 653.108 323.565C652.79 323.071 652.324 322.685 651.71 322.406C651.097 322.128 650.347 321.989 649.46 321.989H648.062V320.114H649.46C650.153 320.114 650.761 319.989 651.284 319.739C651.813 319.489 652.224 319.136 652.52 318.682C652.821 318.227 652.972 317.693 652.972 317.08C652.972 316.489 652.841 315.974 652.58 315.537C652.318 315.099 651.949 314.759 651.472 314.514C651 314.27 650.443 314.148 649.801 314.148C649.199 314.148 648.631 314.259 648.097 314.48C647.568 314.696 647.136 315.011 646.801 315.426C646.466 315.835 646.284 316.33 646.256 316.909H644.21C644.244 315.994 644.52 315.193 645.037 314.506C645.554 313.812 646.23 313.273 647.065 312.886C647.906 312.5 648.83 312.307 649.835 312.307C650.915 312.307 651.841 312.526 652.614 312.963C653.386 313.395 653.98 313.966 654.395 314.676C654.81 315.386 655.017 316.153 655.017 316.977C655.017 317.96 654.759 318.798 654.241 319.491C653.73 320.185 653.034 320.665 652.153 320.932V321.068C653.256 321.25 654.116 321.719 654.736 322.474C655.355 323.224 655.665 324.153 655.665 325.261C655.665 326.21 655.406 327.062 654.889 327.818C654.378 328.568 653.679 329.159 652.793 329.591C651.906 330.023 650.898 330.239 649.767 330.239Z"
          fill="white"
        />
        <line
          className="line line03"
          y1="114"
          x2="113"
          y2="114"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="text text03"
          d="M1.80682 97V95.4659L7.56818 89.1591C8.24432 88.4205 8.80114 87.7784 9.23864 87.233C9.67614 86.6818 10 86.1648 10.2102 85.6818C10.4261 85.1932 10.5341 84.6818 10.5341 84.1477C10.5341 83.5341 10.3864 83.0028 10.0909 82.554C9.80114 82.1051 9.40341 81.7585 8.89773 81.5142C8.39205 81.2699 7.82386 81.1477 7.19318 81.1477C6.52273 81.1477 5.9375 81.2869 5.4375 81.5653C4.94318 81.8381 4.55966 82.2216 4.28693 82.7159C4.01989 83.2102 3.88636 83.7898 3.88636 84.4545H1.875C1.875 83.4318 2.1108 82.5341 2.58239 81.7614C3.05398 80.9886 3.69602 80.3864 4.50852 79.9545C5.3267 79.5227 6.24432 79.3068 7.26136 79.3068C8.28409 79.3068 9.19034 79.5227 9.98011 79.9545C10.7699 80.3864 11.3892 80.9687 11.8381 81.7017C12.2869 82.4347 12.5114 83.25 12.5114 84.1477C12.5114 84.7898 12.3949 85.4176 12.1619 86.0312C11.9347 86.6392 11.5369 87.3182 10.9688 88.0682C10.4062 88.8125 9.625 89.7216 8.625 90.7955L4.70455 94.9886V95.125H12.8182V97H1.80682ZM22.0312 97.2386C20.7472 97.2386 19.6534 96.8892 18.75 96.1903C17.8466 95.4858 17.1563 94.4659 16.679 93.1307C16.2017 91.7898 15.9631 90.1705 15.9631 88.2727C15.9631 86.3864 16.2017 84.7756 16.679 83.4403C17.1619 82.0994 17.8551 81.0767 18.7585 80.3722C19.6676 79.6619 20.7585 79.3068 22.0312 79.3068C23.304 79.3068 24.392 79.6619 25.2955 80.3722C26.2045 81.0767 26.8977 82.0994 27.375 83.4403C27.858 84.7756 28.0994 86.3864 28.0994 88.2727C28.0994 90.1705 27.8608 91.7898 27.3835 93.1307C26.9062 94.4659 26.2159 95.4858 25.3125 96.1903C24.4091 96.8892 23.3153 97.2386 22.0312 97.2386ZM22.0312 95.3636C23.304 95.3636 24.2926 94.75 24.9972 93.5227C25.7017 92.2955 26.054 90.5455 26.054 88.2727C26.054 86.7614 25.892 85.4744 25.5682 84.4119C25.25 83.3494 24.7898 82.5398 24.1875 81.983C23.5909 81.4261 22.8722 81.1477 22.0312 81.1477C20.7699 81.1477 19.7841 81.7699 19.0739 83.0142C18.3636 84.2528 18.0085 86.0057 18.0085 88.2727C18.0085 89.7841 18.1676 91.0682 18.4858 92.125C18.804 93.1818 19.2614 93.9858 19.858 94.5369C20.4602 95.0881 21.1847 95.3636 22.0312 95.3636ZM31.3381 97V95.4659L37.0994 89.1591C37.7756 88.4205 38.3324 87.7784 38.7699 87.233C39.2074 86.6818 39.5313 86.1648 39.7415 85.6818C39.9574 85.1932 40.0653 84.6818 40.0653 84.1477C40.0653 83.5341 39.9176 83.0028 39.6222 82.554C39.3324 82.1051 38.9347 81.7585 38.429 81.5142C37.9233 81.2699 37.3551 81.1477 36.7244 81.1477C36.054 81.1477 35.4688 81.2869 34.9688 81.5653C34.4744 81.8381 34.0909 82.2216 33.8182 82.7159C33.5511 83.2102 33.4176 83.7898 33.4176 84.4545H31.4062C31.4062 83.4318 31.642 82.5341 32.1136 81.7614C32.5852 80.9886 33.2273 80.3864 34.0398 79.9545C34.858 79.5227 35.7756 79.3068 36.7926 79.3068C37.8153 79.3068 38.7216 79.5227 39.5114 79.9545C40.3011 80.3864 40.9205 80.9687 41.3693 81.7017C41.8182 82.4347 42.0426 83.25 42.0426 84.1477C42.0426 84.7898 41.9261 85.4176 41.6932 86.0312C41.4659 86.6392 41.0682 87.3182 40.5 88.0682C39.9375 88.8125 39.1562 89.7216 38.1562 90.7955L34.2358 94.9886V95.125H42.3494V97H31.3381ZM51.767 97.2386C50.642 97.2386 49.6392 97.0455 48.7585 96.6591C47.8835 96.2727 47.1875 95.7358 46.6705 95.0483C46.1591 94.3551 45.8807 93.5511 45.8352 92.6364H47.983C48.0284 93.1989 48.2216 93.6847 48.5625 94.0938C48.9034 94.4972 49.3494 94.8097 49.9006 95.0312C50.4517 95.2528 51.0625 95.3636 51.733 95.3636C52.483 95.3636 53.1477 95.233 53.7273 94.9716C54.3068 94.7102 54.7614 94.3466 55.0909 93.8807C55.4205 93.4148 55.5852 92.875 55.5852 92.2614C55.5852 91.6193 55.4261 91.054 55.108 90.5653C54.7898 90.071 54.3239 89.6847 53.7102 89.4062C53.0966 89.1278 52.3466 88.9886 51.4602 88.9886H50.0625V87.1136H51.4602C52.1534 87.1136 52.7614 86.9886 53.2841 86.7386C53.8125 86.4886 54.2244 86.1364 54.5199 85.6818C54.821 85.2273 54.9716 84.6932 54.9716 84.0795C54.9716 83.4886 54.8409 82.9744 54.5795 82.5369C54.3182 82.0994 53.9489 81.7585 53.4716 81.5142C53 81.2699 52.4432 81.1477 51.8011 81.1477C51.1989 81.1477 50.6307 81.2585 50.0966 81.4801C49.5682 81.696 49.1364 82.0114 48.8011 82.4261C48.4659 82.8352 48.2841 83.3295 48.2557 83.9091H46.2102C46.2443 82.9943 46.5199 82.1932 47.0369 81.5057C47.554 80.8125 48.2301 80.2727 49.0653 79.8864C49.9063 79.5 50.8295 79.3068 51.8352 79.3068C52.9148 79.3068 53.8409 79.5256 54.6136 79.9631C55.3864 80.3949 55.9801 80.9659 56.3949 81.6761C56.8097 82.3864 57.017 83.1534 57.017 83.9773C57.017 84.9602 56.7585 85.7983 56.2415 86.4915C55.7301 87.1847 55.0341 87.6648 54.1534 87.9318V88.0682C55.2557 88.25 56.1165 88.7187 56.7358 89.4744C57.3551 90.2244 57.6648 91.1534 57.6648 92.2614C57.6648 93.2102 57.4063 94.0625 56.8892 94.8182C56.3778 95.5682 55.679 96.1591 54.7926 96.5909C53.9063 97.0227 52.8977 97.2386 51.767 97.2386Z"
          fill="white"
        />
        <path
          className="text text02"
          d="M1.80682 512V510.466L7.56818 504.159C8.24432 503.42 8.80114 502.778 9.23864 502.233C9.67614 501.682 10 501.165 10.2102 500.682C10.4261 500.193 10.5341 499.682 10.5341 499.148C10.5341 498.534 10.3864 498.003 10.0909 497.554C9.80114 497.105 9.40341 496.759 8.89773 496.514C8.39205 496.27 7.82386 496.148 7.19318 496.148C6.52273 496.148 5.9375 496.287 5.4375 496.565C4.94318 496.838 4.55966 497.222 4.28693 497.716C4.01989 498.21 3.88636 498.79 3.88636 499.455H1.875C1.875 498.432 2.1108 497.534 2.58239 496.761C3.05398 495.989 3.69602 495.386 4.50852 494.955C5.3267 494.523 6.24432 494.307 7.26136 494.307C8.28409 494.307 9.19034 494.523 9.98011 494.955C10.7699 495.386 11.3892 495.969 11.8381 496.702C12.2869 497.435 12.5114 498.25 12.5114 499.148C12.5114 499.79 12.3949 500.418 12.1619 501.031C11.9347 501.639 11.5369 502.318 10.9688 503.068C10.4062 503.812 9.625 504.722 8.625 505.795L4.70455 509.989V510.125H12.8182V512H1.80682ZM22.0312 512.239C20.7472 512.239 19.6534 511.889 18.75 511.19C17.8466 510.486 17.1563 509.466 16.679 508.131C16.2017 506.79 15.9631 505.17 15.9631 503.273C15.9631 501.386 16.2017 499.776 16.679 498.44C17.1619 497.099 17.8551 496.077 18.7585 495.372C19.6676 494.662 20.7585 494.307 22.0312 494.307C23.304 494.307 24.392 494.662 25.2955 495.372C26.2045 496.077 26.8977 497.099 27.375 498.44C27.858 499.776 28.0994 501.386 28.0994 503.273C28.0994 505.17 27.8608 506.79 27.3835 508.131C26.9062 509.466 26.2159 510.486 25.3125 511.19C24.4091 511.889 23.3153 512.239 22.0312 512.239ZM22.0312 510.364C23.304 510.364 24.2926 509.75 24.9972 508.523C25.7017 507.295 26.054 505.545 26.054 503.273C26.054 501.761 25.892 500.474 25.5682 499.412C25.25 498.349 24.7898 497.54 24.1875 496.983C23.5909 496.426 22.8722 496.148 22.0312 496.148C20.7699 496.148 19.7841 496.77 19.0739 498.014C18.3636 499.253 18.0085 501.006 18.0085 503.273C18.0085 504.784 18.1676 506.068 18.4858 507.125C18.804 508.182 19.2614 508.986 19.858 509.537C20.4602 510.088 21.1847 510.364 22.0312 510.364ZM31.3381 512V510.466L37.0994 504.159C37.7756 503.42 38.3324 502.778 38.7699 502.233C39.2074 501.682 39.5313 501.165 39.7415 500.682C39.9574 500.193 40.0653 499.682 40.0653 499.148C40.0653 498.534 39.9176 498.003 39.6222 497.554C39.3324 497.105 38.9347 496.759 38.429 496.514C37.9233 496.27 37.3551 496.148 36.7244 496.148C36.054 496.148 35.4688 496.287 34.9688 496.565C34.4744 496.838 34.0909 497.222 33.8182 497.716C33.5511 498.21 33.4176 498.79 33.4176 499.455H31.4062C31.4062 498.432 31.642 497.534 32.1136 496.761C32.5852 495.989 33.2273 495.386 34.0398 494.955C34.858 494.523 35.7756 494.307 36.7926 494.307C37.8153 494.307 38.7216 494.523 39.5114 494.955C40.3011 495.386 40.9205 495.969 41.3693 496.702C41.8182 497.435 42.0426 498.25 42.0426 499.148C42.0426 499.79 41.9261 500.418 41.6932 501.031C41.4659 501.639 41.0682 502.318 40.5 503.068C39.9375 503.812 39.1562 504.722 38.1562 505.795L34.2358 509.989V510.125H42.3494V512H31.3381ZM52.0057 494.545V512H49.892V496.761H49.7898L45.5284 499.591V497.443L49.892 494.545H52.0057Z"
          fill="white"
        />
      </svg>

      <div className="contenedor">

        <div className="card1 bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-200 shadow shadow-2xl shadow-zinc-700">
          <div className="flex flex-col gap-2 px-5 py-3 ">
            <h2 className="border-b-2 pb-0.5 text-lg">
              Desarrollo de Aplicaciones Multiplataforma (DAM)
            </h2>
            <div className="flex justify-start">
              <BsBuildings size={32} />
              <h4 className="pl-2 self-center">IES Azarquiel</h4>
            </div>

            <div className="flex justify-start">
              <TiLocation size={32} />
              <h4 className="pl-2 self-center">
                Toledo, Castilla-La-Mancha, Spain
              </h4>
            </div>
            <div className="flex justify-start">
              <BsFillBookmarkStarFill size={32} />
              <h6 className="pl-2 self-center">Titulacion: 8</h6>
            </div>
          </div>
        </div>

        <div className="card2 bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-200 shadow shadow-2xl shadow-zinc-700">
          <div className="flex flex-col gap-2 px-5 py-3 ">
            <h2 className="border-b-2 pb-0.5 text-lg">
              Bachillerato Cientifico
            </h2>
            <div className="flex justify-start">
              <BsBuildings size={32} />
              <h4 className="pl-2 self-center">IES Juanelo Turriano</h4>
            </div>

            <div className="flex justify-start">
              <TiLocation size={32} />
              <h4 className="pl-2 self-center">
                Toledo, Castilla-La-Mancha, Spain
              </h4>
            </div>
            <div className="flex justify-start">
              <BsFillBookmarkStarFill size={32} />
              <h6 className="pl-2 self-center">Titulacion: 8</h6>
            </div>
          </div>
        </div>

        <div className="card3 bg-gradient-to-tr from-slate-50 via-gray-300 to-zinc-200 shadow shadow-2xl shadow-zinc-700">
          <div className="flex flex-col gap-2 px-5 py-3 ">
            <h2 className="border-b-2 pb-0.5 text-lg">
              Data Analyst Jr.
            </h2>
            <div className="flex justify-start">
              <BsBuildings className="place-self-center" size={32} />
              <a href="https://www.icsred.com" className="pl-2 self-center underline" rel="noreferrer" target="_blank" >ICSRed</a>
            </div>

            <div className="flex justify-start">
              <TiLocation className="place-self-center" size={32} />
              <h4 className="pl-2 self-center">
                Toledo, Castilla-La-Mancha, Spain
              </h4>
            </div>
            <div className="flex justify-start">
              <BsFillBookmarkStarFill className="place-self-center" size={32} />
              <h6 className="pl-2 self-center w-full">Python, Numpy, Pandas, Plotly, Excel, Git, Azure Devops, Scrum, etc. </h6>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};

export default AnimationComponent;
