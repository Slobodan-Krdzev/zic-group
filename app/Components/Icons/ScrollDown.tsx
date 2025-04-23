import React from "react";

const ScrollDown = ({className} : {className: string}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 51 130"
    width="51"
    height="130"
    preserveAspectRatio="xMidYMid meet"
    className={className && className}
    style={{
      width: '100%',
      height: '100%',
      transform: 'translate3d(0px, 0px, 0px)',
      contentVisibility: 'visible'
    }}
  >
    <defs>
      <clipPath id="clip">
        <rect width="51" height="130" x="0" y="0" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip)">
      <g transform="translate(12.971, 24.415)" opacity="1">
        <g opacity="1" transform="translate(12.208, 22.127)">
          <path
            fill="none"
            stroke="rgb(255,255,255)"
            strokeOpacity="1"
            strokeWidth="1.526"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            d="M0,-20.6 C0,-20.6 0,-20.6 0,-20.6 C5.899,-20.6 10.682,-15.817 10.682,-9.918 C10.682,-9.918 10.682,9.92 10.682,9.92 C10.682,15.819 5.899,20.6 0,20.6 C-5.899,20.6 -10.682,15.819 -10.682,9.92 C-10.682,9.92 -10.682,-9.918 -10.682,-9.918 C-10.682,-15.817 -5.899,-20.6 0,-20.6z"
          />
        </g>
      </g>
      <g transform="translate(12.208, 95.036)" opacity="0.0015" style={{ display: 'block' }}>
        <g opacity="1" transform="translate(12.971, 7.248)">
          <path
            fill="none"
            stroke="rgb(255,255,255)"
            strokeOpacity="1"
            strokeWidth="1.526"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            d="M-11.445,-5.722 C-11.445,-5.722 0,5.722 0,5.722 C0,5.722 11.445,-5.722 11.445,-5.722"
          />
        </g>
      </g>
      <g transform="translate(12.208, 112.536)" opacity="0.9985" style={{ display: 'block' }}>
        <g opacity="1" transform="translate(12.971, 7.248)">
          <path
            fill="none"
            stroke="rgb(255,255,255)"
            strokeOpacity="1"
            strokeWidth="1.526"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            d="M-11.445,-5.722 C-11.445,-5.722 0,5.722 0,5.722 C0,5.722 11.445,-5.722 11.445,-5.722"
          />
        </g>
      </g>
    </g>
  </svg>
  );
};

export default ScrollDown;
