import React, {useEffect, useState}from 'react';
// import { useNavigate } from 'react-router-dom';
import {Spin} from 'antd';
import { useLocalStorage } from '~/hooks/useLocalStorage';
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [savedLocalUser, setSavedLocalUser, clearLocalStorage] = useLocalStorage('user');

    const [user, setUser] = useState(savedLocalUser());
   
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const [isLogout, setIsLogout] = useState(false)
    const [isErrLogin, setIsErrLogin] = useState(false)
  
    
    React.useEffect(() => {

        console.log({userName, password})
        if (userName != '' && password != '') {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    userName: userName, 
                    password: password
                })
            };
            fetch('/api/customer/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.customer != null && data.customer != undefined) { 
                  
                        if (Object.keys(data.customer).length > 0) 
                        {
                            const {customer:{ id, name, imgUrl, gender, phoneNumber, email, address }} = data;
        
                            setUser({ id, name, imgUrl, gender, phoneNumber, email, address });
        
                            setSavedLocalUser({ id, name, imgUrl, gender, phoneNumber, email, address }); 
        
                            window.location.href = '/';
                            console.log({ id, name, imgUrl, gender, phoneNumber, email, address })
                            
                        }
                    
                } else {
                    setIsErrLogin(true)
                }
            })
                setIsLoading(false);
        }

        }, [userName, password]);

  
        console.log('user', user)

  
    return (
        <AuthContext.Provider value={ {user, setUser , setUserName, setPassword, setIsLoading, setIsLogout, isErrLogin } }>
              { false ? <Spin /> :children}
        </AuthContext.Provider>
          
    )
}
