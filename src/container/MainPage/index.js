import React from "react";
import { Row, Col, Pagination } from "antd";
import OuterContainerStyleWrapper from "./index.style";
import CardComponent from "../../components/CardComponent";
import { fetchBeerCraftData, fetchBeerCraftImageData } from "../../callApi";
import { get, size } from "lodash";
import SearchBrandName from "../../components/SrachBarComponent";
import { imageAttachFunction } from "../../utility/index";

class MainPageContainer extends React.PureComponent {
  state = {
    cardImages: [],
    cardData: [],
    originalData: [],
    currentPageNumber: 1,
    totalData: 0,
  };
  shouldComponentUpdate(nextProps, nextState) {
    const { cardImages, cardData } = nextState;
    if (size(cardImages) > 0 && size(cardData) > 0) {
      return true;
    }
    return false;
  }

  async componentDidMount() {
    const cardData = await fetchBeerCraftData();
    const cardImages = await fetchBeerCraftImageData();

    this.setState({
      cardData: imageAttachFunction(
        get(cardData, "json", []),
        get(cardImages, "json", [])
      ),
      originalData: imageAttachFunction(
        get(cardData, "json", []),
        get(cardImages, "json", [])
      ),
      totalData: get(cardData, "json", []).length,
    });
    this.setState({
      cardImages: get(cardImages, "json", []),
    });
  }

  onChangePageHandler = (page) => {
    this.setState({
      currentPageNumber: page,
    });
  };
  filterDataHandler = (val) => {
    if (val) {
      const filteredData = this.state.originalData.filter((item) =>
        item.name.includes(val)
      );
      this.setState({
        cardData: filteredData,
        totalData: filteredData.length,
      });
    } else {
      this.setState({
        cardData: this.state.originalData,
        totalData: this.state.originalData.length,
      });
    }
  };
  render() {
    const { cardData, currentPageNumber, totalData } = this.state;

    const indexOftheLastBearData = currentPageNumber * 20;
    const indexOfthefirstBeardata = indexOftheLastBearData - 20;
    const currentCardData = cardData.slice(
      indexOfthefirstBeardata,
      indexOftheLastBearData
    );
    return (
      <OuterContainerStyleWrapper>
        <Row type="flex" justify="center">
          <Col>
            <p className="main-heading">BeerCraft Shop</p>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <SearchBrandName
              data={cardData}
              filterDataFunction={this.filterDataHandler}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center" align="center">
          {currentCardData.map((item, index) => {
            return (
              <Col className="card-column" xs={24} sm={10} md={10} lg={6}>
                <CardComponent key={index} content={item} loadin={false} />
              </Col>
            );
          })}
        </Row>
        <Row typ="flex" justify="center">
          <Col className="pagination-style" span={24}>
            <Pagination
              current={currentPageNumber}
              onChange={this.onChangePageHandler}
              total={totalData}
              pageSize={20}
            />
          </Col>
        </Row>
      </OuterContainerStyleWrapper>
    );
  }
}
export default MainPageContainer;
