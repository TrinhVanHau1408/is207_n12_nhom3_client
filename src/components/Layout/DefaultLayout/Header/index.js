import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { ShoppingCartOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input, Row, Col, Image, Divider, Typography } from 'antd';

import Styled from 'styled-components';
import Products from '~/components/Products';
import Button from '~/components/Button';
import { AuthContext } from '~/Context/AuthProvider';
import { AppContext } from '~/Context/AppProvider';
import { Avatar } from 'antd';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import formatVND from '~/utilis';

const cx = classNames.bind(styles);

const WarpperSearchStyled = Styled.div`
    background: #fff;
    margin-top: 10px;
    opacity: 2;
    font-size: 14px;
   
    .row:hover {
        color: #2a254b;
        font-size: 16px;
    }
    .col {
        text-align: center;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
   
    .product__img {
        margin-left: 5px;
        width: 100px;
        height: auto;
        padding: 2px 1px;
    }
    .product__price {
        text-align: right;
    }
    .product__price span {
        margin-right: 5px;
    }

    .divider {
        margin-top: 1px;
        margin-bottom: 1px;
    }
   
`
function Header() {
    const navigate = useNavigate();
    const [savedLocalUser, setSavedLocalUser, clearLocalStorageUser] = useLocalStorage('user');
    const [searchInput, setSearchInput] = useState('')
    const {user, setUser} = React.useContext(AuthContext);
    const {carts} = React.useContext(AppContext);
    const [resSearch, setResSearch] = useState();

    useEffect(() => {
        if (user == null || user == undefined) {
            if (savedLocalUser() != null && savedLocalUser() != undefined) {
                setUser(savedLocalUser());
            }
        }

        console.log('.',user)
    }, [])
  
    const handleOnChange = (e) => {
        setTimeout(() => {
            setSearchInput(e.target.value);
        }, 1000);
    };
    useEffect(() => {
        if (searchInput != ''){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    search: searchInput,
                }),
            };
    
            fetch('/api/phone/search', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    if(data.status === 1) {
                        setResSearch(data.data)
                        console.log(data.data)
                    } else {
                        console.log(data.status)
                    }
                });
       }
       else {
        setResSearch([])
       }
    }, [searchInput]);
  
    const handleSelectProduct = (e) => {
        console.log(e.currentTarget.dataset.id)
    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={'/'}>
                    DPH MOBILE
                </Link>
             
                <div className={cx('search')}>
                    <Input
                        // value={searchValue}
                        placeholder="Tìm kiếm "
                        spellCheck={false}
                        // onChange={(e) => setSearchValue(e.target.value)}
                        onChange={handleOnChange}
                    />

                {/* {
                   resSearch.map(phone => {
                        <Row key={phone.id}>
                            <Col>{phone.imgUrl}</Col>
                            <Col>{phone.name}</Col>
                            <Col>{phone.priceSale}</Col>
                        </Row>
                    })
                } */}

                       <WarpperSearchStyled>
                       {(resSearch != null & resSearch != undefined)&&resSearch.map(phone => (
                            <Link key={phone.id} to={'/productdetail/'+ phone.slug} onClick={()=>setSearchInput('')}>
                                <Row  data-id={phone.id} className='row' onClick={handleSelectProduct}>
                                <Col span={5} className='col'><Image preview={false} className='product__img' src={phone.imgUrl}/></Col>
                                <Col span={10} className='col' ><span className='product__name'>{phone.name}</span></Col>
                                <Col span={9} className='col'>
                                    <Col className='product__price' span={24}>
                                        <Typography.Text type='danger'>{formatVND(phone.priceSale)}</Typography.Text>
                                    </Col>
                                </Col>
                                <Divider className='divider' />
                            </Row>
                            </Link>
                           
                       
                         
                        ))}
                       </WarpperSearchStyled>
                </div>

                
               
                <div className={cx('product-cart')}>
                    <Link to="/cart">
                        <Button>
                            {/* <ShoppingCartOutlined className={cx('cart')} /> */}
                            <ShoppingCartOutlined className={cx('cart')} />
                            {/* <Icon icon="ant-design:shopping-cart-outlined" className={cx('cart')}/> */}
                            {(carts!=null && carts != undefined)?<div className={cx('quantity')}>{(carts!=null && carts != undefined)?Object.keys(carts).length:0}</div>:''}
                        </Button>
                    </Link>
                </div>
                {(user!==null && user !== undefined)? (
                    <div className={cx('current-user')}>
                        <Link to="/userinfo">
                            {/* <UserOutlined
                                    style={{ fontSize: '25px', position: 'absolute', right: '12px', top: '12px' }}
                                /> */}
                                {/* <p style={{color: 'red'}}>{user?user.customer.name: 'oke'}</p> */}
                                <Avatar size={64} style={{ backgroundColor: '#87d068' }} src={(user!=null && user != undefined)?user.imgUrl:'https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-cute.jpg'} />
                                
                            <p style={{color: '#fff'}}>{(user!=null && user != undefined) && user.name}</p>
                        </Link>
                    </div>
                ) : (
                    <div className={cx('account')}>
                        <Link className={cx('login')} to="/login">
                            Đăng nhập{' '}
                        </Link>
                        
                        <Link className={cx('register')} to="/register">
                            {' '}
                            Đăng ký
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
