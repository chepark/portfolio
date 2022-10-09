import {
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  DevToIcon,
} from "../components/icons";

export const CV_URL =
  "https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ab769de45-38c5-3ba5-90fa-970b6d63529f&viewer%21megaVerb=group-discover";

export const socialData = [
  {
    id: "sn1",
    url: "https://www.linkedin.com/in/cheahpark/",
    areaLabel: "LinkedIn",
    iconComponent: <LinkedInIcon />,
    animationDelay: "2500ms",
  },
  {
    id: "sn2",
    url: "https://github.com/chepark",
    areaLabel: "Github",
    iconComponent: <GithubIcon width="35" height="34.14" />,
    animationDelay: "2600ms",
  },
  {
    id: "sn3",
    url: "mailto:parkchaeah331@gmail.com",
    areaLabel: "Email",
    iconComponent: <EmailIcon />,
    animationDelay: "2700ms",
  },
  {
    id: "sn4",
    url: "https://dev.to/birdy",
    areaLabel: "DevTo",
    iconComponent: <DevToIcon />,
    animationDelay: "2800ms",
  },
];
