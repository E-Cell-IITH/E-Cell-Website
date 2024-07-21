import React from 'react'

const Location1 = () => {
    return (
      <svg
        className="w-6 absolute top-[510px] left-[225px]"// Example Tailwind CSS classes for width and height
        viewBox="0 0 56 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_11_1967)">
          <path
            d="M28 53.5714C28 53.5714 12 33.2246 12 24.6C12 22.5514 12.4139 20.5228 13.2179 18.6301C14.022 16.7375 15.2006 15.0177 16.6863 13.5691C18.172 12.1205 19.9359 10.9715 21.8771 10.1875C23.8183 9.40351 25.8989 9 28 9C30.1012 9 32.1817 9.40351 34.1229 10.1875C36.0641 10.9715 37.828 12.1205 39.3137 13.5691C40.7994 15.0177 41.978 16.7375 42.7821 18.6301C43.5862 20.5228 44 22.5514 44 24.6C44 33.2246 28 53.5714 28 53.5714ZM28 29.0571C29.2124 29.0571 30.3752 28.5876 31.2325 27.7517C32.0898 26.9158 32.5714 25.7821 32.5714 24.6C32.5714 23.4179 32.0898 22.2842 31.2325 21.4483C30.3752 20.6124 29.2124 20.1429 28 20.1429C26.7876 20.1429 25.6248 20.6124 24.7675 21.4483C23.9102 22.2842 23.4286 23.4179 23.4286 24.6C23.4286 25.7821 23.9102 26.9158 24.7675 27.7517C25.6248 28.5876 26.7876 29.0571 28 29.0571Z"
            className="fill-white" // Example Tailwind CSS class for fill color
          />
        </g>
        <defs>
          <filter
            id="filter0_d_11_1967"
            x="0.8"
            y="0.8"
            width="54.4"
            height="66.9713"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="5.6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.78 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11_1967"
            />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1967" result="shape" />
          </filter>
        </defs>
      </svg>
    );
  };
  
  export default Location1;
  