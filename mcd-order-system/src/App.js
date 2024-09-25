import React from 'react';
import BotControl from './components/BotControl';
import OrderList from './components/OrderList';
import { useOrderController } from './hooks/useOrderController';
import './styles/App.css';

const App = () => {
  const {
    orders,
    addNormalOrder,
    addVIPOrder,
    bots,
    increaseBot,
    decreaseBot,
  } = useOrderController();

  // Separate orders based on status
  const pendingOrders = orders.filter(order => order.status === 'PENDING');
  const completedOrders = orders.filter(order => order.status === 'COMPLETE');

  return (
    <div className="App">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/mcd-logo.png`} alt="McDonald's Logo" />
      </div>
      <div className="button-container">
        <button className="order-button" onClick={addNormalOrder}>New Normal Order</button>
        <button className="order-button" onClick={addVIPOrder}>New VIP Order</button>
      </div>
      <BotControl bots={bots} increaseBot={increaseBot} decreaseBot={decreaseBot} />

      {/* Two sections for Pending and Completed Orders */}
      <div className="orders-container">
        <div className="pending-orders">
          <h2>Pending Orders</h2>
          <OrderList orders={pendingOrders} />
        </div>
        <div className="completed-orders">
          <h2>Completed Orders</h2>
          <OrderList orders={completedOrders} />
        </div>
      </div>
    </div>
  );
};

export default App;
