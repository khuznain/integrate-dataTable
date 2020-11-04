import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { base } from "../const/dataTable";
import { Container, HeaderText, CardList } from "../styles/indexPage.style";

const IndexPage = () => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalType, setModalType] = useState("");
  const [updateRecordId, setUpdateRecordId] = useState("");
  const [ingredientsInventories, setIngredientsInventories] = useState([]);

  useEffect(() => {
    setLoader(true);
    base("Ingredients Inventory")
      .select({
        view: "Main View",
      })
      .eachPage((records, fetchNextPage) => {
        console.log(records[0]);
        setIngredientsInventories(records);
        fetchNextPage();
        setLoader(false);
      });
  }, []);

  const updateList = (value) => {
    console.log(value);

    let updateIngredient = ingredientsInventories.map((ingredient) => {
      if (updateRecordId === ingredient.id) {
        return {
          ...ingredient,
          ...(ingredient.fields["Current Inventory"] = value),
        };
      }

      return ingredient;
    });

    setIngredientsInventories(updateIngredient);
  };

  return (
    <Container>
      <HeaderText>BRAND & IRON</HeaderText>
      <CardList>
        {loader
          ? Array(12)
              .fill(0)
              .map((_, index) => <Loader />)
          : ingredientsInventories.map((ingredients) => (
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
        updateList={updateList}
        setModal={() => setModal(false)}
      />
    </Container>
  );
};

export default IndexPage;
