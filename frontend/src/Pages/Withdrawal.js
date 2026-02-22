import React, { useState } from 'react';
import Navbar from '../components/Designer/NavBar'
import BankTransferImg from '../assets/img/BankTransfer.png'
import CashPlusImg from '../assets/img/CashPlus.png'
import WafaCashImg from '../assets/img/WafaCash.png'
import MyRequestData from '../components/Designer/MyRequestData'
import CashPlusComponent from '../components/Designer/CashPlus'
import WafaCashComponent from '../components/Designer/WafaCash';
import BankTransfer from '../components/Designer/BankTransfer';
import RequestPayment from '../components/Designer/RequestPayment';

function Withdrawal() {
  const [isCashPlusOpen, setCashPlusOpen] = useState(false);
  const [isWafaCashOpen, setWafaCashOpen] = useState(false);
  const [isBankTransferOpen, setBankTransferOpen] = useState(false);
  const [isRequestPaymentOpen, setRequestPaymentOpen] = useState(false);

  const openCashPlusPopup = () => {
    setCashPlusOpen(true);
  };

  const closeCashPlusPopup = () => {
    setCashPlusOpen(false);
  };

  const openWafaCashPopup = () => {
    setWafaCashOpen(true);
  };

  const closeWafaCashPopup = () => {
    setWafaCashOpen(false);
  };

  const openBankTransferPopup = () => {
    setBankTransferOpen(true);
  };

  const closeBankTransferPopup = () => {
    setBankTransferOpen(false);
  };

  const openRequestPaymentPopup = () => {
    setRequestPaymentOpen(true);
  };

  const closeRequestPaymentPopup = () => {
    setRequestPaymentOpen(false);
  };
  return (
    <div>
      <Navbar />
      <div className='withdrawal_container'>
        <h3>Withdrawals Methods</h3>
        <p>You have no payment method yet!</p>
        <div className='withdrawal_Methods_Container'>
          <div className='withdrawal_Method'>
            <img src={BankTransferImg} alt='Bank Transfer' />
            <button className='primaryButton' onClick={openBankTransferPopup}>Set Payment Method</button>
          </div>
          <div className='withdrawal_Method'>
            <img src={CashPlusImg} alt='CashPlus' />
            <button className='primaryButton' onClick={openCashPlusPopup}>Set Payment Method</button>
          </div>
          <div className='withdrawal_Method'>
            <img src={WafaCashImg} alt='WafaCash' />
            <button className='primaryButton' onClick={openWafaCashPopup}>Set Payment Method</button>
          </div>
        </div>
        <div className='My_Requests_Container'>
          <div className='My_Request_Header'>
            <div>
              <h3>My Request</h3>
              <p>The minimum amount is 100DH !</p>
            </div>
            <button className='primaryButton' onClick={openRequestPaymentPopup}>Request Payment</button>
          </div>
          <div className='My_Request_Data'>
            <MyRequestData />
          </div>
        </div>
      </div>
      <CashPlusComponent isOpen={isCashPlusOpen} onClose={closeCashPlusPopup} />
      <WafaCashComponent isOpen={isWafaCashOpen} onClose={closeWafaCashPopup} />
      <BankTransfer isOpen={isBankTransferOpen} onClose={closeBankTransferPopup} />
      <RequestPayment isOpen={isRequestPaymentOpen} onClose={closeRequestPaymentPopup} />
    </div>
  )
}

export default Withdrawal