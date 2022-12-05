import React from 'react';

const styles = {
    vacancy: 'py-10 text-center',
    vacancyHeading: 'text-lg font-semibold mb-8 mx-6 text-[#2A254B]',
    vacancyContent: 'flex flex-wrap justify-center px-6',
    vacancyItem: 'md:basis-1/4 sm:basis-1/2 w-full sm:text-left md:p-6 p-4 hover:scale-90 bg-gray-100',
    vacancyTitle: 'font-semibold my-2 text-[#2A254B]',
    vacancyDesc: 'text-sm',
};

function Vacancy() {
    return (
        <div className={styles.vacancy}>
            <div className={styles.vacancyHeading}>CHÍNH SÁCH TẠI DPH MOBILE</div>
            <div className={styles.vacancyContent}>
                <div className={styles.vacancyItem}>
                    <div className={styles.vacancyIcon}></div>
                    <div className={styles.vacancyTitle}>Miễn phí vận chuyển</div>
                    <div className={styles.vacancyDesc}>
                        Miễn phí vận chuyển trên toàn quốc cho đơn hàng trên 10 triệu đồng
                    </div>
                </div>
                <div className={styles.vacancyItem}>
                    <div className={styles.vacancyIcon}></div>
                    <div className={styles.vacancyTitle}>Sản phẩm hính hãng</div>
                    <div className={styles.vacancyDesc}>Nhà phân phối chính hãng của các nhãn hàng điện thoại lớn</div>
                </div>
                <div className={styles.vacancyItem}>
                    <div className={styles.vacancyIcon}></div>
                    <div className={styles.vacancyTitle}>Giá cả hợp lý</div>
                    <div className={styles.vacancyDesc}>Cung cấp các sản phẩm chất lượng với giá cả tốt nhất</div>
                </div>
                <div className={styles.vacancyItem}>
                    <div className={styles.vacancyIcon}></div>
                    <div className={styles.vacancyTitle}>Bảo hành, hoàn trả</div>
                    <div className={styles.vacancyDesc}>
                        Chính sách bảo hành trong 2 năm, hoàn trả sản phẩm trong 24 giờ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;
