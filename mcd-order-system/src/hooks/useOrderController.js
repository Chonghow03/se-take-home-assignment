import { useState, useEffect } from 'react';

let orderId = 0;

export const useOrderController = () => {
  const [orders, setOrders] = useState([]);
  const [bots, setBots] = useState([]);

  const addNormalOrder = () => {
    const newOrder = { id: orderId++, type: 'Normal', status: 'PENDING' };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const addVIPOrder = () => {
    const newOrder = { id: orderId++, type: 'VIP', status: 'PENDING' };
    setOrders((prevOrders) => {
      const vipOrders = prevOrders.filter(order => order.type === 'VIP');
      const normalOrders = prevOrders.filter(order => order.type === 'Normal');
      return [...vipOrders, newOrder, ...normalOrders];
    });
  };

  const increaseBot = () => {
    setBots((prevBots) => [...prevBots, {}]);
  };

  const decreaseBot = () => {
    setBots((prevBots) => prevBots.slice(0, -1));
  };

  useEffect(() => {
    const processOrders = () => {
      setOrders((prevOrders) => {
        const updatedOrders = [...prevOrders];
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
                status: 'COMPLETE',
              };
            }
          }
        });
  
        return updatedOrders;
      });
    };
  
    const interval = setInterval(() => {
      processOrders();
    }, 10000);
  
    return () => clearInterval(interval);
  }, [bots, orders]);  

  return { orders, addNormalOrder, addVIPOrder, bots, increaseBot, decreaseBot };
};
