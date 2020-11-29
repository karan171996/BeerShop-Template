import styled from "styled-components";

export default styled.div`
  padding: 20px;
  .ant-pagination,
  .card-column {
    display: flex;
    justify-content: center;
  }
  .pagination-style {
    padding-top: 20px;
  }
  .main-heading {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }
  @media (min-width: 320px) {
    .card-column {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
