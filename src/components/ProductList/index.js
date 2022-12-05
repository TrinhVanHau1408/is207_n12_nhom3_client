import React from 'react';
import images from '~/assets/images';
// import { Image } from './Image'
// import { HeartOutlined} from '@ant-design/icons'

const styles = {
    productList: 'md:my-4 my-2',
    productListHeading: 'font-semibold text-left text-lg mx-6 border-b-2 border-double border-yellow-500',
    productListContainer: 'flex flex-wrap',
    productItem: 'basis-1/2 md:basis-1/5 p-6 text-left',
    productImg: 'm-auto',
    productName: 'text-sm lg:text-base',
    // productName: "text-sm lg:text-base line-clamp-3",
    productPriceContainer: 'flex justify-between text-sm text-red-600',
    productPrice: 'font-semibold',
    productDiscount: 'font-bold',
    productCart: 'flex text-white pt-4',
    productCartContent:
        'text-xs bg-indigo-500 px-3 py-2 rounded-md hover:cursor-pointer animate-bounce hover:animate-none hover:text-white hover:bg-yellow-500 transition ease-in-out delay-100 duration-200',
    // productCartContent: "text-xs px-3 py-2 rounded-md hover:cursor-pointer transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:text-white",
    productLikeIcon: 'flex',
    // productCartIcon: "w-5 text-red block"
};

function ProductList(props) {
    return (
        <div className={styles.productList}>
            <div className={styles.productListHeading}>{props.heading}</div>
            <div className={styles.productListContainer}>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="airpodspro" src={images.airpodspro} />
                    </div>
                    <div className={styles.productName}>Airpods pro 2.4GHz wireless gen 2</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        {/* <div className={styles.productLikeIcon}><HeartOutlined /></div> */}
                        <div className={styles.productCart}>
                            {/* <div className={styles.productCartIcon}><ShoppingCartOutlined /></div> */}
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="applewatchS7" src={images.applewatchS7} />
                    </div>
                    {/* line-clamp-3 */}
                    <div className={`${styles.productName} line-clamp-3`}>
                        ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse
                    </div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="applewatchS8" src={images.applewatchS8} />
                    </div>
                    <div className={styles.productName}>ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="airpodspro" src={images.airpodspro} />
                    </div>
                    <div className={styles.productName}>ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="applewatchS8" src={images.applewatchS8} />
                    </div>
                    <div className={styles.productName}>ApplewatchS8 2.4GHz Wireless Gaming Mouse</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="applewatchS8" src={images.applewatchS8} />
                    </div>
                    <div className={styles.productName}>ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="airpodspro" src={images.airpodspro} />
                    </div>
                    <div className={styles.productName}>ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className={styles.productItem}>
                    <div>
                        <img className={styles.productImg} alt="applewatchS8" src={images.applewatchS8} />
                    </div>
                    <div className={styles.productName}>ApplewatchS8 2.4GHz Wireless Gaming Mouse</div>
                    <div className={styles.productPriceContainer}>
                        <div className={styles.productPrice}>4.000.000đ</div>
                        <div className={styles.productDiscount}>-24%</div>
                    </div>
                    <div className={styles.productAction}>
                        <div className={styles.productLikeIcon}></div>
                        <div className={styles.productCart}>
                            <div className={styles.productCartIcon}></div>
                            <div className={styles.productCartContent}>Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
