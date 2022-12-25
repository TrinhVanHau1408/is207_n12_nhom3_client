import React from 'react';

import { Input, Col, Row, Dropdown, Pagination } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const onMenuClick = (e) => {
    console.log('click', e);
};

const items = [
    {
        key: '1',
        label: 'Xác nhận',
    },
    {
        key: '2',
        label: 'Sửa',
    },
    {
        key: '3',
        label: 'Xóa',
    },
];
const Return = styled.div`
    position: absolute;
    left: 350px;
    top: 20px;
    width: 900px;

    .productList {
        background-color: #d9d9d9;
        border-radius: 5px;
        padding: 15px 30px;
        .productQuantity {
            font-size: 16px;
            font-weight: 500;
        }
        .prTitle {
            background-color: #fff;
            padding: 15px;
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
const SearchItem = styled(Search)`
    margin: 30px 0;
    button {
        background-color: #1890ff;
    }
`;

function returnRefund() {
    return (
        <Return>
            <div className="wrap">
                <div className="input">
                    <SearchItem
                        placeholder="Nhập mã đơn hàng"
                        allowClear
                        enterButton="Tìm kiếm"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
                <div className="productList">
                    <h4 className="productQuantity">
                        {' '}
                        <span>2</span> Đơn hàng
                    </h4>
                    <Row className="prTitle" gutter={24}>
                        <Col lg={6}>Sản phẩm</Col>
                        <Col lg={6}>Số tiền hoàn</Col>
                        <Col lg={6}>Lý do hoàn tiền</Col>

                        <Col lg={6}>Thao tác</Col>
                    </Row>
                    <div className="productOder">
                        <h4 className="customerName">Khách hàng 01</h4>
                        <Row className="item" gutter={24}>
                            <Col className="itemName" lg={6}>
                                <p>iPhone 14 Promax </p>
                                <img src="https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_31446/iphone-14-pro-m_main_262_1020.png.webp"></img>
                            </Col>
                            <Col className="iitemPrice" lg={6}>
                                40.000.000đ
                            </Col>
                            <Col className="itemStatus" lg={6}>
                                Sản phẩm lỗi
                            </Col>
                            <Col className="itemCustom" lg={6}>
                                <Dropdown.Button
                                    menu={{
                                        items,
                                        onClick: onMenuClick,
                                    }}
                                    style={{
                                        width: 50,
                                        marginLeft: 25,
                                    }}
                                >
                                    Thao tác
                                </Dropdown.Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="productOder">
                        <h4 className="customerName">Khách hàng 01</h4>
                        <Row className="item" gutter={24}>
                            <Col className="itemName" lg={6}>
                                <p>iPhone 14 Promax </p>
                                <img src="https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_31446/iphone-14-pro-m_main_262_1020.png.webp"></img>
                            </Col>
                            <Col className="iitemPrice" lg={6}>
                                40.000.000đ
                            </Col>
                            <Col className="itemStatus" lg={6}>
                                Sản phẩm lỗi
                            </Col>
                            <Col className="itemCustom" lg={6}>
                                <Dropdown.Button
                                    menu={{
                                        items,
                                        onClick: onMenuClick,
                                    }}
                                    style={{
                                        width: 50,
                                        marginLeft: 25,
                                    }}
                                >
                                    Thao tác
                                </Dropdown.Button>
                            </Col>
                        </Row>
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        total={20}
                        style={{
                            textAlign: 'end',
                        }}
                    />
                </div>
            </div>
        </Return>
    );
}

export default returnRefund;