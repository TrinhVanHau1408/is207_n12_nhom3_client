import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FacebookFilled, GoogleOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Btn = styled(Button)`
    background-color: #2a254b;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    width: 500px;
    height: 50px;

    :hover {
        background-color: #6c678d;
        color: #fff;
    }
`;

function Register() {
    return (
        <form className={cx('auth-form')}>
            <Link to="/" className={cx('btn-close')}>
                <CloseOutlined style={{ fontSize: '25px' }} />
            </Link>
            <div className={cx('header')}>
                <h2>Đăng ký</h2>
            </div>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <input type={'text'} className={cx('account')} placeholder="Nhập tên tài khoản"></input> <br />
                    <input type={'email'} className={cx('account')} placeholder="Nhập email"></input> <br />
                    <input type={'number'} className={cx('account')} placeholder="Nhập SĐT"></input> <br />
                    <input type={'password'} className={cx('account')} placeholder="Nhập mật khẩu"></input>
                </div>

                <Btn>Đăng ký</Btn>
                <br />
                <Link className={cx('login')} to={'/login'}>
                    Đăng nhập
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
        </form>
    );
}

export default Register;
