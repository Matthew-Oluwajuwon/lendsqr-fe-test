import { Button, Col, Form, Input, Row } from "antd";
import "./Login.scss";
import { formConfig } from "../../utils/helper";

export const Login: React.FC = () => {
  document.title = "Lendsqr | Empowering the smartest lenders";

  return (
    <Form {...formConfig} className="antd-form">
      <div className="antd-form__header">
        <h1 className="antd-form__header__title">Welcome!</h1>
        <p className="antd-form__header__subtitle">Enter details to login.</p>
      </div>
      <Row className="antd-form__row">
        <Col xs={24} sm={24} md={20} lg={20}>
          <Form.Item>
            <Input placeholder="Email" className="antd-form__row__input" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={20} lg={20}>
          <Form.Item>
            <Input.Password
              placeholder="Password"
              className="antd-form__row__input"
              iconRender={(visible) =>
                visible ? (
                  <button
                    type="button"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      letterSpacing: 2,
                      color: "#39CDCC",
                      cursor: "pointer",
                    }}
                  >
                    HIDE
                  </button>
                ) : (
                  <button
                    type="button"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      letterSpacing: 2,
                      color: "#39CDCC",
                      cursor: "pointer",
                    }}
                  >
                    SHOW
                  </button>
                )
              }
            />
          </Form.Item>
        </Col>
          <Col>
            <button type="button" className="antd-form__row__btn">
              FORGOT PASSWORD?
            </button>
          </Col>
          <Col xs={24} sm={24} md={20} lg={20}>
            <Button type="primary" className="antd-form__row__submit" block>LOG IN</Button>
          </Col>
      </Row>
    </Form>
  );
};
