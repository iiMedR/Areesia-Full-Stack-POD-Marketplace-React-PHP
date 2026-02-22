import React from 'react';
import Navbar from '../components/Designer/NavBar';
import OrdersIcon from '../assets/img/Orders.png'
import ProgressIcon from '../assets/img/Progress.png';
import ShippedIcon from '../assets/img/Shipped.png';
import ConfirmedIcon from '../assets/img/Confirmed.png';
import ReturnedIcon from '../assets/img/Returned.png';


function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className='dashboard-container'>
      <div className='dashboard-left-side'>
          <div className='left-side-header'>
            <h2>Your Orders</h2>
            <img src={OrdersIcon} alt="Orders" className='orders-icon'/>
          </div>
          <div className='orders-sections'>
            <div className='orders-section'>
              <p className='section-title'>Today</p>
              <p className='section-number'>3</p>
            </div>
            <div className='orders-section'>
              <p className='section-title'>This Week</p>
              <p className='section-number'>12</p>
            </div>
            <div className='orders-section'>
              <p className='section-title'>This Month</p>
              <p className='section-number'>120</p>
            </div>
          </div>
        </div>
        <div className='dashboard-right-side'>
          <div className='dashboard-row'>
            <div className='dashboard-block'>
              <div className='block-header'>
                <h3>In Progress</h3>
                <img src={ProgressIcon} alt="In Progress" />
              </div>
              <p className='block-number'>6</p>
            </div>
            <div className='dashboard-block'>
              <div className='block-header'>
                <h3>Shipped</h3>
                <img src={ShippedIcon} alt="In Progress" />
              </div>
              <p className='block-number'>6</p>
            </div>
          </div>
          <div className='dashboard-row'>
          <div className='dashboard-block'>
              <div className='block-header'>
                <h3>Confirmed</h3>
                <img src={ConfirmedIcon} alt="In Progress" />
              </div>
              <p className='block-number'>4</p>
            </div>
            <div className='dashboard-block'>
              <div className='block-header'>
                <h3>Returned</h3>
                <img src={ReturnedIcon} alt="In Progress" />
              </div>
              <p className='block-number'>2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
