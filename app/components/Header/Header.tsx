import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.innerContainerDark}>
        <div>
          <div>
            <Link href="">
              <Image
                priority
                className="logo mask"
                src="/images/olsenparklogo.png"
                width={384}
                height={96}
                alt="Olsen Park church of Christ"
                title="Home page of Olsen Park church of Christ."
              />
            </Link>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="separator-bar"></div>
    </>
  );
};

export default Header;
