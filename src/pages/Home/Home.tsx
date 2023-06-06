import React from "react";
import { Footer, ShowButton } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faHouseMedical } from "@fortawesome/free-solid-svg-icons";
import styles from "./FlipCard.module.css";
import { Typography } from "@material-ui/core";

const Home = (): JSX.Element => {
  return (
    <section className={styles.componentContainer}>
      <div className={styles.container}>
        <div className={styles.card} style={{ marginLeft: "5%" }}>
          <div className={styles.front}>
            <FontAwesomeIcon icon={faHouseMedical} beatFade size="4x" />
            <Typography variant="h5">On-Duty Pharmacies</Typography>
          </div>
          <div className={styles.back}>
            <Typography style={{ marginLeft: "5%", marginRight: "5%" }}>
              The "On-Duty Pharmacies" section provides you with information
              about pharmacies that are open 24/7 and ready to meet your needs.
              Click on the button to find pharmacies on call in your area, so
              you can conveniently access the healthcare services you need when
              you need them.
            </Typography>
            <ShowButton to="/duty-pharmacy" />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card} style={{ marginRight: "5%" }}>
          <div className={styles.front}>
            <FontAwesomeIcon icon={faCapsules} beatFade size="4x" />
            <Typography variant="h5">Check Medicine Content</Typography>
          </div>
          <div className={styles.back}>
            <Typography style={{ marginLeft: "5%", marginRight: "5%" }}>
              The "Check Medicine Content" section allows you to access and
              verify information about different medicine contents easily. With
              a simple click, you can explore and gain insights into the
              composition and details of various medicines. This feature enables
              you to make informed decisions about your healthcare by providing
              easy access to comprehensive information about medicine contents
              and their potential effects. Click on the button to check the
              content of medicines.
            </Typography>
            <ShowButton to="/medicine-content" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
