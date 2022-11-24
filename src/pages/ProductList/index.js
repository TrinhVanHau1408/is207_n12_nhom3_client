import ProductList from '../../components/ProductList';
import Vacancy from '../../components/Vacancy';
import Banner from '../../components/Banner';
import Cate from '../../components/Cate';
import Layout from '../../components/Layout';

const styles = {
  app: "",
  btnViewMore: "py-2 px-4 bg-[#2A254B] text-white rounded-lg sm:w-fit w-full mx-auto text-center hover:md:scale-110 hover:bg-yellow-500 duration-200",
}

function ProductListPage() {
  return (
    <Layout>
      <Cate />
      <ProductList heading="Danh sách sản phẩm"/>
      <div className={styles.btnViewMore}>
        <a href="#">Xem tất cả</a>
      </div>
      <Vacancy />
    </Layout>
  );
}
export default ProductListPage;
