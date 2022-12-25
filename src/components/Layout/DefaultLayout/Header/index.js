import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, Avata } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Input } from 'antd';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
// import { useEffect, useState } from 'react';
import Products from '~/components/Products';
import Button from '~/components/Button';
import { AuthContext } from '~/Context/AuthProvider';
import { AppContext } from '~/Context/AppProvider';
import { Avatar } from 'antd';

const cx = classNames.bind(styles);
function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // const [searchValue, setSearchValue] = useState('');

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);

    const { user } = React.useContext(AuthContext);
    const { carts } = React.useContext(AppContext);
    const { searchInput, setSearchInput } = useState('');
    if (carts) console.log('carts', Object.keys(carts).length);

    const handleOnChange = (e) => {
        setTimeout(() => {
            setSearchInput(e.target.value);
        }, '1000');
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
                console.log(',,,', data);
            });
    }, [searchInput]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={'/'}>
                    DPH MOBILE
                </Link>

                <Tippy
                    interactive
                    trigger="click"
                    // visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Products</h4>
                                <Products />
                                <Products />
                                <Products />
                                <Products />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <Input
                            // value={searchValue}
                            placeholder="Tìm kiếm "
                            spellCheck={false}
                            // onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                </Tippy>
                <div className={cx('product-cart')}>
                    <Link to="/cart">
                        <Button>
                            {/* <ShoppingCartOutlined className={cx('cart')} /> */}
                            <ShoppingCartOutlined className={cx('cart')} />
                            {/* <Icon icon="ant-design:shopping-cart-outlined" className={cx('cart')}/> */}
                            {carts && <div className={cx('quantity')}>{Object.keys(carts).length}</div>}
                        </Button>
                    </Link>
                </div>
                {user ? (
                    <div className={cx('current-user')}>
                        <Link to="/userinfo">
                            {/* <UserOutlined
                                    style={{ fontSize: '25px', position: 'absolute', right: '12px', top: '12px' }}
                                /> */}
                            {/* <p style={{color: 'red'}}>{user?user.customer.name: 'oke'}</p> */}
                            <Avatar
                                size={64}
                                style={{ backgroundColor: '#87d068' }}
                                src={
                                    user.imgUrl
                                        ? user.imgUrl
                                        : 'https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-cute.jpg'
                                }
                            />

                            <p style={{ color: '#fff' }}>{user && user.name}</p>
                        </Link>
                    </div>
                ) : (
                    <div className={cx('account')}>
                        <Link className={cx('login')} to="/login">
                            Đăng nhập{' '}
                        </Link>
                        /
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
