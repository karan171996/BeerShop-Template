import React from "react";
import { Skeleton, Card, Avatar, Row, Col } from "antd";
import { get } from "lodash";
import CardComponentStyleWrapper from "./index.style";
const { Meta } = Card;

class CardComponent extends React.Component {
  render() {
    const { content, loading } = this.props;

    return (
      <Card
        bordered
        style={{ width: 300, marginTop: 16 }}
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <CardComponentStyleWrapper>
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src={get(content, "image", "")} />}
              title={get(content, "name", "")}
              description={
                <React.Fragment>
                  <Row type="flex" justify="center" gutter={20}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <p>
                        <b>Abv</b>
                      </p>
                      <p>{get(content, "abv", "")}</p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <p>
                        <b>Ibu</b>
                      </p>
                      <p>{get(content, "ibu", "")}</p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <p>
                        <b>Ounces(oz)</b>
                      </p>
                      <p>{get(content, "ounces", "")}</p>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <p>
                        <b>Style</b>
                      </p>
                      <p className="style-text">{get(content, "style", "")}</p>
                    </Col>
                  </Row>
                </React.Fragment>
              }
            />
          </Skeleton>
        </CardComponentStyleWrapper>
      </Card>
    );
  }
}

export default CardComponent;
