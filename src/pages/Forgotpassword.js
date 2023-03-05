import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrumb title=" Forget Password" />

      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div
              className="auth-card"
              style={{
                padding: "20px",
                backgroundColor: "white",
                width: "500px",
                margin: "30px auto",
                borderRadius: "10px",
              }}
            >
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
               
                We will send you an email to reset your password
              </p>
              <form action=" " className="d-flex flex-column gap-30">
                <CustomInput type="email" name="email" placeholder="Email" />

                <div>
                  <div className=" mt-3 d-flex  justify-content-center flex-column gap-15 align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
