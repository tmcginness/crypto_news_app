import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd';

const {Title} = Typography;


const LineChart = (coinHistory, currentPrice, coinName) => { 
    return (
        <>
        {coinName}
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $</Title>
        </Col>
      </Row>
    </>
    )
}

export default LineChart