import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MinusOutlined, PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import { Col, Row, Button, Image, Typography, Input, Descriptions, notification } from 'antd';
import { useParams } from 'react-router-dom';
import Comments from '~/components/Comment';
import { useNavigate } from "react-router-dom";
import styles from './ProcductDetail.module.scss';
import { AuthContext } from '~/Context/AuthProvider';
import { AppContext } from '~/Context/AppProvider';
import formatVND from '~/utilis';
const cx = classNames.bind(styles);


const WarpperStyled = Styled.div`
    align-items: center;
    background: #E8EDED;
    width: 100%;

`;
const WarpperDetailStyled = Styled.div`
    align-items: center;
    background: #fff;
    margin: 0 100px;
`;
const DetailStyled = Styled.div`
    border-radius: 25px !important;
    // padding: 10px 10px;
    margin-top: 10px;
    .product {
        
        Col {
            height: 51px;
        }
        &__ten, &__tinhTrang, &__mau_tieuDe,&__gia, &__boNho, &__soLuong {
            margin-left: 10px;
        }

    
        &__soLuong Input {
            border: none;
            text-align: center;
            width: 20px;
        }
      

    }

    .error {
        background: #ffcdd2;
        color: #fff;
    }
    .errContent {
        text-align: center;
        padding-bottom: 5px;
      
    }
`;
const WarpperLinkStyled = Styled.div`
    padding: 20px 0;
    background: #E8EDED;
    
`;
const DescriptionsStyled = Styled(Descriptions)`
    width: 80%;
    min-height: 100px;
    border-radius: 5px;
    .product__noiDungKhuyenMai {
       margin: 0;
       background: #DEDEDE;
       text-align: justify;
      
    }

    .product_thongSo, .product__noiDungThongSo{
        margin: 0;
        background: #DEDEDE;
       
    }

    .product_thongSo {
        text-align: center;
        // font-size: 18px;
        font-weight: bold;
    }

    .product__noiDungThongSo {
        text-align: justify;
    }

`;
   
const ButtonStyled = Styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 15px 0;
    color: #757575;
    font-size: .875rem;
    align-items: center;

    .color, .mau, .boNho {
        margin-right:5px;
    }

    .mau {
        width: 10px;
        height: auto;
        font-size: 10px;
    }
    .selected {
        background: #2a254b !important;
        color: #fff;
        border: none;
    }
`;

// const InputStyled = Styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     margin: 15px 0;
//     color: #757575;
//     Input {
//         width: 50px;
//         margin-right: 5px;
//         text-align: center;
//         align-items: center;
//     }
// `

const WarpperButtonHandleStyled = Styled.div`
    margin: 20px 0;
    // display: flex;
    // justify-content: start;
   
    .btn_add {
        color: #2a254b;
        border: 1px solid #2a254b;
    }
    .btn_add:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
    .btn_buy {
        margin-left: 50px;
        background: rgb(238, 77, 45);
        color: #fff;
        border: none;
    }
    .btn_buy:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

`;
const WarpperThongSoStyled = Styled.div `
    margin-top: 20px;
    display: flex;
    justify-content: end;
`;
function unique(variants) {
    let phoneColor = [{
        'id':variants[0].colorId,
        'name': variants[0].color
    }]
  
   
    variants.forEach(vari => {
            let colorId = phoneColor.map(phoneC => phoneC.id);
            if(!colorId.includes(vari.colorId)) {
            phoneColor.push({
                'id':vari.colorId,
                'name': vari.color
            });
        }
    });
    return phoneColor
 }
function ProcductDetail(props) {
    const [api, contextHolder] = notification.useNotification();
    const {user} = React.useContext(AuthContext);
    const {setCartChange} = React.useContext(AppContext);

    const [detail, setDetail] = useState([]);
    const [price, setPrice] = useState(0);
    const [colors, setColors] = useState([]);
    const [boNhos, setBoNhos] = useState([]);
    const [quantitySelect, setQuantitySelect] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const [selectedColor, setSelectedColor] =useState(0);
    const [selectedRam, setSelectedRam] =useState(0);
    const [selectedRom, setSelectedRom] =useState(0);
    const [variant, setVariant] = useState({});
    const [quantity, setQuantity] = useState();
    const [isError, setIsError] = useState(false);

    const params = useParams()
    const slug = params.slug;

    const navigate = useNavigate();
    // Call API Phone :slug
    useEffect(() => {
       fetch('/api/phone/'+slug)
       .then(data => data.json())
       .then(res => {
            setDetail(res)
            setPrice(res.phone.priceSale)
            setLoaded(true)
            
         })
       .catch(err => console.log(err))
    },[slug]);

    function updateQuanity(variant) {
        const sumQuantity = variant.reduce((total, variCurr) => {
            return total + variCurr.quantity;
          }, 0);
        setQuantity(sumQuantity);
    }
    // useEffect(() => {

    //     // Tính tổng tồn kho hiện có của tất cả biến thể
    //     if (loaded) {
    //         updateQuanity(detail.variants);
    //     }
    // }, [detail, selectedColor])

    useEffect(() => {
        
        if (loaded ) {
            setSelectedRam(0);
            setSelectedRom(0);
            // setSelectedColor(0);
            updateQuanity(detail.variants);
        }
    }, [detail, selectedColor])

    useEffect(() => {
        // Lấy màu của sản phẩm không trùng lập
        if (detail.variants) setColors(unique(detail.variants));
    }, [slug, detail ]);
  

    // Xử lý tăng số lượng đặt
    const handleIncrease = () => {
        if (quantitySelect < quantity) {
            setQuantitySelect(quantitySelect+1);
        }
    }

    // Xử lý giảm số lượng đặt
    const handleDecrease = () => {
        if (quantitySelect > 1) {
            setQuantitySelect(quantitySelect-1);
        }
       
    }

    // Xử ý
    const handleInputChangeQuanity = (e) => {
        const inputQuanity = e.target.value;
        
        if (!Number.isNaN(inputQuanity) || inputQuanity =='') {
            console.log(inputQuanity)
            if (inputQuanity ==='') {
                setQuantitySelect('')
                return;
            }
            if (quantitySelect < parseInt(inputQuanity)) {
                setQuantitySelect(quantitySelect);
                return;
            }
    
            if (parseInt(inputQuanity) < 1) {
                setQuantitySelect(1);
                return;
            }
    
            setQuantitySelect(parseInt(inputQuanity));
            return;
        } else {
            setQuantitySelect(1);
        }
        
    }
    // Xử lý chọn lấy dữ liệu bộ nhớ khi chọn 1 màu
    const handleSelectColor = (e) => {

        if (selectedColor == e.currentTarget.dataset.id) {
            setSelectedColor(0);
            setVariant({});
            setBoNhos([])
            updateQuanity(detail.variants)
            return;
        }
        let name = e.currentTarget.dataset.name;
        setBoNhos(detail.variants.filter(vari => {
                if (vari.color.includes(name)) {
                    return vari;
                }
        }));

        setSelectedColor(e.currentTarget.dataset.id)
        if (quantitySelect !=1) setQuantitySelect(1);
       
        
    }

    // Xử lý chọn bộ nhớ cập nhật số tiền; ramid, romid
    const handleSelectBoNho = (e) => {
        if (selectedRam == e.currentTarget.dataset.ramid && selectedRom == e.currentTarget.dataset.romid) {
            setSelectedRam(0);
            setSelectedRom(0);
            updateQuanity(detail.variants)
            return;
        }
        let percentPrice = e.currentTarget.dataset.percentprice;
        let ramId = e.currentTarget.dataset.ramid;
        let romId = e.currentTarget.dataset.romid;
        setPrice(detail.phone.priceSale * (1+percentPrice/100));
        setSelectedRom(romId);
        setSelectedRam(ramId);
        if (quantitySelect !=1) setQuantitySelect(1);
    }

    // Xử lý chọn biến thể cụ thể thông qua colorid, ramid, romid
    useEffect(() => {
        if (selectedColor && selectedRam && selectedRom) {
            let variTemp =(detail.variants.filter(vari => {
                if (vari.colorId == selectedColor && vari.ramId == selectedRam && vari.romId == selectedRom) {
                    setQuantity(vari.quantity);
                    return vari;
                }
            }))

            setVariant(...variTemp);
            

        }
    }, [selectedColor, selectedRam, selectedRom, detail])
   

    function storeOrrerApi() {{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                customerId: user.id, 
                item: {
                    phoneId: detail.phone.id,
                    phoneDetailId: variant.id,
                    quantity: quantitySelect,
                    priceSale: price,
                    totalMoney: price * quantitySelect
                }
            })
        };
        fetch('/api/cart', requestOptions)
            .then(response => response.json())
            .then(data => setCartChange(data.data.id));

    }}

    // Xử lý thêm vào giỏ hàng
    const handleAddToCart = () => {
        if (user!=null) {
            if (selectedColor && selectedRam && selectedRom) {
               
                storeOrrerApi();
                api.success({
                    message: 'Thêm vào giỏ hàng thành công',
                    // description:
                    //     'Cảm ơn quý khách đã tin tưởng!',
                    duration: 2,
                    });
            }

            
            
        } else {
            
            console.log('đã logout');
            api.error({
                message: 'Vui lòng đăng nhập',
                // description:
                //     'Cảm ơn quý khách đã tin tưởng!',
                duration: 2,
              });
        }

        setIsError(!(selectedColor && selectedRam && selectedRom)?true:false)

    }

    const handleBuy = () => {
        storeOrrerApi();
        navigate('/cart')
        console.log("oke");
    }
    return (
        <WarpperStyled>{
            loaded && 
            <WarpperDetailStyled>
                {contextHolder}
                <WarpperLinkStyled>
                    <Link className={cx('product-link')} to={'/'}>
                        Trang chủ
                    </Link>
                    <span> &gt; </span>
                    <Link className={cx('product-link')} to={'/'}>
                        iPhone
                    </Link>
                    <span> &gt; </span>
                    <Link className={cx('product-link')} to={'/'}>
                        iPhone 13 ProMax
                    </Link>
                </WarpperLinkStyled>
                 

                {/* Khung chia tiết sản phẩm */}
                <DetailStyled>
                    <Row className='product'>
                        <Col span={8}> 
                            <Image className='product__img' src={detail.phone.imgUrl} width={400} height={500} ></Image> 
                        </Col>
                        <Col span={10}>
                            <Row><Typography.Title className='product__ten'level={3}>{detail.phone.name}</Typography.Title></Row>
                            <Row >
                                <Typography.Title level={3} type='danger' className='product__gia'>{formatVND(price)}</Typography.Title>
                            </Row>
                            <Row >
                           
                            <Col span={4}> <Typography.Text className='product__tinhTrang'>Tình trạng</Typography.Text></Col>
                            <Col span={4}> <Typography.Text  className='product__tinhTrang'>{quantity?'Còn hàng':'Hết hàng'}</Typography.Text></Col>
                            </Row>
                            <div className={`${isError?'error':''}`}>
                                <Row>
                                    <ButtonStyled lassName='product__mau'>
                                        <Col span={4}><Typography.Text className='product__mau_tieuDe'>Chọn màu</Typography.Text></Col>
                                        <Col span={20}> 
                                            {colors.map(color => (
                                            <Button className={`mau ${selectedColor == color.id? 'selected': ''}`} key={color.id} data-id={color.id}  data-name={color.name} shape='circle' onClick={handleSelectColor} size='large' >{color.name}</Button>
                                            ))}
                                        </Col>
                                    </ButtonStyled>
                                </Row>
                                <Row >
                                    <ButtonStyled className='product__boNho'> 
                                        <Col span={4}><Typography.Text >Bộ nhớ</Typography.Text></Col>
                                        
                                        <Col span={20}>
                                            {selectedColor? boNhos.map(boNho => (
                                                        <Button className={`boNho ${(selectedRam == boNho.ramId && selectedRom == boNho.romId)? 'selected': ''}`} 
                                                            key={boNho.id} 
                                                            size='large'  
                                                            data-ramid={boNho.ramId} 
                                                            data-romid={boNho.romId} 
                                                            data-percentprice={boNho.percentPrice} 
                                                            onClick={handleSelectBoNho}  
                                                            ghost 
                                                            danger>
                                                                {boNho.ram}/{boNho.rom}
                                                        </Button>
                                            )):<Typography.Text type="danger">Vui lòng chọn màu!</Typography.Text>}
                                        </Col>
                                    </ButtonStyled>
                                </Row>
                                <Row >
                                    <Col span={24}>
                                    <ButtonStyled className='product__soLuong'>
                                        <Col span={4}><Typography.Text >Số lượng</Typography.Text></Col>
                                        <Col span={4}> 
                                            <Button icon={<MinusOutlined></MinusOutlined>} onClick={handleDecrease}></Button>
                                            <Input
                                                value={quantitySelect}
                                                size='small'
                                                onChange={handleInputChangeQuanity} 
                                            />
                                            <Button icon={<PlusOutlined></PlusOutlined>} onClick={handleIncrease}></Button>
                                        </Col>
                                        <Col>
                                            <Typography.Text >{(selectedColor && selectedRam && selectedRom && variant)?variant.quantity:quantity} Sản phẩm sẵn có</Typography.Text>
                                        </Col>
                                    </ButtonStyled>
                                    </Col>
                                    
                                </Row>
                                {isError&&<Row className='errContent'>
                                    <Col span={24}><Typography.Text  type='danger'>Vui lòng chọn</Typography.Text></Col>
                                </Row>}
                            </div>
                           
                           
                            <Row>
                                <DescriptionsStyled title='Khuyến mãi' bordered >
                                    <Descriptions.Item className='product__noiDungKhuyenMai'>FLASH SALE: Tặng voucher 500.000đ giảm trực tiếp vào giá máy
                                    Duy nhất tại Dienthoaihay: iPhone chính hãng VN/A rẻ như hàng cũ xách tay
                                    Trợ giá mua củ sạc nhanh 20W PD chính hãng chỉ 250k
                                    Trả góp nhanh, lãi suất 0% qua thẻ tín dụng
                                    Mua Online: Giao hàng tận nhà- Nhận hàng thanh toán
                                    Thẻ SIM: Nano + eSim Màn hình: 6.7 inches, Super Retina XDR OLED, 120Hz, HDR10, Dolby</Descriptions.Item>
                                </DescriptionsStyled>
                                {/* <Typography.Text className='product__khuyenMai'>Khuyến mãi</Typography.Text>
                                <Typography.Text className='product__noiDungKhuyenMai'>
                                    FLASH SALE: Tặng voucher 500.000đ giảm trực tiếp vào giá máy
                                    Duy nhất tại Dienthoaihay: iPhone chính hãng VN/A rẻ như hàng cũ xách tay
                                    Trợ giá mua củ sạc nhanh 20W PD chính hãng chỉ 250k
                                    Trả góp nhanh, lãi suất 0% qua thẻ tín dụng
                                    Mua Online: Giao hàng tận nhà- Nhận hàng thanh toán
                                    Thẻ SIM: Nano + eSim Màn hình: 6.7 inches, Super Retina XDR OLED, 120Hz, HDR10, Dolby
                             
                                </Typography.Text> */}
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <WarpperButtonHandleStyled>
                                        <Button className='btn btn_add' size='large' onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                                        <Button className='btn btn_buy' size='large' onClick={handleBuy}>Mua ngay</Button>
                                    </WarpperButtonHandleStyled>
                                </Col>
                               
                            </Row>
                        </Col>

                        <Col span={6}>
                            <WarpperThongSoStyled>
                                <DescriptionsStyled bordered column={1}>
                                    <Descriptions.Item className='product_thongSo'>Thông số kỹ thuật</Descriptions.Item>
                                    <Descriptions.Item className='product__noiDungThongSo'>FLASH SALE: Tặng voucher 500.000đ giảm trực tiếp vào giá máy
                                    Duy nhất tại Dienthoaihay: iPhone chính hãng VN/A rẻ như hàng cũ xách tay
                                    Trợ giá mua củ sạc nhanh 20W PD chính hãng chỉ 250k
                                    Trả góp nhanh, lãi suất 0% qua thẻ tín dụng
                                    Mua Online: Giao hàng tận nhà- Nhận hàng thanh toán
                                    Thẻ SIM: Nano + eSim Màn hình: 6.7 inches, Super Retina XDR OLED, 120Hz, HDR10, Dolby</Descriptions.Item>
                                </DescriptionsStyled>
                            </WarpperThongSoStyled>
                           
                            {/* <Row><Typography.Text>Thông tin sản phẩm</Typography.Text></Row>
                            <Row>
                            <Typography.Text>
                                Thẻ SIM: Nano + eSim Màn hình: 6.7 inches, Super Retina XDR OLED, 120Hz, HDR10, Dolby
                                Vision Độ phân giải: 1284 x 2778 pixels, tỷ lệ 19.5:9 CPU: Apple A15 Bionic (5 nm) RAM:
                                6GB Bộ nhớ/ Thẻ nhớ: 128/256/512GB/1TB Camera sau: 12 MP, f/1.5, 26mm (wide), 1.9µm,
                                dual pixel PDAF, sensor-shift OIS, 12 MP, 12 MP
                                Thẻ SIM: Nano + eSim Màn hình: 6.7 inches, Super Retina XDR OLED, 120Hz, HDR10, Dolby
                                Vision Độ phân giải: 1284 x 2778 pixels, tỷ lệ 19.5:9 CPU: Apple A15 Bionic (5 nm) RAM:
                                6GB Bộ nhớ/ Thẻ nhớ: 128/256/512GB/1TB Camera sau: 12 MP, f/1.5, 26mm (wide), 1.9µm,
                                dual pixel PDAF, sensor-shift OIS, 12 MP, 12 MP
                                
                            </Typography.Text>
                            </Row> */}
                        </Col>
                    </Row>
                </DetailStyled>
                

            </WarpperDetailStyled>
        }</WarpperStyled>
      
    );
}

export default ProcductDetail;
