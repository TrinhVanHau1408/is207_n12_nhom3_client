import React, { useContext, useState, useEffect }from 'react';
import { AuthContext } from '~/Context/AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const {user} = React.useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const [cartChange, setCartChange] = useState(0);
    const [cartId, setCartId] = useState([]);
    const [isOrdering, setIsOrdering] = useState([]);
    const [selectedOrderId, setSlectedOrder] = useState(0);
    const [selectedCartId, setSelectedCartId] = useState(0);
    // console.log(user);
    useEffect(() => {
        if (user != null && user != undefined) {
            fetch('/api/cart/customer/'+user.id)
            .then(data => data.json())
            .then(res => setCarts(res.cart))
            .catch(err => console.log(err))
        }
    }, [user, cartChange, isOrdering, selectedCartId])
    
    return (
        <AppContext.Provider value={{carts, setCartChange, cartId ,setCartId, setIsOrdering, setSlectedOrder, cartChange, setSelectedCartId }}>
              {children}
        </AppContext.Provider>
          
    )
}