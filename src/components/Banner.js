import React from 'react'
// import { AiFillApple } from "react-icons/ai";

const bannerImg = new URL("../assets/imgs/airpodspro.jpeg", import.meta.url)
const styles = {
    banner: "mx-6 my-10 flex",
    // bannerContent: "md:basis-2/3 p-4 text-left text-white bg-[#2A254B]",
    bannerContent: "md:basis-2/3 p-6 md:p-10 text-left text-white bg-[#2A254B] flex flex-col justify-around",
    // flex flex-col justify-around
    bannerSlogan: "mt-4 font-semibold text-lg",
    bannerDesc: "mt-20 md:w-3/4 italic text-sm md:text-base",
    bannerImg: "md:basis-1/3 w-0",
}

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.bannerContent}>
            <div className={styles.bannerSlogan}>Chất lượng - Tin cậy - Đột phá</div>
            {/* <div className={styles.bannerSlogan}> <AiFillApple /> Chất lượng - Tin cậy - Đột phá</div> */}
            <div className={styles.bannerDesc}>DPH cam kết mang đến cho bạn những sản phẩm tốt nhất với những trải nghiệm ấn tượng, hiện đại. Những giá trị DPH mang lại chắc chắn sẽ khiến bạn hài lòng!</div>
        </div>
        <div className={styles.bannerImg}>
            <img src={bannerImg} alt="Banner Image" />
        </div>

    </div>
  )
}
