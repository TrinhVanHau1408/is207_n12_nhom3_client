import { Link } from 'react-router-dom';
import React from 'react';

import Styled from 'styled-components';
import { ShoppingCartOutlined, CloudOutlined, ShoppingOutlined, MoneyCollectOutlined } from '@ant-design/icons';

const Silebar = Styled.div`
    background-color: #fff;
    width: 300px;
    height: 650px;
    position: relative;
    left: 0;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px

    {}
    h1{
        font-size: 30px;
        padding: 10px;
        font-weight: 600;
        color: #109CF1;
    }
    .infoAdmin{
        display: flex;

        img{
            width: 70px;
            border-radius: 50%;
            margin:0px 12px 15px ;
        }
    }
    .name{
        line-height: 35px;

        h2{
            font-size: 25px;
        }
        p{
            color: #90A0B7;
        }
    }
    .orderManagement{
        font-size:20px;
        margin:  10px;
        .allOrder{
            margin: 0 30px;
            font-size: 16px;
          
        }
    }
 
`;

function Sidebar() {
    return (
        <Silebar>
            <div className="inner">
                <h1>DPH MOBILE</h1>
                <div className="infoAdmin">
                    <img src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/320449555_1096999304279582_1071899223695044272_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Cz7WITxGW_sAX9jfPNm&tn=yd_PlMJonT-y1Fej&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBXnikG7MhplKjBn3He_p9RMaU8zYpjnit76KgdqMkacA&oe=63A8B224"></img>
                    <div className="name">
                        <h2>admin</h2>
                        <p>dphmobile@gmail.com</p>
                    </div>
                </div>
                <ul className="orderManagement">
                    <Link to={'/ordermanage'}>
                        <h2>
                            <ShoppingCartOutlined style={{ position: 'relative', top: '-4px' }} /> Quản lý đơn hàng
                        </h2>
                    </Link>
                    <li>
                        <Link to={'/ordermanage'} className="allOrder">
                            <CloudOutlined style={{ position: 'relative', top: '-4px' }} /> <span>Tất cả đơn hàng</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/returnrefund'} className="allOrder">
                            <CloudOutlined style={{ position: 'relative', top: '-4px' }} /> Đơn trả/ Hoàn tiền
                        </Link>
                    </li>
                </ul>
                <ul className="orderManagement">
                    <Link to={'/allproductadmin'}>
                        <h2>
                            <ShoppingOutlined style={{ position: 'relative', top: '-4px' }} />
                            Quản lý sản phẩm
                        </h2>
                    </Link>
                    <li>
                        <Link to={'/allproductadmin'} className="allOrder">
                            <CloudOutlined style={{ position: 'relative', top: '-4px' }} /> Tất cả sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to={'/addproduct'} className="allOrder">
                            <CloudOutlined style={{ position: 'relative', top: '-4px' }} /> Thêm sản phẩm
                        </Link>
                    </li>
                </ul>
                <Link className="orderManagement" to={'/revenue'}>
                    <MoneyCollectOutlined style={{ position: 'relative', top: '-4px' }} /> Doanh thu
                </Link>
            </div>
        </Silebar>
    );
}

export default Sidebar;
