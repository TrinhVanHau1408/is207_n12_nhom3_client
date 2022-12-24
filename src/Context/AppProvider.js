import React, { useContext, useState, useEffect }from 'react';
import { AuthContext } from '~/Context/AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const {user} = React.useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const [cartChange, setCartChange] = useState(0);
    const [cartId, setCartId] = useState([]);
    const [isOrdering, setIsOrdering] = useState([]);
    // console.log(user);
    useEffect(() => {
        if (user) {
            fetch('/api/cart/customer/'+user.id)
            .then(data => data.json())
            .then(res => setCarts(res.cart))
            .catch(err => console.log(err))
        }
        console.log( carts)
    }, [user, cartChange, isOrdering])
    
    return (
        <AppContext.Provider value={{carts, setCartChange, cartId ,setCartId, setIsOrdering}}>
              {children}
        </AppContext.Provider>
          
    )
}