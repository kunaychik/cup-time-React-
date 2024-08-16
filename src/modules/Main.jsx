import { Route, Routes } from "react-router-dom"
import { Products } from "./Products"
import { Promo } from "./Promo"

export const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={
                    <>
                        <Promo />
                        <Products />
                    </>
                }/>
                <Route path="/cart" element={
                    <>
                        <p>Корзина</p>
                    </>
                }/>
            </Routes>
        </main>
    )
}