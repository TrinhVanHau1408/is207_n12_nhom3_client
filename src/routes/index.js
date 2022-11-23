import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Upload from '~/pages/Upload';
import LogIn from '~/pages/LogIn';
import Register from '~/pages/Register';
import Cart from '~/pages/Cart';
import UserInfo from '~/pages/UserInfo';

//Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/productdetail',
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
