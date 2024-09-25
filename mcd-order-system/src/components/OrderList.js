import React from 'react';
import '../styles/OrderList.css';

/**
 * OrderList Component
 * @param {Array} orders - An array of order objects to be displayed.
 * @param {number} orders.id - The unique identifier for each order.
 * @param {string} orders.type - The type of the order (e.g., VIP or Normal).
 * @param {string} orders.status - The current status of the order (e.g., COMPLETE or PENDING).
 * 
 * Renders a list of orders, displaying each order's ID, type, and status.
 */
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
