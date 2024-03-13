import { createContext, useContext, useState } from "react";

const Notification = ({message, severity}) => {
    
    const background = {
        success: 'green',
        danger: 'red',
        warning: 'orange',
        default: 'blue'
    }

    const notificationStyles = {
        position: 'absolute', 
        top: 100,
        right: 30,
        padding: '20px',
        backgroundColor: background[severity] || background.default,
        color: 'white'
    }    

    if(message === '') return;
    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}


const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('succes')

    const setNotification = (sev, msg) => {
        setMessage(msg);
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        }, 3000)
        
    }

    return (
        <NotificationContext.Provider value={{ setNotification}}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
