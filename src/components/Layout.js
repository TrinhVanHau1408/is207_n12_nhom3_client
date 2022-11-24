import React from 'react'
import Footer from './Footer'

const styles={
    main: "",
    footer: "",
}

function Layout({children}) {
  return (
    <div className="layout">
        {/* <Header /> */}
        <div className={styles.main}>{children}</div>
        <div className={styles.footer}>
            <Footer />
        </div>
    </div>
  )
}

export default Layout