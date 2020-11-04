import React, { useState } from "react";
import Rodal from "rodal";
import moment from "moment";
import { base } from "../const/dataTable";
import {
  ModalContainer,
  ModalHeader,
  ModalFooter,
  InputContainer,
  InputLabel,
  Input,
  InputDate,
} from "../styles/modal.style";
import {
  increaseCurrentInventory,
  subtractCurrentInventory,
} from "../utils/utils";

const Modal = ({
  modal,
  setModal,
  modalType,
  updateRecordId,
  ingredientsInventories,
}) => {
  const [currentInventory, setCurrentInventory] = useState("");
  const [lastOrderDate, setLastOrderDate] = useState("");

  const updateInputFields = () => {
    if (currentInventory)
      base("Ingredients Inventory").update(
        [
          {
            id: updateRecordId,
            fields: {
              "Current Inventory":
                modalType === "add"
                  ? increaseCurrentInventory(
                      currentInventory,
                      updateRecordId,
                      ingredientsInventories
                    )
                  : subtractCurrentInventory(
                      currentInventory,
                      updateRecordId,
                      ingredientsInventories
                    ),
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error("this is error", err);
            setModal();
            setCurrentInventory("");
            return;
          }
          setCurrentInventory("");
          setModal();
        }
      );
  };

  const updateReorder = () => {
    if (lastOrderDate)
      base("Ingredients Inventory").update(
        [
          {
            id: updateRecordId,
            fields: {
              "Last Order Placed": moment(lastOrderDate).format("YYYY/MM/DD"),
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error("this is error", err);
            setModal();
            setLastOrderDate("");
            return;
          }
          setLastOrderDate("");
          setModal();
        }
      );
  };

  const onSubmit = () => {
    if (modalType !== "reordered") {
      updateInputFields();
    } else updateReorder();
  };

  return (
    <ModalContainer>
      <Rodal
        visible={modal}
        onClose={setModal}
        customStyles={{ height: "fit-content" }}
      >
        <ModalHeader>Supply Update</ModalHeader>
        <InputContainer>
          {modalType !== "reordered" && (
            <>
              <InputLabel>
                {modalType === "add"
                  ? "Inventory Increase"
                  : "Inventory Decrease"}
              </InputLabel>
              <Input
                type="number"
                value={currentInventory}
                onChange={(e) => setCurrentInventory(e.target.value)}
                placeholder="00.00"
              />
            </>
          )}
          {modalType === "reordered" && (
            <>
              <InputLabel>Enter Date of Order</InputLabel>
              <InputDate
                type="date"
                placeholder="mm/dd/yy"
                onChange={(e) => setLastOrderDate(e.target.value)}
              />
            </>
          )}
        </InputContainer>
        <ModalFooter>
          <button onClick={setModal} className="button button-simple">
            Cancel
          </button>
          <button type="button" className="button" onClick={() => onSubmit()}>
            Submit
          </button>
        </ModalFooter>
      </Rodal>
    </ModalContainer>
  );
};

export default Modal;
