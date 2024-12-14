import React from "react";

function Footer() {
  return (
    <footer className="border-top mt-5" style={{backgroundColor:'rgb(250,250,250)'}}>
    <div className="container mt-5" >
      <div className="row">
        <div className="col">
          <img
            src="media/image/logomain.svg"
            style={{ width: "45%" }}
            alt="logo"
          />
          <p style={{fontSize:'0.90rem'}} className="mt-4  text-secondary lh-lg">&copy; 2010 - 2024, Zerodha Broking Ltd.  All rights reserved</p>
          <hr></hr>
        </div>
        <div className="col ">
          <h5 className="lh-lg">Company</h5>
          <a className="text-muted lh-lg fw-medium">About</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Product</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Pricing</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Referral programme</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Careers</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Zerodha.tech</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Press & media</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Zerodha cares (CSR)</a>
          
        </div>
        <div className="col">
          <h5 className="lh-lg">Support</h5>
          <a className="text-muted  lh-lg fw-medium">Contact us</a>
          <br></br>
          <a className="text-muted  lh-lg fw-medium">Support portal</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Z-Connect blog</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">List of charge</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Downloads & resources</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Videos</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Markets overview</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">How to file & complaint</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Status of your & complaints</a>
          
        </div>
        <div className="col">
          <h5 className="lh-lg">Accounts</h5>
          <a className="text-muted lh-lg fw-medium">Open an account</a>
          <br></br>
          <a className="text-muted lh-lg fw-medium">Fund transfer</a>
        </div>
      </div>
      <div className="text-small mt-5 text-muted">
      <p className="mt-4" style={{fontSize:'0.7rem'}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="">complaints@zerodha.com,</a> for DP related to <a href="">dp@zerodha.com,</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      <p  style={{fontSize:'0.7rem'}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
      <a href="" style={{fontSize:'0.8rem'}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
      <p  style={{fontSize:'0.7rem'}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing</p>
      <p  style={{fontSize:'0.7rem'}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
      <p  style={{fontSize:'0.7rem'}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here</a></p>
      </div>    
    </div>
    <div  className="container d-flex justify-content-evenly mb-4">
        <a href="" className="text-muted">NSE</a>
        <a href="" className="text-muted">BSE</a>
        <a href="" className="text-muted">Termx & condition</a>
        <a href="" className="text-muted">Policies & procedures</a>
        <a href="" className="text-muted">Privacy policy</a>
        <a href="" className="text-muted">Disclosure</a>
        <a href="" className="text-muted">For inverster's attention</a>
        <a href="" className="text-muted">Inverste charter</a>
    </div>
    </footer>
  );
}

export default Footer;
