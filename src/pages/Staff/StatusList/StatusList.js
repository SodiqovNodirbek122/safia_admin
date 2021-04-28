import React from "react";
import { Row, Col } from "antd";
import "./style.css";

export default function StatusList() {
  return (
    <div className="status-list">
      <Row>
        <Col span={4}>
          <div className="status">
            <h3>Откритые</h3>
            <h1>2988</h1>
          </div>
        </Col>
        <Col span={4}>
          <div className="status">
            <h3>Новые</h3>
            <h1>1905</h1>
          </div>
        </Col>
        <Col span={4}>
          <div className="status">
            <h3>Приглашенные</h3>
            <h5>25%</h5>
            <h1>476</h1>
          </div>
        </Col>
        <Col span={4}>
          <div className="status">
            <h3>Собесоданные</h3>
            <h5>25%</h5>
            <h1>119</h1>
          </div>
        </Col>
        <Col span={4}>
          <div className="status open">
            <h3>Интевью</h3>
            <h5>25%</h5>
            <h1>56</h1>
          </div>
        </Col>
        <Col span={4}>
          <div className="status open">
            <h3>Стажировка</h3>
            <h5>25%</h5>
            <h1>70</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
