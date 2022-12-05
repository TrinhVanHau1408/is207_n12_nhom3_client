import ProductList from '~/components/ProductList';
import Vacancy from '~/components/Vacancy';
import Banner from '~/components/Banner';
import Cate from '~/components/Cate';

// import classNames from 'classnames/bind';
// import { styles as st } from './LogIn.module.scss';
// const cx = classNames.bind(st);

const styles = {
    btnViewMore:
        'py-2 px-4 bg-[#2A254B] text-white rounded-lg sm:w-fit w-full mx-auto text-center hover:md:scale-110 hover:bg-yellow-500 duration-200',
};

function HomePage() {
    return (
        // <div className={cx('reset')}>
        <div>
            <Cate />
            <Banner />
            <ProductList heading="Sản phẩm bán chạy" />
            <ProductList heading="Danh sách sản phẩm" />
            <div className={styles.btnViewMore}>
                <a href="/product">Xem tất cả</a>
            </div>
            <Vacancy />
        </div>
    );
}
export default HomePage;
