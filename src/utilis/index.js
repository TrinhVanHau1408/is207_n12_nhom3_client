
// Hàm convert tiền ra dạng 50.000 đ
const formatVND = (money) => {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 2}
    const formated = new Intl.NumberFormat('vi-VN', config).format(money);
    return formated;
}

export default formatVND;
