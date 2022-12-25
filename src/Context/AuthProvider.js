import React, {useEffect, useState}from 'react';
// import { useNavigate } from 'react-router-dom';
import {Spin} from 'antd';
import { useLocalStorage } from '~/hooks/useLocalStorage';
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [savedLocalUser, setSavedLocalUser, clearLocalStorage] = useLocalStorage('user');

    const [user, setUser] = useState(savedLocalUser()?savedLocalUser():{});
   
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
  
    React.useEffect(() => {

            if (savedLocalUser() == null) {
                console.log("null user")
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
                        const {customer:{ id, name, imgUrl, gender, phoneNumber, email, address }} = data;

                        setUser({ id, name, imgUrl, gender, phoneNumber, email, address });

                        setSavedLocalUser({ id, name, imgUrl, gender, phoneNumber, email, address });
                    });
                    
                    setIsLoading(false);
                }
                
                setIsLoading(false);
    }, [userName, password]);

    // console.log('user', user)
    // useEffect(() => {
    //     if (!isLoading) setSavedLocalUser(user);
    // }, [user, setSavedLocalUser])
   
    // console.log('auth', savedLocalUser(), userName, password)
    return (
        <AuthContext.Provider value={ {user, setUser , setUserName, setPassword, setIsLoading } }>
              { isLoading ? <Spin /> :children}
        </AuthContext.Provider>
          
    )
}
