import React from 'react';

const styles = {
    cate: 'flex items-center px-6 my-8',
    cateHeading: 'font-semibold basis-2/12 text-lg text-left',
    // cateHeading: "font-semibold basis-1/7",
    // cateContentContainer: "basis-6/7 ",
    cateContentContainer: 'flex gap-2 basis-10/12 flex-wrap',
    cateItem:
        'basis-1/12 px-2 py-1 border rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:text-white',
};

function Cate() {
    return (
        <div className={styles.cate}>
            <div className={styles.cateHeading}>Thương hiệu</div>
            <div className={styles.cateContentContainer}>
                <a className={styles.cateItem} href="/">
                    IphonIphonee
                </a>
                <a className={styles.cateItem} href="/">
                    SamsungIphone
                </a>
                <a className={styles.cateItem} href="/">
                    Oppo
                </a>
                <a className={styles.cateItem} href="/">
                    Xiaomi
                </a>
                <a className={styles.cateItem} href="/">
                    Realme
                </a>
                <a className={styles.cateItem} href="/">
                    Huawei
                </a>
                <a className={styles.cateItem} href="/">
                    Poco
                </a>
                <a className={styles.cateItem} href="/">
                    Nokia
                </a>
                <a className={styles.cateItem} href="/">
                    Iphone
                </a>
                <a className={styles.cateItem} href="/">
                    Samsung
                </a>
                <a className={styles.cateItem} href="/">
                    OppoIphone
                </a>
                <a className={styles.cateItem} href="/">
                    XiaomiIphone
                </a>
                <a className={styles.cateItem} href="/">
                    Realme
                </a>
                <a className={styles.cateItem} href="/">
                    Huawei
                </a>
                <a className={styles.cateItem} href="/">
                    Samsung
                </a>
            </div>
        </div>
    );
}

export default Cate;
