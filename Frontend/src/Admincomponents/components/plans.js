import React, { useEffect, useState } from "react";
import benifit1 from "../images/benifit1.webp";
import benifit2 from "../images/benifit2.webp";
import benifit3 from "../images/benifit3.webp";
import benifit4 from "../images/benifit4.webp";
import benifit5 from "../images/benifit5.webp";
import benifit6 from "../images/benifit6.webp";
import { useData } from './Datacontext';
import Mainnavbar from "./Mainnavbar";
import axios from "axios";
import Footer from "./Footer";


const Plans = () => {
  const {addToCart} = useData();

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/packages")
      .then((res) => {
        // console.log(res)
        res.data.map((item) => {
          return setPackages((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Mainnavbar/>
      <div className="planbannerdiv">
        <h1 className="text-center text-white">
          Choose the Care Your Parents Deserve
        </h1>
        <h5 className="text-center text-white">
          We have all their needs covered.
        </h5>
      
      </div>
    <div className="d-flex flex-wrap gap-5 justify-content-center p-2 p-md-5 plansmaindiv">
          {packages.map((item, index)=>(
          <div id="engback" className="card p-2"  key={index}>
            <div className="card-body">
              <h3 className="card-title">{item.packagename}</h3>
             
             <p>{item.packagedescription}</p>
            
              <h3>
                &#8377;{item.amount} <span className="fs-6">per month</span>
              </h3>
              <div className="listdiv">
              <ul className="list-unstyled lh-lg mt-4">
                {(item.service1 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service1}
                </li>
                ) : ("")}
                {(item.service2 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service2}
                </li>
                ) : ("")}
                {(item.service3 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i>{item.service3}
                </li>
                ) : ("")}
                {(item.service4 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service4}
                </li>
                ) : ("")}
                {(item.service5 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service5}
                </li>
                ) : ("")}
                {(item.service6 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service6}
                </li>
                ) : ("")}
                {(item.service7 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service7}
                </li>
                ) : ("")}
                {(item.service8 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service8}
                </li>
                ) : ("")}
                {(item.service9 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service9}
                </li>
                ) : ("")}
                {(item.service10 !== "") ? (
                <li>
                  <i className="bi bi-chevron-double-right"></i> {item.service10}
                </li>
                ) : ("")}
              </ul>
              </div>
            </div>
            <div className="card-footer text-center border-0">
              <button id="engbtn" className="ps-4 pe-4 pt-2 pb-2 rounded-pill"
              onClick={() => addToCart({ planName: item.packagename, amount: item.amount})}
              >
                Add to cart
              </button>
            </div>
          </div>
          ))}
        </div>

    <div className="benifitsmaindiv">
          <h2 className="ms-5 ps-5">Benefits</h2>
          <div className="d-flex flex-wrap justify-content-center benifitsdiv">
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit1} alt="benefit1" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Emergency Support</h5>
                <p>
                  Get 24*7 emergency support with ambulance coordination and
                  on-call doctor assistance.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit2} alt="benefit2" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Emoha Companion</h5>
                <p>
                  Our Emoha Companion visits once-a-month to check vitals,
                  update medical records & more.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit3} alt="benefit3" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Doctor's Appointment</h5>
                <p>
                  Get doctor's appointment arranged for a home visit or a
                  tele-consultation.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit4} alt="benefit4" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Care Calls by Emoha Daughter</h5>
                <p>
                  Get regular care calls from your Emoha Daughter to check on
                  your health and well-being.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit5} alt="benefit5" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Ambulance Expense</h5>
                <p>
                  Get all ambulance expenses within the city limit covered by
                  Emoha twice a year.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit6} alt="benefit6" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Virtual Community</h5>
                <p>
                  Access our interactive community with MOH TV shows, Online
                  Clubs, Offline Events & more.
                </p>
              </div>
            </div>
          </div>
</div>
<Footer/>
    </>
  );
};

export default Plans;
