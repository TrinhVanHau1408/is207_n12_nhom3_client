import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Poppers';
// import { useEffect, useState } from 'react';
import Products from '~/components/Products';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    // const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 2000);
    // });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={'/'}>
                    DPH MOBILE
                </Link>

                <Tippy
                    interactive
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
                        <input placeholder="Tìm kiếm " spellCheck={false}></input>
                    </div>
                </Tippy>
                <div className={cx('product-cart')}>
                    <Button>
                        <ShoppingCartOutlined className={cx('cart')} />
                        <div className={cx('quantity')}>1</div>
                    </Button>
                </div>
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
            </div>
        </header>
    );
}

export default Header;
