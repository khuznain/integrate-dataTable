import styled from "styled-components";

export const CardStyle = styled.div`
  height: 256px;
  border: 1px solid #bfc4ca;
  border-radius: 4px;
  padding: 12px 16px;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #7b8591;
    font-weight: 400;
    font-size: 12px;
  }

  .amount {
    background: #e5e5e5;
    border-radius: 4px;
    padding: 2px;
    color: #106bef;
    font-weight: 700;
    font-size: 11px;
    padding: 4px;
    border-radius: 4px;

    &.yellow {
      background: #f2c94c;
    }

    &.red {
      background: #f5554b;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  padding-bottom: 15px;

  .product-name {
    font-weight: 700;
    font-size: 20px;
    color: #444a51;
  }

  .number {
    font-weight: 400;
    font-size: 16px;
    color: #848484;
  }

  .candles {
    font-weight: 400;
    font-size: 10px;
    color: #5f6871;
  }
`;

export const InStock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 0;

  .stock {
    font-weight: 700;
    color: #444a51;
    font-size: 20px;

    span {
      margin-left: 10px;
      font-weight: 700;
      font-size: 24px;
      color: #5f6871;
    }
  }

  .recorded-on {
    color: #5f6871;
    font-size: 10px;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
`;

export const Buttons = styled.div`
  display: grid;
  gap: 0px 15px;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    padding: 11px 8px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    color: #106bef;
    border: 0;
    outline: none;
    cursor: pointer;

    &.add-btn {
      background: #6fcf97;
    }

    &.sub-btn {
      background: #e5e5e5;
    }

    &.reorder-btn {
      background: #f2c94c;
    }
  }
`;
