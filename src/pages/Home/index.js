// import ProductList from '~/components/ProductList';
import { Row, Col, Typography, Divider} from 'antd';
import Styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Vacancy from '~/components/Vacancy';
import Banner from '~/components/Banner';
import Cate from '~/components/Cate';
import CardProduct from '~/components/CardProduct';


// import classNames from 'classnames/bind';
// import { styles as st } from './LogIn.module.scss';
// const cx = classNames.bind(st);

const styles = {
    btnViewMore:
        'py-2 px-4 bg-[#2A254B] text-white rounded-lg sm:w-fit w-full mx-auto text-center hover:md:scale-110 hover:bg-yellow-500 duration-200',
};

const ListProductStyled = Styled.div`
    margin: 5px 15px;
    .bestSelling {
        marging: 5px 10px;
    }
`

function HomePage() {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
       fetch('/api/phone')
       .then(data => data.json())
       .then(res => setPhones(res))
       .catch(err => console.log(err))
      },[]);

     
    return (
        // <div className={cx('reset')}>
        <div>
            <Cate />
            <Banner />
            {/* <ProductList heading="Sản phẩm bán chạy" />
            <ProductList heading="Danh sách sản phẩm" /> */}

            
            {/* <ListProductStyled>
                <Divider><Typography.Title level={5} className="bestSelling">Sản phẩm bán chạy</Typography.Title></Divider>
                <Row>
                    {
                        phones.map(phone => (
                        <Col span={4} key={phone.id}>
                            <CardProduct  id={phone.id} name={phone.name} imgUrl={phone.imgUrl} price={phone.priceSale}/>
                        </Col>
                        ))
                    }
                </Row>
            </ListProductStyled> */}

            <ListProductStyled>
                <Divider><Typography.Title level={5} className="bestSelling">Tất cả sản phẩm</Typography.Title></Divider>
                <Row>
                    {
                        phones.map(phone => (
                        <Col span={4} key={phone.id}>
                            <CardProduct  id={phone.id} slug={phone.slug} name={phone.name} imgUrl={phone.imgUrl} price={phone.priceSale}/>
                        </Col>
                        ))
                    }
                </Row>
            </ListProductStyled>

            
            
            <div className={styles.btnViewMore}>
                <a href="/productlist">Xem tất cả</a>
            </div>
            <Vacancy />
        </div>
    );
}
export default HomePage;
