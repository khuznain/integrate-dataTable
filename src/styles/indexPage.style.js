import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0px;
`;

export const HeaderText = styled.div`
  color: black;
  text-align: center;
`;

export const CardList = styled.div`
  padding: 50px 0px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));

  @media (max-width: 631px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
