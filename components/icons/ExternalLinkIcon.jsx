const ExternalLinkIcon = ({ onIcon }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      <g id="launch-link-open-svgrepo-com" transform="translate(-2 -1)">
        <path
          id="Path_205"
          data-name="Path 205"
          d="M17,2h5V7"
          transform="translate(4)"
          fill="none"
          stroke={`${onIcon ? "#000" : "#fff"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_206"
          data-name="Path 206"
          d="M25,15.222v7.333A2.444,2.444,0,0,1,22.556,25H5.444A2.444,2.444,0,0,1,3,22.556V5.444A2.444,2.444,0,0,1,5.444,3h7.333"
          transform="translate(0 0)"
          fill="none"
          stroke={`${onIcon ? "#000" : "#fff"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_207"
          data-name="Path 207"
          d="M13,11l8.5-8.5"
          transform="translate(4 0)"
          fill="none"
          stroke={`${onIcon ? "#000" : "#fff"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default ExternalLinkIcon;
