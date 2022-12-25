import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import styled from 'styled-components';
import { FacebookFilled, GoogleOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Col, notification, Row, Typography } from 'antd';
// import Button from '~/components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '~/Context/AuthProvider';
import { useLocalStorage } from '~/hooks/useLocalStorage';
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
function LogIn() {
    // const [savedLocalUser, setSavedLocalUser, clearLocalStorage] = useLocalStorage('user');
    // const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const { setUserName, setPassword, isErrLogin } = React.useContext(AuthContext);
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleUserNameChange = (e) => {
        setNameInput(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleSubmit = () => {
        console.log({nameInput,passwordInput})
        setUserName(nameInput);
        setPassword(passwordInput);
       
    }

    // useEffect(() => {
    //     if (isErrLogin) {
    //         // api.error({
    //         //     message: 'Thêm vào giỏ hàng thành công',
    //         //     duration: 2,
    //         // });
    // })


    return (
        <div className={cx('auth-form')}>
            <Link to="/" className={cx('btn-close')}>
                <CloseOutlined style={{ fontSize: '25px' }} />
            </Link>
            <div className={cx('header')}>
                <h2>Đăng nhập</h2>
            </div>
            <div className={cx('content')}>
                <input
                    type={'text'}
                    className={cx('account')}
                    placeholder="Nhập tài khoản"
                    onChange={handleUserNameChange}
                ></input>{' '}
                <br />
                <input
                    type={'password'}
                    className={cx('account')}
                    placeholder="Nhập mật khẩu"
                    onChange={handlePasswordChange}
                ></input>
                {isErrLogin&&<Row>
                    <Col span={24} style={{textAlign: 'center', fontSize: '16px',marginBottom: '-10px'}}>
                        <Typography.Text type='danger'>*Tên người dùng hoặc mật khẩu không đúng. Vui lòng nhập lại!</Typography.Text>
                    </Col>
                </Row>}
                <br />
                <div className={cx('acctions')}>
                    {/* <div className={cx('check-password')}>
                        <input type={'checkbox'} id='check' className={cx('remember')}></input>
                        <label for='check'>Remember</label>
                    </div> */}
                    <Link to={'#'} className={cx('miss-password')}>
                        Quên mật khẩu?
                    </Link>
                </div>
                <Btn size="large" onClick={handleSubmit}>
                    Đăng nhập
                </Btn>
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
