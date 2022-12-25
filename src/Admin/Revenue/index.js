import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Dropdown, Pagination, Input, DatePicker } from 'antd';
import styled from 'styled-components';

const Rev = styled.div`
    position: absolute;
    left: 350px;
    top: 40px;
    width: 900px;

    h1 {
        font-size: 22px;
        font-weight: 600;
    }
    p {
        font-size: 14px;
        color: #334d6e;
    }
    .overview {
        border: 1px solid #000;
        border-radius: 5px;
        padding: 30px 50px;
        h2 {
            font-size: 18px;
            font-weight: 500;
        }
        .overviewWrap {
            display: flex;
        }
        .unPayment {
            flex-basis: 30%;
        }
        .paymented {
            flex-basis: 70%;
            .timePayment {
                display: flex;
                justify-content: space-around;
            }
        }
        .total {
            font-size: 20px;
            font-weight: 500;
        }
    }
    .detail {
        border: 1px solid #000;
        margin: 30px 0;
        padding: 30px 40px;
        .prTitle {
            background-color: #eeeeee;
            padding: 10px;
            margin: 8px 0;
            border-radius: 2px;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }
        .productOder {
            background-color: #fff;
            margin: 10px -12px;
            padding: 15px;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
            .customerName {
                margin-bottom: 10px;
                color: #172c4b;
            }
            .item {
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                .itemName {
                    display: flex;
                    /* 
                    align-items: center; */
                }
            }
            p {
                width: 150px;
            }
            img {
                width: 40px;
                margin-left: 10px;
            }
        }
    }
`;
function Revenue() {
    return (
        <Rev>
            <div className="Wrap">
                <div className="overview">
                    <h1 className="title">Tổng quan</h1>
                    <div className="overviewWrap">
                        <div className="unPayment">
                            <h2>Chưa thanh toán</h2>
                            <p className="subTitle">Tổng cộng</p>
                            <span className="total">20.000.000</span>
                            <span> đ</span>
                        </div>
                        <div className="paymented">
                            <h2>Đã thanh toán</h2>
                            <div className="timePayment">
                                <div className="week">
                                    <p> Tuần này</p>
                                    <span className="total">30.000.000</span>
                                    <span> đ</span>
                                </div>
                                <div className="month">
                                    <p> Tuần này</p>
                                    <span className="total">270.000.000</span>
                                    <span> đ</span>
                                </div>
                                <div className="totalPayment">
                                    <p> Tổng cộng</p>
                                    <span className="total">300.000.000</span>
                                    <span> đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail">
                    <Input.Group compact>
                        <DatePicker style={{ width: '50%' }} />
                    </Input.Group>
                    <Row className="prTitle" gutter={24}>
                        <Col lg={6}>Đơn hàng</Col>
                        <Col lg={6}>Ngày thanh toán</Col>
                        <Col lg={6}>Trạng thái</Col>

                        <Col lg={6}>Số tiền</Col>
                    </Row>
                    <div className="productOder">
                        <Row className="item" gutter={24}>
                            <Col className="itemName" lg={6}>
                                <img src="https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_31446/iphone-14-pro-m_main_262_1020.png.webp"></img>
                                <div className="block">
                                    <p>
                                        ID: <span>2040506</span>
                                    </p>
                                    <span>
                                        <p>Người mua</p>Trịnh Văn Hậu
                                    </span>
                                </div>
                            </Col>
                            <Col lg={6}>24/11/2022</Col>
                            <Col lg={6}>Đã thanh toán</Col>
                            <Col lg={6}>40.000.000đ</Col>
                        </Row>
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        total={50}
                        style={{
                            textAlign: 'end',
                        }}
                    />
                </div>
            </div>
        </Rev>
    );
}

export default Revenue;