import React from "react";
import "./HeaderBlock.scss";
import Block from "./Block/Block";

function HeaderBlock() {
  return (
    <div className="header__block__container">
      <div className="scroll__snapping">
        <div className="block__1">
          <Block
            name="Model 3"
            text="Order Online For Touchless Delivery"
            btn__1__text="Custom Order"
            btn__2__text="Existing Inventory"
            second___btn
          />
        </div>
        <div className="block__2">
          <Block
            name="Model Y"
            text="Order Online For Touchless Delivery"
            btn__1__text="Custom Order"
            btn__2__text="Existing Inventory"
            second___btn
          />
        </div>
        <div className="block__3">
          <Block
            name="Model S"
            text="Order Online For Touchless Delivery"
            btn__1__text="Custom Order"
            btn__2__text="Existing Inventory"
            second___btn
          />
        </div>
        <div className="block__4">
          <Block
            name="Model X"
            text="Order Online For Touchless Delivery"
            btn__1__text="Custom Order"
            btn__2__text="Existing Inventory"
            second___btn
          />
        </div>
        <div className="block__5">
          <Block
            name="Solar Panels"
            text="Lowest Cost Solar Panels in America"
            btn__1__text="Order Now"
            btn__2__text="Learn More"
            second___btn
          />
        </div>
        <div className="block__6">
          <Block
            name="Solar Roofs"
            text="Produce Clean Energy From Your Roof"
            btn__1__text="Order Now"
            btn__2__text="Learn More"
            second___btn
          />
        </div>
        <div className="block__7">
          <Block name="Accessories" btn__1__text="Shop Now" footer__links/>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlock;
