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

    const [comfirmPassword, setComfirmPassword] =useState();
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [validate, setValidate] = useState([]);
    //const [errorRetype, setErrorRetype] = useState(false);

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

    const handleOnchangConfirmPassowrdInput = (e) => {
        setComfirmPassword(e.target.value);
    };

    function validateUsername (userName) {
        let formatUserName = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        if (userName.match(formatUserName)) return true;
        return false
    }

    function validateEmail (email) {
        let formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(formatEmail)) return true;
        return false
    }

    function validatePhoneNumer (phoneNumer) {
        let formatPhoneNumer = /^[a-zA-Z0-9]*$/;
        if (phoneNumer.match(formatPhoneNumer)) return true;
        return false;
    }

    function validatePassword (password, confirmPassword) {
        if (password === confirmPassword) return true;
        return false;
    }
    
    const handleRegister = () => {
        console.log(nameInput, emailInput, phoneInput, passowrdInput);
        const error = [];
        if (!validateUsername(nameInput)) error.push(1);
        if (!validateEmail(emailInput)) error.push(2);
        if (!validatePhoneNumer(phoneInput)) error.push(3);
        if (!validatePassword(passowrdInput, comfirmPassword));
        
        if (error === null || error === undefined) {
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
        } else {
            setValidate(error)
            console.log('errr', error.includes(1))
        }
       
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
                        {validate.length>0 && validate.includes(1) && (
                             <Erro classnName="error" type="danger">
                             *Vui lòng nhập liền không dấu!
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

                        {validate.length>0 && validate.includes(2) && (
                             <Erro classnName="error" type="danger">
                             *Vui lòng nhập dưới dạng demo@demo.demo!
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
                            <Erro classnName={cx('error')} type="danger">
                                *Số điện thoại đã tồn tại! Vui lòng nhập mới.
                            </Erro>
                        )}

                        {validate.length>0 && validate.includes(3) && (
                             <Erro classnName="error" type="danger">
                             *Vui lòng nhập đúng số điện thoại của bạn!
                         </Erro>
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
                        {validate.length>0 && validate.includes(4) && (
                             <Erro classnName="error" type="danger">
                             *Mật khẩu chưa khớp!
                         </Erro>
                        )}
                    <Row>
                        <Input type={'password'} onChange={handleOnchangConfirmPassowrdInput} placeholder={'Nhập lại mật khẩu'} className={cx('account')} />
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
