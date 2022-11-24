import React from 'react'

const styles = {
    footer: "bg-[#2A254B] text-white text-left",
    footerContainer: "flex md:basis-1/2 basis-full py-14",
    // footerContainer: "grid grid-cols-2",
    footerInfo: "flex justify-around basis-full",
    footerItemTitle: "leading-8",
    footerItemContent: "block text-sm leading-7 hover:cursor-pointer hover:text-yellow-500",
    footerSignIn: "md:w-full hidden md:block px-8",
    footerInput: "w-2/3 px-3 py-2 mt-3 text-white bg-[#332C5B]",
    btnSignIn: "text-[#2A254B] bg-white px-3 py-2 hover:text-white hover:bg-yellow-500 transition delay-150 duration-300 ease-in-out",
}

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerInfo}>
                <div className={styles.footerItem}>
                    <div className={styles.footerItemTitle}>DANH MỤC</div>
                    <a href='#' className={styles.footerItemContent}>Hàng mới về</a>
                    <a href='#' className={styles.footerItemContent}>Bán chạy</a>
                    <a href='#' className={styles.footerItemContent}>Đang giảm giá</a>
                    <a href='#' className={styles.footerItemContent}>Danh sách sản phẩm</a>
                </div>
                <div className={styles.footerItem}>
                    <div className={styles.footerItemTitle}>NHÃN HIỆU</div>
                    <a href='#' className={styles.footerItemContent}>Iphone</a>
                    <a href='#' className={styles.footerItemContent}>Samsung</a>
                    <a href='#' className={styles.footerItemContent}>Oppo</a>
                    <a href='#' className={styles.footerItemContent}>Realme</a>
                    <a href='#' className={styles.footerItemContent}>Xiaomi</a>
                </div>
                <div className={styles.footerItem}>
                    <div className={styles.footerItemTitle}>PHP MOBILE</div>
                    <a href='#' className={styles.footerItemContent}>Về chúng tôi</a>
                    <a href='#' className={styles.footerItemContent}>Địa chỉ</a>
                    <a href='#' className={styles.footerItemContent}>Liên hệ</a>
                    <a href='#' className={styles.footerItemContent}>Chính sách</a>
                    <a href='#' className={styles.footerItemContent}>Bảo mật</a>
                </div>
            </div>
            <div className={styles.footerSignIn}>
                <div className={styles.footerItem}>
                    <div className={styles.footerItemTitle}>ĐĂNG KÝ NGAY</div>
                    <input className={styles.footerInput} type="text" placeholder='your@email.com'/>
                    <button className={styles.btnSignIn}>Đăng ký</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer