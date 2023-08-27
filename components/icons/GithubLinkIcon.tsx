const GithubLinkIcon = ({ onIcon }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.213"
      height="28.988"
      viewBox="0 0 27.213 28.988"
    >
      <path
        id="github-svgrepo-com_1_"
        data-name="github-svgrepo-com (1)"
        d="M10.974,24.084C4.564,26.008,4.564,20.879,2,20.238m17.949,7.692V22.969a4.321,4.321,0,0,0-1.205-3.346C22.769,19.174,27,17.649,27,10.649a6.974,6.974,0,0,0-1.922-4.807,6.5,6.5,0,0,0-.116-4.834S23.449.559,19.949,2.9a17.154,17.154,0,0,0-8.974,0c-3.5-2.346-5.013-1.9-5.013-1.9a6.5,6.5,0,0,0-.115,4.833,6.974,6.974,0,0,0-1.923,4.846c0,6.949,4.231,8.474,8.256,8.974a4.32,4.32,0,0,0-1.205,3.308v4.962"
        transform="translate(-0.787 0.057)"
        fill="none"
        stroke={`${onIcon ? "#000" : "#fff"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default GithubLinkIcon;
