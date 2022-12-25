import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FacebookFilled, GoogleOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
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
    const [nameInput, setNameInput,] = useState();
    const [emailInput, setEmailInput,] = useState();
    const [phoneInput, setPhoneInput,] = useState();
    const [passowrdInput, setPasswordInput,] = useState();

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
        console.log(nameInput, emailInput,phoneInput, passowrdInput)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                userName: nameInput,
                email: emailInput,
                phone: phoneInput,
                password: passowrdInput
            })
        };
        fetch('/api/customer/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status == 0) {
                   
                }
            });
    }
    
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
                    <Input type={'text'} className={cx('account')} onChange={handleOnchangNameInput} /> <br />
                    <Input type={'email'} className={cx('account')} onChange={handleOnchangEmailInput}/><br />
                    <Input type={'phone'} className={cx('account')} onChange={handleOnchangPhoneInput}/><br />
                    <Input type={'password'} className={cx('account')} onChange={handleOnchangPassowrdInput}/>
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
