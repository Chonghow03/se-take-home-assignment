import React from 'react';
import '../styles/OrderList.css';

const OrderList = ({ orders }) => {
    return (
        <div className="order-list">
            {orders.map((order) => (
                <div className={`order-item ${order.type === 'VIP' ? 'vip' : 'normal'}`} key={order.id}>
                    <span>Order ID: {order.id}</span>
                    <span className={`${order.status === 'COMPLETE' ? 'success' : 'pending'}`}>
                        {order.status}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default OrderList;
