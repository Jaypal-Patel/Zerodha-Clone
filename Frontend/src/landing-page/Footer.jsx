import React from 'react';
import "./home/Home.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container mt-5 pt-5 ps-5 pe-5">
        <div className="row ps-5 pe-5">
          <div className="col-3 footerIcon pe-5">
            <img style={{ width: "80%" }} src="./media/image/footer.svg" alt="footer" />
            <p className="mb-4 mt-4">© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="row border-bottom">
              <div className="col-3 mb-3">
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              </div>
              <div className="col-3">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
              </div>
              <div className="col-3">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </div>
              <div className="col-3">
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="row">
              <div className="col-3 mt-3">
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
              </div>
              <div className="col-3 mt-3">
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
              <div className="col-3 mt-3">
                <a href="#"><i class="fa-brands fa-telegram"></i></a>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
          <div className="col-3 footerLink">
            <h4>Company</h4>
            <p><a href="#">About</a></p>
            <p><a href="#">Products</a></p>
            <p><a href="#">Pricing</a></p>
            <p><a href="#">Referral programme</a></p>
            <p><a href="#">Careers</a></p>
            <p><a href="#">Zerodha.tech</a></p>
            <p><a href="#">Press & media</a></p>
            <p><a href="#">Zerodha Cares (CSR)</a></p>
          </div>
          <div className="col-3 footerLink">
            <h4>Support</h4>
            <p><a href="#">Contact us</a></p>
            <p><a href="#">Support portal</a></p>
            <p><a href="#">Z-Connect blog</a></p>
            <p><a href="#">List of charges</a></p>
            <p><a href="#">Downloads & resources</a></p>
            <p><a href="#">Videos</a></p>
            <p><a href="#">Market overview</a></p>
            <p><a href="#">How to file a complaint?</a></p>
            <p><a href="#">Status of your complaints</a></p>
          </div>
          <div className="col-3 footerLink">
            <h4>Account</h4>
            <p><a href="#">Open an account</a></p>
            <p><a href="#">Fund transfer</a></p>
          </div>
          <p className="footerPera mt-5">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@zerodha.com</a>, for DP related to <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p className="footerPera">Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p className="footerPera"><a href="#">Smart Online Dispute Resolution </a>|<a href="#"> Grievances Redressal Mechanism</a></p>
          <p className="footerPera">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p className="footerPera">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p className="footerPera">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#">create a ticket here</a>.</p>
          <nav className="ms-5 mb-3">
            <span className="footerSpan ms-5"><a href="#"></a>NSE</span>
            <span className="footerSpan"><a href="#"></a>BSE</span>
            <span className="footerSpan"><a href="#"></a>MCX</span>
            <span className="footerSpan"><a href="#"></a>Terms & conditions</span>
            <span className="footerSpan"><a href="#"></a>Policies & procedures</span>
            <span className="footerSpan"><a href="#"></a>Privacy policy</span>
            <span className="footerSpan"><a href="#"></a>Disclosure</span>
            <span className="footerSpan"><a href="#"></a>For investor's attention</span>
            <span className="footerSpan"><a href="#"></a>Investor charter</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;