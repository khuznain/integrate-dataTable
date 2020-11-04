import styled from "styled-components";

export const ModalHeader = styled.h2`
  color: #444a51;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 400px;
  color: #444a51;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  width: 135px;
  height: 48px;
  padding-left: 16px;
  background: #ffffff;
`;

export const InputDate = styled.input`
  width: 250px;
  height: 38px;
  padding-left: 16px;
  background: #ffffff;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #dfe2e4;
  margin-top: 30px;
  padding-top: 10px;
  display: flex;

  .button {
    margin-left: 5px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    background: #106bef;
    color: #fff;
    padding: 12px 15px;
    cursor: pointer;

    &.button-simple {
      margin-left: 0;
      color: #106bef;
      background: #fff;
    }
  }
`;

export const ModalContainer = styled.div`
  .rodal {
    .rodal-dialog {
      @media (max-width: 400px) {
        width: 300px !important;
      }
    }
  }
`;
