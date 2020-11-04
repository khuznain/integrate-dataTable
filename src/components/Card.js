import React from "react";
import moment from "moment";
import { isValidValue } from "../utils/utils";
import {
  CardStyle,
  DateContainer,
  Product,
  InStock,
  Buttons,
} from "../styles/card.style";

const Card = ({
  ingredient,
  onAddModal,
  onSubtractModal,
  onReorderedModal,
}) => {
  const supplyWarning = isValidValue(ingredient["Supply Warning"]);

  const amountClass = ["amount"];
  if (supplyWarning > 0 && supplyWarning < 100) {
    amountClass.push("yellow");
  } else if (supplyWarning < 0) {
    amountClass.push("red");
  }

  return (
    <CardStyle>
      <DateContainer>
        <p>{moment(ingredient["Last Modified"]).format("MMMM Do YYYY")}</p>
        <div className={amountClass.join(" ")}>{supplyWarning}</div>
      </DateContainer>
      <Product>
        <p className="product-name">{ingredient.Ingredient}</p>
        <p className="number">{isValidValue(ingredient["# of Candles"])}</p>
        <p className="candles">Candles</p>
      </Product>
      <InStock>
        <p className="stock">
          In Stock <span>{isValidValue(ingredient["Current Inventory"])}</span>
        </p>
        <p className="recorded-on">
          Recorded on{" "}
          <span>
            {moment(ingredient["Last Order Placed"]).format(" MMMM Do YYYY")}
          </span>
        </p>
      </InStock>
      <Buttons>
        <button className="add-btn" onClick={onAddModal}>
          Add
        </button>
        <button className="sub-btn" onClick={onSubtractModal}>
          Substract
        </button>
        <button className="reorder-btn" onClick={onReorderedModal}>
          Reordered
        </button>
      </Buttons>
    </CardStyle>
  );
};

export default Card;
