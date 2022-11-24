import React from 'react'

const imgs = {
  applewatchS7: new URL("../assets/imgs/applewatchS7.jpeg", import.meta.url),
  applewatchS8: new URL("../assets/imgs/applewatchS8.jpeg", import.meta.url),
  airpodspro: new URL("../assets/imgs/airpodspro.jpeg", import.meta.url),
}

const styles = {
  productInfo: "bg-[#D9D9D9] p-6",
  titleContainer: "bg-white py-3 flex font-semibold text-sm md:text-base text-center px-1 sm:px-6",
  titleProductLg: "basis-3/12",
  titleProduct: "basis-3/12 md:basis-2/12",
  itemContainer: "bg-white mt-3 flex px-1 sm:px-6",
  itemLg: "basis-3/12 py-3 text-xs sm:text-sm md:text-base my-auto",
  item: "basis-3/12 md:basis-2/12 text-center py-3 text-xs sm:text-sm md:text-base my-auto",
  hide: "hidden md:block",
  priceContainer: "flex justify-end md:text-xl font-bold my-6",
  priceContent: "text-[#2A254B]",
  totalPrice: "text-[#D82828] ml-8",
  userInfo: "p-6",
  heading: "font-bold md:text-lg",
  userInfoContainer: "my-8 md:mx-12",
  inputItemContainer: "mb-3 flex",
  title: "basis-2/12 ",
  input: "basis-10/12 outline-none border border-black rounded px-2 py-1",
  inputXs: "basis-4/12 md:basis-5/12",
  inputSm: "md:basis-6/12 lg:basis-5/12",
  inputLg: "md:basis-10/12",
  btnCheck: "basis-auto bg-[#2A254B] text-white px-3 py-2 rounded-lg ml-2 md:ml-8 hover:bg-yellow-500 transition delay-150 duration-300 ease-in-out",
  radioInput: "mr-2",
  radioLabel: "mr-8",
  btnContainer: "grid",
  btnCheckout: "px-4 py-2 bg-[#D82828] text-white font-semibold place-self-end hover:cursor-pointer animate-bounce hover:animate-none hover:text-white hover:bg-yellow-500 transition ease-in-out delay-100 duration-200",
}

function Checkout() {
  return (
    <div className={styles.checkout}>
      <div className={styles.productInfo}>
        <div className={styles.titleContainer}>
            <span className={styles.titleProductLg}>Tên sản phẩm</span>
            <span className={`${styles.titleProductLg} ${styles.hide}`}>Hình ảnh</span>
            <span className={styles.titleProduct}>Số lượng</span>
            <span className={styles.titleProduct}>Đơn giá</span>
            <span className={styles.titleProduct}>Thành tiền</span>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemLg}>ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse</div>
          <div className={`${styles.itemLg} ${styles.hide}`}>
            <img className={styles.img} src={imgs.airpodspro} alt="airpodspro" />
          </div>
          <div className={styles.item}>2</div>
          <div className={styles.item}>40.000.000đ</div>
          <div className={styles.item}>80.000.000đ</div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemLg}>ApplewatchS8 2.4GHz Wireless Gaming Mouse</div>
          <div className={`${styles.itemLg} ${styles.hide}`}>
            <img className={styles.img} src={imgs.applewatchS8} alt="airpodspro" />
          </div>
          <div className={styles.item}>2</div>
          <div className={styles.item}>40.000.000đ</div>
          <div className={styles.item}>80.000.000đ</div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemLg}>ApplewatchS8 2.4GHz Wireless Gaming Mouse</div>
          <div className={`${styles.itemLg} ${styles.hide}`}>
            <img className={styles.img} src={imgs.applewatchS7} alt="airpodspro" />
          </div>
          <div className={styles.item}>2</div>
          <div className={styles.item}>40.000.000đ</div>
          <div className={styles.item}>80.000.000đ</div>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.priceContent}>Tổng tiền:</div>
          <div className={styles.totalPrice}>142.000.000đ</div>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.heading}>Thông tin đặt hàng</div>
        <div className={styles.userInfoContainer}>
          <div className={styles.inputItemContainer}>
            <span className={styles.titleProduct}>Họ và tên:</span>
            <input className={`${styles.input} ${styles.inputSm}`} type="text" value="Trần Thị Diệp" />
          </div>
          <div className={styles.inputItemContainer}>
            <span className={styles.titleProduct}>SĐT:</span>
            <input className={`${styles.input} ${styles.inputSm}`} type="phone" value="0369652488" />
          </div>
          <div className={styles.inputItemContainer}>
            <span className={styles.titleProduct}>Email:</span>
            <input className={`${styles.input} ${styles.inputSm}`} type="email" value="tranthidiep142@gmail.com" />
          </div>
          <div className={styles.inputItemContainer}>
            <span className={styles.title}>Địa chỉ:</span>
            <input className={`${styles.input} ${styles.inputLg}`} type="text" value="AG3 - KTX Khu A ĐHQG TP.HCM" />
          </div>
          <div className={styles.inputItemContainer}>
            <span className={styles.title}>Ghi chú:</span>
            <textarea className={`${styles.input}`} name="message" rows="4">
            </textarea>
          </div>
          <div className={styles.inputItemContainer}>
            <span className={styles.title}>Mã giảm giá:</span>
            <input className={`${styles.input} ${styles.inputXs}`} type="text" />
            <button className={styles.btnCheck} type="button">Kiểm tra</button>
          </div> 
          <div className={styles.inputItemContainer}>
            <span className={styles.title}>Vận chuyển:</span>
            <input className={styles.radioInput} type="radio" id="fast" name="transport" value="fast" checked/>
            <label className={styles.radioLabel} for="fast">Hỏa tốc</label>
            <input className={styles.radioInput} type="radio" id="normal" name="transport" value="normal" />
            <label className={styles.radioLabel} for="normal">Vận chuyển thường</label>
          </div>
          <div className={styles.btnContainer}>
            <input className={styles.btnCheckout} type="submit" name="btnCheckout" value="GỬI HÀNG (COD)" />
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Checkout