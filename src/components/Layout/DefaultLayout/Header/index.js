import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, Avata } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import Products from '~/components/Products';
import Button from '~/components/Button';
import { AuthContext } from '~/Context/AuthProvider';
import { AppContext } from '~/Context/AppProvider';
import { Avatar } from 'antd';
import { useLocalStorage } from '~/hooks/useLocalStorage';

const cx = classNames.bind(styles);
function Header() {
    const navigate = useNavigate();
    const [savedLocalUser, setSavedLocalUser, clearLocalStorageUser] = useLocalStorage('user');
    const [searchInput, setSearchInput] = useState('')
    const {user, setUser} = React.useContext(AuthContext);
    const {carts} = React.useContext(AppContext);

    useEffect(() => {
        if (user == null || user == undefined) {
            if (savedLocalUser() != null && savedLocalUser() != undefined) {
                setUser(savedLocalUser());
            }
        }

        console.log('.',user)
    }, [])
  
    const handleOnChange = (e) => {
        // setTimeout(() => {
            setSearchInput(e.target.value);
        // }, '1000');
    };
    useEffect(() => {
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
                console.log(data)
            });
    }, [searchInput]);
  

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
