import React from "react";
import styles from "../../styles/Sidebar.module.css";

const SocialLink = ({ url, icon, animationDelay, areaLabel }) => {
  return (
    <div className={styles.socialAnimation} style={{ animationDelay }}>
      <a
        href={url}
        target="_blank"
        className="hover:opacity-50"
        aria-label={areaLabel}
      >
        {icon}
      </a>
    </div>
  );
};

export default SocialLink;
