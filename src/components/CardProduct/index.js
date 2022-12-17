import React from 'react';
// import images from '~/assets/images';
import Styled from 'styled-components';
import {Card, Button, Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
const CardStyled = Styled(Card)`
    border-radius: 5px;
    text-align: center;
    margin: 2px 5px;
    background: #fff;

    .productName, .productPrice {
        margin: 0 0 !important;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
    }

    .productCost {
        text-decoration: line-through !important;
    }

    .productButton {
        display: flex;
        justify-content: space-between;
        margin-top: 2px;
    }

    .productButton__btnAdd, .productButton__btnView {
        border-radius: 5px;
    }
    .productButton__btnAdd{
        background: #2a254b;
       
        color: #fff;
        border: none;
    }
    .productButton__btnAdd:hover {
        transform: scale(1.1);
    }

    .productButton__btnView{
        color: #2a254b;
        border: 1px solid #2a254b;
    }

    .productButton__btnView:hover{
        transform: scale(1.1);
    }
`
function CardProduct({id, name, imgUrl, price}) {

    const navigate = useNavigate();
    const handledOnViewDetail = () => {
        window.location.href = '/productdetail';
    }
    return (
        <div onClick={handledOnViewDetail}>
            <CardStyled hoverable>
                <img src={imgUrl} alt={name}/>
                <Typography.Title level={4} className="productName">{name}</Typography.Title>
                <Typography.Title level={3} type='danger' className="productPrice">{price} vnđ</Typography.Title>
                <Typography.Text type='danger' className='productCost'>16.0000.000 vnđ</Typography.Text>

                <div className='productButton'>
                    <Button className='productButton__btnAdd'>Add to cart</Button>
                    <Button className='productButton__btnView' onClick={handledOnViewDetail}>View</Button>
                </div>
            </CardStyled>
        </div>
    );
}

export default CardProduct;