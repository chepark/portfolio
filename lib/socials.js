import {
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  DevToIcon,
} from "../components/icons";

export const socialData = [
  {
    id: "sn1",
    url: "https://www.linkedin.com/in/cheahpark/",
    iconComponent: <LinkedInIcon />,
    animationDelay: "2500ms",
  },
  {
    id: "sn2",
    url: "https://github.com/chepark",
    iconComponent: <GithubIcon width="35" height="34.14" />,
    animationDelay: "2600ms",
  },
  {
    id: "sn3",
    url: "mailto:parkchaeah331@gmail.com",
    iconComponent: <EmailIcon />,
    animationDelay: "2700ms",
  },
  {
    id: "sn4",
    url: "https://dev.to/birdy",
    iconComponent: <DevToIcon />,
    animationDelay: "2800ms",
  },
];
