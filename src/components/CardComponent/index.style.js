import styled from "styled-components";

export default styled.div`
  .style-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ant-card-meta {
    width: 255px;
    height: 177px;
  }
  @media (max-width: 425px) {
    .ant-card-meta {
      width: 255px;
      height: auto;
    }
  }
`;
