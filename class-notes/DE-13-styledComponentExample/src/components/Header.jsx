import React from "react";
import ButtonSSS, { DetayButton } from "./styles/ButonSSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";


const Header = () => {
  return (
    <div>
      <div>
        <LogoSSS src="./images/logo.png" alt="" />

        <div>
          <ButtonSSS fatih="#A62440">Apply courses</ButtonSSS>
          <ButtonSSS halit>Talk to Adviser</ButtonSSS>
        </div>
      </div>

      <div>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButtonSSS halit>Start Your New Career</ButtonSSS>
          <DetayButton>Details</DetayButton>
        </div>
        <ImageSSS src="./images/hero.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;


