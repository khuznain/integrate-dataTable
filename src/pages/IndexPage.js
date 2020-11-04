import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Modal from "../components/Modal";
import { base } from "../const/dataTable";
import { Container, HeaderText, CardList } from "../styles/indexPage.style";

const IndexPage = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [updateRecordId, setUpdateRecordId] = useState("");
  const [ingredientsInventories, setIngredientsInventories] = useState([]);

  useEffect(() => {
    base("Ingredients Inventory")
      .select({
        view: "Main View",
      })
      .eachPage((records, fetchNextPage) => {
        console.log(records[0]);
        setIngredientsInventories(records);
        fetchNextPage();
      });
  }, []);

  return (
    <Container>
      <HeaderText>BRAND & IRON</HeaderText>
      <CardList>
        {ingredientsInventories.map((ingredients) => (
          <Card
            key={ingredients.id}
            ingredient={ingredients.fields}
            onAddModal={() => {
              setModal(true);
              setUpdateRecordId(ingredients.id);
              setModalType("add");
            }}
            onSubtractModal={() => {
              setModal(true);
              setUpdateRecordId(ingredients.id);
              setModalType("subtract");
            }}
            onReorderedModal={() => {
              setModal(true);
              setUpdateRecordId(ingredients.id);
              setModalType("reordered");
            }}
          />
        ))}
      </CardList>
      <Modal
        modal={modal}
        modalType={modalType}
        ingredientsInventories={ingredientsInventories}
        updateRecordId={updateRecordId}
        setModal={() => setModal(false)}
      />
    </Container>
  );
};

export default IndexPage;
