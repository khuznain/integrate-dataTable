import React from "react";

import styled from "styled-components";

export const CardStyle = styled.div`
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }

  height: 256px;
  background-image: linear-gradient(
    90deg,
    #efefef 0px,
    #fff 40px,
    #efefef 80px
  );
  background-size: 500px;
  animation: shine 1s infinite linear;
`;

function Loader() {
  return <CardStyle></CardStyle>;
}

export default Loader;
