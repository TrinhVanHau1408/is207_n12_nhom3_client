import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { Button, Form, Upload, message, Input, Select, Table } from 'antd';
import styled from 'styled-components';

// Xử lý Uploat
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

//Mau sac
const optionsColor = [
    {
        value: '1',
        label: 'Trắng',
    },
    {
        value: '2',
        label: 'Đen',
    },
    {
        value: '3',
        label: 'Đỏ',
    },
    {
        value: '4',
        label: 'Vàng',
    },
    {
        value: '5',
        label: 'Hồng',
    },
    {
        value: '6',
        label: 'Xanh lam',
    },
    {
        value: '7',
        label: 'Xanh lá',
    },
    {
        value: '8',
        label: 'Nâu',
    },
    {
        value: '9',
        label: 'Tím',
    },
    {
        value: '9',
        label: 'Cam',
    },
];

const handleChangecolor = (value) => {
    console.log(`selected ${value}`);
};

//Dung luong
const optionsCapacity = [
    {
        value: '1',
        label: '4gb/32gb',
    },
    {
        value: '2',
        label: '4gb/64gb',
    },
    {
        value: '3',
        label: '6gb/128gb',
    },
    {
        value: '4',
        label: '8gb/128gb',
    },
    {
        value: '5',
        label: '8gb/256gb',
    },
    {
        value: '6',
        label: '8gb/512gb',
    },
    {
        value: '7',
        label: '8gb/1TB',
    },
    {
        value: '8',
        label: '12gb/128gb',
    },
    {
        value: '9',
        label: '12gb/256gb',
    },
    {
        value: '10',
        label: '12gb/512gb',
    },
    {
        value: '11',
        label: '12gb/1TB',
    },
];

//Table danh sách phân loại
const dataSource = [
    {
        key: '1',
        color: 'Màu sắc',
        capacity: '8gb/128gb',
        price: 20000000,
        SKU: 'SP01',
    },
];

const columns = [
    {
        title: 'Màu sắc',
        dataIndex: 'color',
        key: 'color',
    },
    {
        title: 'Dung lượng',
        dataIndex: 'capacity',
        key: 'capacity',
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'SKU phân loại',
        dataIndex: 'SKU',
        key: 'SKU',
    },
];

//Styled component
const AddPr = styled(Form)`
    position: absolute;
    left: 350px;
    top: 40px;
    width: 900px;

    .title {
        position: relative;
        font-size: 20px;
        font-weight: 500;
        left: -30px;
    }
    Input {
        width: 700px;
    }
    .prName {
        margin-left: 15px;
    }
    .classifyWrap {
        background-color: #d5d5d5;
        padding: 10px 20px 20px;
        margin: 10px 0;
        border-radius: 5px;

        .classifyTitle {
            margin: 10px 0;
        }
    }

    .classifyList {
        position: relative;
        top: 50px;
        left: -50px;
        margin-bottom: 20px;
    }
    .shippingWeight {
        Input {
            width: 200px;
            margin-left: 34px;
        }
    }
    .shippingFee {
        Input {
            width: 250px;
        }
    }
    .btn {
        margin: 30px 30px 100px;
        text-align: end;
        .btnCancel {
            width: 100px;
            margin-right: 20px;
        }
        .btnConfirm {
            width: 100px;

            background-color: #109cf1;
        }
    }
`;

function AddProduct() {
    //Xu ly upload
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <AddPr>
            <h1 className="title"> Thông tin cơ bản</h1>
            <Form.Item label="Hình ảnh sản phẩm">
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    style={{ width: 10 }}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </Form.Item>
            <Form.Item label="Tên sản phẩm" name={'tensanpham'}>
                <Input className="prName" placeholder="Nhập tên sản phẩm"></Input>
            </Form.Item>
            <Form.Item label="Mô tả sản phẩm">
                <Input
                    rows={4}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Mô tả sản phẩm"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    style={{ height: 120, marginBottom: 12 }}
                />
            </Form.Item>
            <h1 className="title"> Thông tin bán hàng</h1>
            <Form.Item label="Phân loại hàng">
                <div className="classifyWrap">
                    <h4 className="classifyTitle">Chọn màu: </h4>
                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Chọn màu"
                        onChange={handleChangecolor}
                        options={optionsColor}
                    />
                    <h4 className="classifyTitle">Dung lượng: </h4>
                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Dung lượng"
                        onChange={handleChangecolor}
                        options={optionsCapacity}
                    />
                </div>
            </Form.Item>
            <Form.Item label="Danh sách phân loại">
                <div className="classifyList">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </Form.Item>
            <h1 className="title"> Vận chuyển</h1>
            <Form.Item className="shippingWeight" label="Cân nặng">
                <Input placeholder="Nhập cân nặng"></Input>
            </Form.Item>
            <Form.Item className="shippingFee" label="Phí vận chuyển">
                <Input placeholder="Nhập chi phí"></Input>
            </Form.Item>

            <Form.Item className="btn">
                <Button className="btnCancel">Hủy</Button>
                <Button className="btnConfirm" type="primary">
                    Xác nhận
                </Button>
            </Form.Item>
        </AddPr>
    );
}

export default AddProduct;