import Modal from 'react-modal';
import { API_URL } from '../const';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: 0,
    },
};

Modal.setAppElement("#root");

export const ProductModal = ({isOpen, onRequestClose, data}) => {
    if (!data) {
        return null;
    }

    return <Modal
        isOpen={isOpen}
         onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel='Product Modal'>
        <div className="product__modal">
            <img className="modal__img" src={`${API_URL}${data.img}`} alt="{data.title}" />
            <div className="modal__info">
                <div className="modal__promo">
                    <button className="modal__closelink" onClick={onRequestClose}>x</button>
                    <h2 className="modal__title">{data.title}</h2>
                    <p className="modal__price">{data.price}&nbsp;₽</p>
                </div>

                <ul className="modal__additional-items">
                    {Object.entries(data.additional).map(([key, value]) => (
                        <li className="modal__additional-item" key={key}>
                            <strong className='modal__additional-key'>{key}:</strong> <p className='modal__additional-value'>{value}</p>
                        </li>
                    ))}
                </ul>
                <div className="modal__quantity">
                    <div className="modal-item__quantity">
                        <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
                        <input className="cart-item__quantity-input" type="number" value={1}/>
                        <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
                    </div>
                    <button className="modal__quantity-link">Добавить</button>
                </div>
            </div>    
        </div>
    </Modal>;
    
};