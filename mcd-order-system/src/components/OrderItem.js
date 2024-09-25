import React from 'react';

/**
 * OrderItem Component
 * @param {Object} order - An object representing the order details.
 * @param {number} order.id - The unique identifier for the order.
 * @param {string} order.type - The type of the order (e.g., Normal, VIP).
 * @param {string} order.status - The current status of the order (e.g., PENDING, COMPLETE).
 * 
 * Renders a single order item displaying its ID, type, and status.
 */
const OrderItem = ({ order }) => {
    return (
        <div className={`order-item ${order.status.toLowerCase()}`}>
            <p>Order #{order.id}: {order.type} - {order.status}</p>
        </div>
    );
}; 

export default OrderItem;