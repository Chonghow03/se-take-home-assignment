import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div className={`order-item ${order.status.toLowerCase()}`}>
            <p>Order #{order.id}: {order.type} - {order.status}</p>
        </div>
    );
};

export default OrderItem;