import {
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  DevToIcon,
} from "../components/icons";

export const CV_URL =
  "https://onyx-jay-dc5.notion.site/Chaeah-Park-Front-end-Developer-4194feb829774cdf91c16d5920cc5007";

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
