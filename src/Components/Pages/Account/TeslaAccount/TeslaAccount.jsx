import "./TeslaAccount.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../userSlice";
import card__image__1 from "../../../Assets/Images/card__image__1.jpg";
import card__image__2 from "../../../Assets/Images/card__image__2.jpg";
import card__image__3 from "../../../Assets/Images/card__image__3.jpg";
import CardPrimary from "../../../Assets/Layouts/Card/CardPrimary/CardPrimary";
import MenuTertiary from "../../../Assets/Layouts/Menu/MenuTertiary/MenuTertiary";
import CardSecondary from "../../../Assets/Layouts/Card/CardSecondary/CardSecondary";
import MenuSecondary from "../../../Assets/Layouts/Menu/MenuSecondary/MenuSecondary";
import HeaderSecondary from "../../../Assets/Layouts/Headers/HeaderSecondary/HeaderSecondary";

function TeslaAccount() {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);
  const user = useSelector(selectUser);

  return (
    <div id="my__tesla__account">
      <HeaderSecondary />
      <div className="account__block">
        <MenuSecondary
          isDropMenuOpen={isDropMenuOpen}
          setIsDropMenuOpen={setIsDropMenuOpen}
        />
        {isDropMenuOpen && <MenuTertiary />}
        <div className="grid__block" id="my__tesla__account">
          <h6>Welcome! {user?.displayName}</h6>

          {!isDropMenuOpen && (
            <div className="grid">
              <CardPrimary
                image={card__image__1}
                title="Order Tesla Solar"
                description="Produce energy to power your Tesla life"
                link="View Solar"
              />
              <CardPrimary
                image={card__image__2}
                title="Reserve a Car"
                description="Browse our models"
                link="Shop Now"
              />
              <CardSecondary
                image={card__image__3}
                title="Purchased a car from a third party?"
                link="Add"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeslaAccount;
