import classNames from 'classnames/bind';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);
function Products() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('product-image')}
                src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_12.png"
                alt="Dien thoai"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>Điện thoại iPhone 14 ProMax</p>
                <span className={cx('productname')}>40.000.000 ₫</span>
            </div>
        </div>
    );
}

export default Products;
