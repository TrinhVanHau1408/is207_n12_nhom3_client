import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FacebookFilled, GoogleOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const Erro = styled(Typography.Text)`
    position: relative;
    top: -5px;
`;

function Register() {
    const navigate = useNavigate();
    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [phoneInput, setPhoneInput] = useState();
    const [passowrdInput, setPasswordInput] = useState();
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);

    const handleOnchangNameInput = (e) => {
        setNameInput(e.target.value);
    };

    const handleOnchangEmailInput = (e) => {
        setEmailInput(e.target.value);
    };

    const handleOnchangPhoneInput = (e) => {
        setPhoneInput(e.target.value);
    };

    const handleOnchangPassowrdInput = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleRegister = () => {
        console.log(nameInput, emailInput, phoneInput, passowrdInput);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: nameInput,
                email: emailInput,
                phone: phoneInput,
                password: passowrdInput,
            }),
        };
        fetch('/api/customer/register', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status == 0) {
                    data.error.map((err) => {
                        if (err == 1) setErrorName(true);
                        if (err == 2) setErrorEmail(true);
                        if (err == 3) setErrorPhone(true);
                    });
                } else {
                    navigate('/login');
                }
            });
    };

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
                    <Row>
                        <Input
                            type={'text'}
                            placeholder={'Tài khoản'}
                            className={cx('account')}
                            onChange={handleOnchangNameInput}
                        />
                        {errorName && (
                            <Erro classnName="error" type="danger">
                                *Tên người dùng đã tồn tại! Vui lòng nhập mới.
                            </Erro>
                        )}
                    </Row>
                    <Row>
                        <Input
                            type={'email'}
                            placeholder={'Nhập email'}
                            className={cx('account')}
                            onChange={handleOnchangEmailInput}
                        />
                        {errorEmail && (
                            <Erro classnName="error" type="danger">
                                *Email đã tồn tại! Vui lòng nhập mới.
                            </Erro>
                        )}
                    </Row>
                    <Row>
                        <Input
                            type={'phone'}
                            placeholder={'Nhập số điện thoại'}
                            className={cx('account')}
                            onChange={handleOnchangPhoneInput}
                        />
                        <br />
                        {errorPhone && (
                            <Typography.Text classnName={cx('error')} type="danger">
                                *Số điện thoại đã tồn tại! Vui lòng nhập mới.
                            </Typography.Text>
                        )}
                    </Row>
                    <Row>
                        <Input
                            type={'password'}
                            placeholder={'Nhập mật khẩu'}
                            className={cx('account')}
                            onChange={handleOnchangPassowrdInput}
                        />
                    </Row>
                </div>

                <Btn onClick={handleRegister}>Đăng ký</Btn>
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
