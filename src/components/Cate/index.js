import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const styles = {
    cate: 'flex items-center px-6 py-8 bg-gray-100',
    cateHeading: 'font-semibold basis-2/12 text-lg text-left',
    // cateHeading: "font-semibold basis-1/7",
    // cateContentContainer: "basis-6/7 ",
    cateContentContainer: 'flex gap-2 basis-10/12 flex-wrap',
    cateItem:
        'basis-1/12 px-2 py-1 border border-indigo-500 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:text-white',
};

function Cate() {

    const [cates, setCates] = useState([]);

    useEffect(() => {
        fetch('/api/category')
        .then(res => res.json())
        .then(data => setCates(data.data));
    },[])
    return (
        <div className={styles.cate}>
            <div className={styles.cateHeading}>Thương hiệu</div>
            <div className={styles.cateContentContainer} style={{ textAlign: 'center' }}>
                {(cates!=null && cates!=undefined) && 
                    cates.map(cate => (
                            <Link key={cate.id} className={styles.cateItem} to={'/phone/'+cate.id}>
                                {cate.name}
                            </Link>
                    ))
                }
               
                
            </div>
        </div>
    );
}

export default Cate;
