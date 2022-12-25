import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import 'antd/dist/antd.min.css';
import { Checkbox, Col, Row, Button, Input } from 'antd';
import { MinusOutlined, PlusOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import { AppContext } from '~/Context/AppProvider';
import formatVND from '~/utilis';
import { useLocalStorage } from '~/hooks/useLocalStorage';
const cx = classNames.bind(styles);

const WarpperButtonStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;

    Input {
        width: 15%;
        text-align: center;
    }
`;
const BtnPurchase = styled(Button)`
    width: 150px;
    height: 40px;
    background-color: red;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    border: 1px solid #000;
`;
function totalMoney(cartIds, carts) {
    console.log(carts);
    const cartFitler = carts.filter((cart) => {
        if (cartIds.includes(cart.id)) return cart;
    });

    console.log(cartFitler);
    const total = cartFitler.reduce((total, currCart) => total + parseFloat(currCart.totalMoney), 0);
    console.log(total);
    return total;
}
function Cart() {
    const [savedLocalCheckout, setSavedLocalCheckout, clearLocalStorage] = useLocalStorage('checkout');
    const [savedLocalUser, setSavedLocalUser, clearLocalStorageUser] = useLocalStorage('user');
    const navigate = useNavigate();
    const { carts, cartId, setCartId, cartChange, setUpdatedQuannity } = React.useContext(AppContext);
    const [checkedList, setCheckedList] = useState([]);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    if (savedLocalUser() == null || savedLocalUser() == undefined) {
        navigate('/login')
    }
    useEffect(() => {
        setCheckedList([cartChange]);
        setTotalPrice(totalMoney(checkedList, carts));
        setCartId([cartChange]);
    }, [cartChange]);

    const handleDecrease = (e) => {
        const id = e.currentTarget.dataset.id;
        const cartSelected = carts.filter((cart) => {
            if (cart.id == id) return cart;
        });

        console.log('ccc', cartSelected[0]);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerId: savedLocalUser().id,
                item: {
                    id: cartSelected[0].id,
                    phoneDetailId: cartSelected[0].phoneDetailId,
                    quantity: cartSelected[0].quantity - 1,
                    priceSale: cartSelected[0].priceSale,
                },
            }),
        };
        fetch('/api/cart', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));

        setUpdatedQuannity(cartSelected[0].quantity - 1);
    };

    const handleIncrease = (e) => {
        console.log(e.currentTarget.dataset.id);
    };
    console.log('length', checkedList.length);
    const onChange = (checkedValues) => {
        setCartId(checkedValues);
        setCheckedList(checkedValues);
        setTotalPrice(totalMoney(checkedValues, carts));
        setCheckAll(checkedValues.length === Object.keys(carts).length);
    };

    const onCheckAllChange = (e) => {
        function cartIds() {
            const ids = carts.map((cart) => cart.id);
            return ids;
        }

        setCartId(e.target.checked ? cartIds() : []);
        setCheckedList(e.target.checked ? cartIds() : 0);
        setTotalPrice(e.target.checked ? totalMoney(cartIds(), carts) : 0);
        setIndeterminate(false);
        setCheckedList(e.target.checked ? cartIds() : []);
        setCheckAll(e.target.checked);
    };

    const handleCheckout = () => {
        console.log('Selected cartid', cartId);
        if (cartId.length > 0) {
            console.log('checkout oke');
            setSavedLocalCheckout(carts.filter((cart) => cartId.includes(cart.id) && cart));
            navigate('/checkout');
        } else {
            console.log('Checkout not oke');
        }
    };
    console.log('list ID cart', carts);
    return (
        <div className={cx('cart')}>
            <h3 className={cx('header')}>Giỏ hàng của bạn</h3>
            <div className={cx('cart-list')}>
                <div className={cx('wrap')}>
                    <Row gutter={24} className={cx('check-all')}>
                        <Col lg={2} className={cx('tag')}>
                            <Checkbox onChange={onCheckAllChange} checked={checkAll}></Checkbox>
                        </Col>

                        <Col lg={6} span={2} className={cx('tag')}>
                            Tên sản phẩm
                        </Col>
                        <Col lg={4} className={cx('tag')}>
                            Hình ảnh
                        </Col>
                        <Col lg={4} className={cx('tag')}>
                            Số lượng
                        </Col>
                        <Col lg={4} className={cx('tag')}>
                            Đơn giá
                        </Col>
                        <Col lg={4} className={cx('tag')}>
                            Thao tác
                        </Col>
                    </Row>
                    <Checkbox.Group style={{ width: '100%' }} value={checkedList} onChange={onChange}>
                        <div className={cx('check-wrap')}>
                            {carts &&
                                carts.map((cart) => (
                                    <Row key={cart.id} gutter={24} className={cx('check-item')}>
                                        <Col lg={2} className={cx('checked ')}>
                                            <Checkbox value={cart.id}></Checkbox>
                                        </Col>
                                        <Col lg={6}>
                                            <h4 className={cx('product-name')}>{cart.phoneName}</h4>
                                        </Col>
                                        <Col lg={4}>
                                            <img
                                                src={cart.imgUrl}
                                                alt={cart.phoneName}
                                                className={cx('product-img')}
                                            ></img>
                                        </Col>
                                        <Col lg={4} className={cx('actions')}>
                                            <WarpperButtonStyled>
                                                <Button
                                                    icon={<MinusOutlined></MinusOutlined>}
                                                    data-id={cart.id}
                                                    onClick={handleDecrease}
                                                ></Button>
                                                <Input value={cart.quantity} size="small" />
                                                <Button
                                                    icon={<PlusOutlined></PlusOutlined>}
                                                    data-id={cart.id}
                                                    onClick={handleIncrease}
                                                ></Button>
                                            </WarpperButtonStyled>
                                        </Col>
                                        <Col lg={4}>
                                            <h4 className={cx('price')}>{formatVND(cart.priceSale)}</h4>
                                        </Col>
                                        <Col lg={4} className={cx('btn-controll')}>
                                            <Button className={cx('btn-edit')}>Sửa</Button>
                                            <Button danger className={cx('btn-delete')}>
                                                Xóa
                                            </Button>
                                        </Col>
                                    </Row>
                                ))}
                        </div>
                    </Checkbox.Group>
                </div>
            </div>
            <div className={cx('footer')}>
                <Link to={'/'} className={cx('back')}>
                    <LeftOutlined />
                    <LeftOutlined /> Tiếp tục mua hàng
                </Link>
                <div className={cx('total')}>
                    <h3> Tổng tiền: </h3>
                    <p className={cx('total-money')}> &nbsp;{formatVND(totalPrice)}</p>
                </div>
            </div>
            <div className={cx('btn-buy')}>
                {/* <Link preventScrollReset={true} to={'/checkout'} onClick={()=>{window.location.reload()}}> */}
                <BtnPurchase onClick={handleCheckout}>Mua hàng</BtnPurchase>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Cart;
