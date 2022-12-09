import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import { FacebookFilled, GoogleOutlined, CloseOutlined } from '@ant-design/icons';

import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function LogIn() {
    return (
        <div className={cx('auth-form')}>
            <Link to="/" className={cx('btn-close')}>
                <CloseOutlined style={{ fontSize: '25px' }} />
            </Link>
            <div className={cx('header')}>
                <h2>Đăng nhập</h2>
            </div>
            <div className={cx('content')}>
                <input type={'text'} className={cx('account')} placeholder="Nhập tài khoản"></input> <br />
                <input type={'password'} className={cx('account')} placeholder="Nhập mật khẩu"></input>
                <br />
                <div className={cx('acctions')}>
                    <div className={cx('check-password')}>
                        <input type={'checkbox'} id="check" className={cx('remember')}></input>
                        <label for="check">Remember</label>
                    </div>
                    <Link to={'#'} className={cx('miss-password')}>
                        Quên mật khẩu?
                    </Link>
                </div>
                <Button primary large>
                    Đăng nhập
                </Button>
                <br />
                <Link className={cx('register')} to={'/register'}>
                    Đăng ký
                </Link>
            </div>
            <div className={cx('footer')}>
                <span>Đăng nhập bằng</span>
                <a href="/login" className={cx('icon')}>
                    <GoogleOutlined style={{ fontSize: '2rem' }} />
                </a>
                <a href="/login" className={cx('icon')}>
                    <FacebookFilled style={{ fontSize: '2rem' }} />
                </a>
            </div>
        </div>
    );
}

export default LogIn;
