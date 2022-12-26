import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import 'antd/dist/antd.min.css';
import { Col, Row, Input, Typography, Button, Image, Divider } from 'antd';
// import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import Styled from 'styled-components';

import styles from './UserInfo.module.scss';
import formatVND from '~/utilis';

const cx = classNames.bind(styles);

const RowPr = Styled(Row)`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    margin:10px 20px;
    text-align: center;
    // background-color: var(--background);

   

`;
const ButtonTagStyled = Styled.div`
    Button {
        border: none;
        color: #5b4fa8;
        background: var(--background) ;
    }

    Button:hover {
        border: none;
        color: #5b4fa8;
        background: var(--background) ;
    }

    Button:after {
        border: none;
        color: #5b4fa8;
        background: var(--background) ;
    }
`
   
const ButtonSaveStyled = Styled(Button)`
    background: #5b4fa8;
    color: #fff;
   
`;


function UserInfo() {
    const [savedLocalUser, setSavedLocalUser, clearLocalStorageUser] = useLocalStorage('user');
    const [user, setUser, setIsLogout] = useState(savedLocalUser());
    const [product, setProduct] = useState([]);
    const [productTemp, setProductTemp] = useState([]);
    const [status, setStatus] = useState([]);
    const [selectedStatusId, setSelectedStatusId] = useState(0);
    const [onclicked, setOncliked] = useState(0);
    function getNameStatus(status, id) {
      
        let st = [];
        st = status.filter(st => {
            if (st.id == id) return st;
        })
        console.log('st',st)
        if (st[0]!= null || st[0]!= undefined) {
           
            const {name} = st[0];
            return name;
            console.log(st)
        }
       
        return;
    }
    useEffect(() => {
        fetch('/api/order/' + user.id)
            .then((data) => data.json())
            .then((res) => {
                setProduct(res.data);
                setProductTemp(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [user]);

    useEffect(() => {
        fetch('/api/status')
            .then((data) => data.json())
            .then((res) => {
                if (res!= null || res!=undefined) {
                    setStatus(res.data);
                    console.log(res.data[0]);
                }
              
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(status);

    const handleChangStatus = (e) => {
    console.log(e.currentTarget.dataset.id)
    // setSelectedStatusId(e.currentTarget.dataset.id);
    setProduct(productTemp);
    const selectedId = e.currentTarget.dataset.id;
    setOncliked(selectedId)
    if (selectedId == 0 ) {
        setProduct(productTemp)
    } else {
        const productSelected =productTemp.filter(pro => {
            if (pro.statusId == selectedId) return pro;
        })
    
        setProduct(productSelected);
    }
    

   }

    const handleLogout = () => {
        clearLocalStorageUser();
        window.location.href = '/';
    }

    return (
        <div className={cx('grid')}>
            <form className={cx('form-info')}>
                <div className={cx('form-actions')}>
                    <h3>Thông tin cá nhân</h3>
                    <Button  onClick={handleLogout}> Đăng xuất</Button>
                </div>
                <div className={cx('form-input')}>
                    <Row gutter={24} className={cx('row')}>
                        <Col lg={14}>
                            <label className={cx('user-name')}>
                                Họ và tên:
                                <Input className={cx('name')} type={'text'} value={user && user.name} />
                            </label>
                        </Col>
                        <Col lg={10}>
                            <label>
                                SĐT:
                                <Input type={'tel'} className={'phone-number'} value={user && user.phoneNumber} />
                            </label>
                        </Col>
                    </Row>
                    <Row className={cx('row')} gutter={24}>
                        <Col lg={24}>
                            <label className={cx('user-email')}>
                                Email:
                                <Input className={cx('email')} type={'email'} value={user && user.email} />
                            </label>
                        </Col>
                    </Row>
                    <Row className={cx('row')} gutter={24}>
                        <Col lg={24}>
                            <label className={cx('user-address')}>
                                Địa chỉ:
                                <Input className={cx('address')} type={'text'} value={user && user.address} />
                            </label>
                        </Col>
                    </Row>
                </div>
                <div className={cx('form-submit')}>
                    <Button danger className={cx('edit')}>
                        Chỉnh sửa
                    </Button>
                    <ButtonSaveStyled className={cx('save')}>
                        Lưu
                    </ButtonSaveStyled>
                </div>
            </form>
            <div className={cx('buy-history')}>
                <h3 className={cx('bh-header')}>Lịch sử mua hàng</h3>
                <div className={cx('navbar')}>
                <Row>
                    
                        <Col className={cx('col')} span={4}>  
                        <ButtonTagStyled>
                            <Button type="text" data-id={0} onClick={handleChangStatus} className={cx(`link ${onclicked == 0&& 'oncliked'}`)}>
                                Tất cả
                            </Button>
                            </ButtonTagStyled>
                        </Col>
                       
                   
                    {status!=null&&status.map(st => (
                       
                            <Col className={cx('col')} key={st.id} span={4}> 
                                <Button type="text" data-id={st.id} onClick={handleChangStatus} className={cx(`link ${onclicked == st.id && 'oncliked'}`)}>
                                    {st.name}
                                </Button>
                            </Col>
                       
                    ))}  

                   
                </Row>
               
                </div>
                <ul className={cx('navbar-straight')}>
                <div className={cx('straight')}>
                    <Row className={cx('line')}>
                    <Col className={cx('col')} span={4}><div className={cx(`${onclicked == 0&&'lined'}`)}></div></Col>
                   

                    {status.map(st => (
                        <Col key={st.id} className={cx('col')} span={4}>
                            <div className={cx(`${onclicked == st.id&&'lined'}`)}>
                            </div>
                        </Col>
                     
                    
                    ))}
                    </Row>
                     
                   
                    </div>
                </ul>
            </div>
            <div className={cx('delivering')}>
                <div className={cx('delivering-wrap')}>
                    {product.length>0 ? <div><RowPr>
                        <Col className="title_product_img" span={4}>
                            <Typography.Text>Hình ảnh</Typography.Text>
                        </Col>
                        <Col className="title_product_name" style={{textAlign: 'left'}} span={6}>
                            <Typography.Text>Tên sản phẩm</Typography.Text>
                        </Col>

                        <Col className="title_product_quantity" span={2}>
                            <Typography.Text>Số lượng</Typography.Text>
                        </Col>
                        <Col className="title_product_price" span={3}>
                            <Typography.Text>Đơn giá</Typography.Text>
                        </Col>
                        <Col className="title_product_price" span={5}>
                            <Typography.Text>Tình trạng</Typography.Text>
                        </Col>
                        <Col className="title_product_total" span={4}>
                            <Typography.Text>Thành tiền</Typography.Text>
                        </Col>
                    </RowPr>
                   
                       { product.map((pro) => (
                            <RowPr  key={pro.id}>
                                <Col span={4} >
                                    <Image width={70}
                                        className={cx('img')}
                                        src = {pro.imgUrl}
                                        alt={pro.phoneName}
                                    ></Image>
                                </Col>
                                <Col style={{textAlign: 'left'}} span={6}>
                                    <p className={cx('product-name')}>{pro.phoneName}</p>
                                </Col>
                                <Col span={2}>{pro.quantity}</Col>
                                <Col span={3}>
                                    <div className={cx('product-price')}>{formatVND(parseFloat(pro.priceSale)*0.9)}</div>
                                </Col>
                                <Col span={5}>
                                    <p>{status.length>0&&getNameStatus(status, pro.id)}</p>
                                </Col>
                                <Col span={4}><Typography.Text type='danger'>{formatVND(pro.totalMoney)}</Typography.Text></Col>
                                <Divider />
                            </RowPr>)
                       )}
                    </div>:<Col style={{textAlign: 'center'}} span={24}><Typography.Text type='danger' >Không có sản phẩm nào</Typography.Text></Col>
                    }
                </div>
            </div>

            
        </div>
    );
}

export default UserInfo;
