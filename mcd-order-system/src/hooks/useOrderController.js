import { useState, useEffect } from 'react';

// Global variable to track order IDs
let orderId = 0;

export const useOrderController = () => {

    // State to hold the list of orders and active bots
    const [orders, setOrders] = useState([]);
    const [bots, setBots] = useState([]);

    // Function to add a normal order
    const addNormalOrder = () => {
        const newOrder = { id: orderId++, type: 'Normal', status: 'PENDING' };
        // Update orders state by adding the new normal order
        setOrders((prevOrders) => [...prevOrders, newOrder]);
    };

    // Function to add a VIP order
    const addVIPOrder = () => {
        const newOrder = { id: orderId++, type: 'VIP', status: 'PENDING' };
        setOrders((prevOrders) => {
        // Separate existing orders into VIP and Normal
        const vipOrders = prevOrders.filter(order => order.type === 'VIP');
        const normalOrders = prevOrders.filter(order => order.type === 'Normal');
        return [...vipOrders, newOrder, ...normalOrders];
        });
    };

    // Function to increase the number of active bots
    const increaseBot = () => {
        setBots((prevBots) => [...prevBots, {}]); // Add a new bot (empty object)
    };

    // Function to decrease the number of active bots
    const decreaseBot = () => {
        setBots((prevBots) => prevBots.slice(0, -1)); // Remove the last bot
    };

    // Effect to process orders every 10 seconds
    useEffect(() => {
        const processOrders = () => {
        setOrders((prevOrders) => {
            const updatedOrders = [...prevOrders]; // Copy existing orders
            let pendingOrders = updatedOrders.filter(order => order.status === 'PENDING'); // Get all pending orders
    
            // Ensure each bot processes one unique pending order
            bots.forEach(() => {
            if (pendingOrders.length > 0) {
                const orderToProcess = pendingOrders.shift(); // Take the first pending order and remove it from the array
                const updatedIndex = updatedOrders.findIndex(order => order.id === orderToProcess.id);
    
                // Mark the order as complete
                if (updatedIndex !== -1) {
                updatedOrders[updatedIndex] = {
                    ...updatedOrders[updatedIndex],
                    status: 'COMPLETE', // Update the status to complete
                };
                }
            }
            });
    
            return updatedOrders;
        });
        };
    
        // Set an interval to process orders every 10 seconds
        const interval = setInterval(() => {
        processOrders();
        }, 10000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [bots, orders]);   // Dependencies to run effect when bots or orders change

    return { orders, addNormalOrder, addVIPOrder, bots, increaseBot, decreaseBot };
};
