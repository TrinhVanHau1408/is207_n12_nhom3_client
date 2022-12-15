import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Poppers';
// import { useEffect, useState } from 'react';
import Products from '~/components/Products';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // const [searchValue, setSearchValue] = useState('');

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);
    const currentUser = true;
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
                        <input
                            // value={searchValue}
                            placeholder="Tìm kiếm "
                            spellCheck={false}
                            // onChange={(e) => setSearchValue(e.target.value)}
                        ></input>
                    </div>
                </Tippy>
                <div className={cx('product-cart')}>
                    <Link to="/cart">
                        <Button>
                            <ShoppingCartOutlined className={cx('cart')} />
                            <div className={cx('quantity')}>0</div>
                        </Button>
                    </Link>
                </div>
                {currentUser ? (
                    <div className={cx('current-user')}>
                        <Link to="/userinfo">
                            <Button small>
                                <UserOutlined
                                    style={{ fontSize: '25px', position: 'absolute', right: '12px', top: '12px' }}
                                />
                            </Button>
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
