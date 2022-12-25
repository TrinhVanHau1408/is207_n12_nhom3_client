import React from 'react';
import images from '~/assets/images';

// const bannerImg = new URL('../assets/imgs/airpodspro.jpeg', import.meta.url);

const styles = {
    banner: 'mx-10 my-4 flex',
    bannerContent: 'md:basis-2/3 p-6 md:p-10 text-left text-white bg-[#2A254B] flex flex-col justify-around',
    bannerSlogan: 'mt-4 font-semibold text-lg',
    bannerDesc: 'mt-20 md:w-3/4 italic text-sm md:text-base',
    bannerImg: 'md:basis-1/3 w-0 mx-3 py-2',
};

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerSlogan}>Chất lượng - Tin cậy - Đột phá</div>
                <div className={styles.bannerDesc}>
                    DPH cam kết mang đến cho bạn những sản phẩm tốt nhất với những trải nghiệm ấn tượng, hiện đại. Những
                    giá trị DPH mang lại chắc chắn sẽ khiến bạn hài lòng!
                </div>
            </div>
            <div className={styles.bannerImg}>
                <img src='https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2020/07/banner-trang-tin-sale.jpg' alt="bannerImg" />
            </div>
        </div>
    );
}
