import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Upload from '~/pages/Upload';
import LogIn from '~/pages/LogIn';
import Register from '~/pages/Register';
import Cart from '~/pages/Cart';
import UserInfo from '~/pages/UserInfo';
import CheckoutPage from '~/pages/Checkout';
import ProductListPage from '~/pages/ProductListPage';
import orderManage from '~/Admin/orderManage';
import returnRefund from '~/Admin/returnRefund';
import allProduct from '~/Admin/AllProduct';
import AddProduct from '~/Admin/AddProduct';
import Revenue from '~/Admin/Revenue';
import { navBarAdmin } from '~/components/Layout';
//Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/productdetail/:slug',
        component: ProductDetail,
    },
    {
        path: '/login',
        component: LogIn,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/userinfo',
        component: UserInfo,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    {
        path: '/checkout',
        component: CheckoutPage,
    },
    {
        path: '/productlist',
        component: ProductListPage,
    },
    {
        path: '/ordermanage',
        component: orderManage,
        layout: navBarAdmin,
    },
    {
        path: '/returnrefund',
        component: returnRefund,
        layout: navBarAdmin,
    },
    {
        path: '/allproductadmin',
        component: allProduct,
        layout: navBarAdmin,
    },
    {
        path: '/addproduct',
        component: AddProduct,
        layout: navBarAdmin,
    },
    {
        path: '/revenue',
        component: Revenue,
        layout: navBarAdmin,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };