import React, { useContext, useState, useEffect }from 'react';
import { AuthContext } from '~/Context/AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const {user} = React.useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const [cartId, setCartId] = useState(0);
    // console.log(user);
    useEffect(() => {
        if (user) {
            fetch('/api/cart/customer/'+user.id)
            .then(data => data.json())
            .then(res => setCarts(res.cart))
            .catch(err => console.log(err))
        }
        console.log( carts)
    }, [user, cartId])

    console.log("App",cartId)
    return (
        <AppContext.Provider value={{carts, setCartId}}>
              {children}
        </AppContext.Provider>
          
    )
}