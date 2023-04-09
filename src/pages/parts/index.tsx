import React, { useState } from "react";
import Head from "@/components/HeadSetter";
import Navbar from "@/components/Navbar";
import Navpane from "@/components/Navpane";
import RatingCard from "@/components/RatingCard";
import Comment from "@/components/Comment";
import AllColorStatus from "@/components/AllColorStatus";
export default function Home() {
  const [timesClicked, setTimesClicked] = useState<number>(0);

  return (
    <>
      <Head title="test" />
      <Navbar />
      <div className="main-container">
        <div className="left-col">
          <Navpane />
        </div>
        <div className="right-col">
          <div className="top">
            <ul className="breadcrumb">
              <li>
                <a href="#">parts</a>
              </li>
              <li>{">"}</li>
              <li>
                <a href="#">bricks</a>
              </li>
            </ul>
            <div className="element-name">Product Name</div>
          </div>
          <div className="center">
            <div className="element-image">
              <img
                className="element-image-actual"
                src="https://via.placeholder.com/1024x768/eee?text=4:3"
                alt=""
              />
            </div>
            <RatingCard rating={93} />
            <ul className="actions">
              <span>Actions:</span>
              <li>
                <a href="#">Change my rarity rating</a>
              </li>
              <li>
                <a href="#">Add to My Collection</a>
              </li>
              <li>
                <a href="#">Add to My Watchlist</a>
              </li>
              <li>
                <a href="#">Add photo</a>
              </li>
              <li>
                <a href="#">Submit status change</a>
              </li>
              <span>Links:</span>

              <li>
                <a href="#">bricklink</a>
              </li>
              <li>
                <a href="#">brickowl</a>
              </li>
              <li>
                <a href="#">rebrickable</a>
              </li>
            </ul>
            <fieldset className="status">
              <legend>Status</legend>
              <div className="tag-found">FOUND</div>
              <div className="status-date">as of 14 Mar 2021</div>
            </fieldset>
          </div>
          <div className="lower-center">
            <div className="color">Color</div>
            <div className="fake-hr"></div>
            <div className="lower-container">
              <div className="lower-center-left">
                <div className="tab">
                  <button className="tablinks active">Price History</button>
                  <button className="tablinks">Comments</button>
                </div>
                <div className="tabcontent pricehistory tabhidden">
                  <img className="scatter-img" src="/img/scatter-example.png" />
                </div>
                <div className="tabcontent comments">
                  <Comment id={1} />
                  <Comment id={1} />
                  <Comment id={1} />
                  <Comment id={1} />
                  <Comment id={1} />
                  <Comment id={1} />
                </div>
              </div>
              <div className="lower-center-right">
                <form id="search-form" action="/ads">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-search zen-search-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>

                  <input
                    id="searchbar"
                    name="searchbar"
                    type="text"
                    placeholder="Search..."
                  />
                </form>
                <fieldset className="other-colors">
                  <legend>other colors</legend>
                  <AllColorStatus partId={3001} />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
