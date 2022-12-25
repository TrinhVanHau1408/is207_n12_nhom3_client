
import React,{ useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import 'antd/dist/antd.min.css';
import { Col, Row, Input } from 'antd';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '~/hooks/useLocalStorage';
// import { LeftOutlined } from '@ant-design/icons';

import styles from './UserInfo.module.scss';
import formatVND from '~/utilis';


const cx = classNames.bind(styles);

function UserInfo() {
    const [savedLocalUser, setSavedLocalUser, clearLocalStorageUser] = useLocalStorage('user');
    const [user, setUser] = useState(savedLocalUser())
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('/api/order/'+user.id)
       .then(data => data.json())
       .then(res => {
           setProduct(res.data.detail.item)
           console.log(res.data.detail.item)
         })
       .catch(err => console.log(err))
    }, [user])

    console.log(product);
    return (
        <div className={cx('grid')}>
            <form className={cx('form-info')}>
                <div className={cx('form-actions')}>
                    <h3>Thông tin cá nhân</h3>
                    <Button primary> Đăng xuất</Button>
                </div>
                <div className={cx('form-input')}>
                    <Row gutter={24} className={cx('row')}>
                        <Col lg={14}>
                            <label className={cx('user-name')}>
                                Họ và tên:
                                <Input className={cx('name')} type={'text'} value={user&&user.name} />
                            </label>
                        </Col>
                        <Col lg={10}>
                            <label>
                                SĐT:
                                <Input type={'tel'} className={'phone-number'} value={user&&user.phoneNumber} />
                            </label>
                        </Col>
                    </Row>
                    <Row className={cx('row')} gutter={24}>
                        <Col lg={24}>
                            <label className={cx('user-email')}>
                                Email:
                                <Input className={cx('email')} type={'email'} value={user&&user.email} />
                            </label>
                        </Col>
                    </Row>
                    <Row className={cx('row')} gutter={24}>
                        <Col lg={24}>
                            <label className={cx('user-address')}>
                                Địa chỉ:
                                <Input
                                    className={cx('address')}
                                    type={'text'}
                                    value={user&&user.address}
                                />
                            </label>
                        </Col>
                    </Row>
                </div>
                <div className={cx('form-submit')}>
                    <Button className={cx('edit')} edit>
                        Chỉnh sửa
                    </Button>
                    <Button className={cx('save')} primary>
                        Lưu
                    </Button>
                </div>
            </form>
            <div className={cx('buy-history')}>
                <h3 className={cx('bh-header')}>Lịch sử mua hàng</h3>
                <ul className={cx('navbar')}>
                    <li className={cx('option')}>
                        <Link to={'/userinfo'} className={cx('link')}>
                            Tất cả
                        </Link>
                    </li>
                    <li className={cx('option')}>
                        <Link to={'/userinfo'} className={cx('link')}>
                            Chờ lấy hàng
                        </Link>
                    </li>
                    <li className={cx('option')}>
                        <Link to={'/userinfo'} className={cx('link')}>
                            Đang giao
                        </Link>
                    </li>
                    <li className={cx('option')}>
                        <Link to={'/userinfo'} className={cx('link')}>
                            Đã hủy
                        </Link>
                    </li>
                    <li className={cx('option')}>
                        <Link to={'/userinfo'} className={cx('link')}>
                            Trả hàng, hoàn tiền
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={cx('delivering')}>
                
             <div className={cx('delivering-wrap')}>
                
                    {product&&product.map(pro => (
                        <Row key={pro.id}>
                           
                         <div className={cx('item')}>
                         <Col span={14}>
                            <div className={cx('product-info')}>
                                <Col span={12}>
                                    <img
                                        className={cx('img')}
                                        src="data:image/jpeg;base64,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"
                                        alt="iphone"
                                    ></img>
                                </Col>
                                <p className={cx('product-name')}>{pro.phoneName}</p>
                            </div>
                           </Col>
                           <Col span={10}> <div className={cx('product-price')}>{formatVND(pro.priceSale)}</div></Col>
                         </div>
                       
                        </Row>
                    ))}
                   
                </div>
            </div>

            {/* <div className={cx('delivered')}>
                <h3>
                    <span className={cx('date')}>20/10/2022</span>- Đã giao
                </h3>
                <div className={cx('delivering-wrap')}>
                    <div className={cx('item')}>
                        <div className={cx('product-info')}>
                            <img
                                className={cx('img')}
                                src="data:image/jpeg;base64,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"
                                alt="iphone"
                            ></img>
                            <p className={cx('product-name')}>iPhone 12 ProMax 64gb chính hãng</p>
                        </div>
                        <div className={cx('product-price')}>25.000.000</div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('product-info')}>
                            <img
                                className={cx('img')}
                                src="data:image/jpeg;base64,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"
                                alt="iphone"
                            ></img>
                            <p className={cx('product-name')}>iPhone 12 ProMax 64gb chính hãng</p>
                        </div>
                        <div className={cx('product-price')}>25.000.000</div>
                    </div>
                </div>
                <div className={cx('total-money')}>
                    Tổng tiền: <span>50.000.000</span>
                </div>
            </div> */}
        </div>
    );
}

export default UserInfo;
