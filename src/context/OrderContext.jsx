import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvaider = ({children}) => {

    const [OrderDetails, setOrderDetails] = useState({
        name: "",
        phone: "",
        address: "",
        payment: "cash",
    })

    const updateOrderDetails = (field, value) => {
        setOrderDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    }

    const clearOrderDetails = () => {
        setOrderDetails({
            name: "",
            phone: "",
            address: "",
            payment: "cash",
        })
    }

    return (
        <OrderContext.Provider value={{ OrderDetails, updateOrderDetails, clearOrderDetails}}>
            {children}
    </OrderContext.Provider>)
}

export const useOrder = () => useContext(OrderContext);