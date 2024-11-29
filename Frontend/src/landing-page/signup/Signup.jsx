import React, { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="container m-5">
        <div className="row pt-5 px-5">
          <div className="col-7 text-end p-5">
            <img
              src="./media/image/singup.png"
              alt="singup-image"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-5 p-5 mt-3">
            <h2>Signup now</h2>
            <p className="opacity-50 fs-5">
              Or track your existing application.
            </p>
            <div>
              <>
                <Button
                  sx={{ marginTop: "10px", marginLeft: "15px" }}
                  variant="contained"
                  color="primary"
                >
                  Verify OTP
                </Button>
              </>

              <Button
                sx={{ marginTop: "10px", marginLeft: "0" }}
                variant="contained"
                color="primary"
              >
                Send OTP
              </Button>

              <div style={{ marginTop: "10px" }} id="recaptcha"></div>
            </div>

            <a style={{ color: "#377ED1", fontSize: "0.8rem" }} href="#">
              Want to open an NRI account?
            </a>
          </div>
        </div>
        <div className="text-center px-5 mx-5 opacity-50 pb-5">
          <p>
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit <a href="#">this article</a> to
            know more.
          </p>
          <p>
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the <a href="#">offline forms</a>. For
            help, <a href="#">click here</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
