import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://random-quote-generator2.p.rapidapi.com/randomQuote",
        headers: {
          "X-RapidAPI-Key":
            "4a8a6bcb8fmsh61fec7ca57c24bdp1b025bjsn38ff7c91c81b",
          "X-RapidAPI-Host": "random-quote-generator2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const quoto = response.data[0];
        // console.log(response.data[0]);

        setQuote(quoto.Quote);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    fetchData(); // Call the fetchData function to reload the data
  };

  // const clickfun = () => {
  //   alert("click hogya bhai");
  // };

  return (
    <>
      {/* Your JSX content goes here */}

      <div className="my-button">
        <button onClick={handleButtonClick}>click me</button>
      </div>

      <div className="quote-container">
        <p className="quoteText">{quote}</p>
        {/* <p>{setQuote}</p> */}
      </div>

      <header>
        <nav className="navbar">
          <img className="logo" src="images/logo.png" alt="" />

          <ul>
            <li>stocks</li>
            <li>Exchanges</li>
            <li>Community</li>
            <li>Trades</li>
          </ul>
          <img className="search-icon" src="images/Vector (1).png" alt="" />
        </nav>
      </header>

      <div className="container1">
        <div className="h1">
          <div className="head-heading">Today's stock Prices By Market Cap</div>
          <div className="corr-flex">
            <p>The global stock market cap today is </p>
            <p className="green"> $811.7B</p>
            <p>, &#8595;</p>
            <p className="red"> 0.17%</p>
            <p>decrease in the last 24 hours. </p>
          </div>
        </div>

        {/* <!-- chart here --> */}

        <div className="chart-container">
          <p>chart here</p>
        </div>
        {/* 
<!-- <div className="chart-container">

    <div className="chart-heading chart-format">
        <p>Name</p>
        <p>Price</p>
        <p>24 H change</p>
        <p>Chart</p>
        <p>Marketcap</p>

    </div>


    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/1024px-Bitcoin.jpg" alt="">
            <p>Bitcoin</p>

        </div>
        <p>$3625.24</p>
        <p className="green">+2.4%</p>
        <img src="images/Vector 3.png" alt="">
        <p>$320,893,271,955</p>

    </div>


    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/png-transparent-ethereum-eth-hd-logo.png" alt="">
            <p>Ethere</p>

        </div>
        <p>$1218.18</p>
        <p className="red">-0.7%</p>
        <img src="images/Vector 5.png" alt="">
        <p>$148,563,792,762</p>

    </div>

    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/Shiba_Inu_coin_logo.png" alt="">
            <p>ShibIn</p>

        </div>
        <p>$3625.24</p>
        <p className="green">+2.4%</p>
        <img src="images/Vector 3.png" alt="">
        <p>$320,893,271,955</p>

    </div>


    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/1024px-Bitcoin.jpg" alt="">
            <p>Bitcoin</p>

        </div>
        <p>$3625.24</p>
        <p className="green">+2.4%</p>
        <img src="images/Vector 3.png" alt="">
        <p>$320,893,271,955</p>

    </div>


    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/png-transparent-ethereum-eth-hd-logo.png" alt="">
            <p>Ethere</p>

        </div>
        <p>$1218.18</p>
        <p className="red">-0.7%</p>
        <img src="images/Vector 5.png" alt="">
        <p>$148,563,792,762</p>

    </div>

    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/Shiba_Inu_coin_logo.png" alt="">
            <p>ShibIn</p>

        </div>
        <p>$3625.24</p>
        <p className="green">+2.4%</p>
        <img src="images/Vector 3.png" alt="">
        <p>$320,893,271,955</p>

    </div>


    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/1024px-Bitcoin.jpg" alt="">
            <p>Bitcoin</p>

        </div>
        <p>$3625.24</p>
        <p className="green">+2.4%</p>
        <img src="images/Vector 3.png" alt="">
        <p>$320,893,271,955</p>

    </div>


    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/png-transparent-ethereum-eth-hd-logo.png" alt="">
            <p>Ethere</p>

        </div>
        <p>$1218.18</p>
        <p className="red">-0.7%</p>
        <img src="images/Vector 5.png" alt="">
        <p>$148,563,792,762</p>

    </div>

    <div className="chart-content chart-format">
        <div className="chart-names">
            <img src="images/Shiba_Inu_coin_logo.png" alt="">
            <p>ShibIn</p>

        </div>
        <p>$3625.24</p>
        <p className="green">+2.4%</p>
        <img src="images/Vector 3.png" alt="">
        <p>$320,893,271,955</p>

    </div>


</div> --> */}
      </div>

      <div className="btn-back">
        <button className="btn view-all-btn">View All</button>
      </div>

      <div className="container2">
        <img src="images/map.png" alt="" />
        <div className="right-content">
          <h2>We are the most trusted stock Platform</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio matti
          </p>
          {/* <!-- three rows with logo and text --> */}

          <div className="platform-info">
            <div className="first information">
              <img src="images/Vector (2).png" alt="logo_here" />
              <div className="rightcontext">
                <h2>clarity</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing .</p>
              </div>
            </div>

            <div className="second information">
              <img src="images/Vector (3).png" alt="logo_here" />
              <div className="rightcontext">
                <h2>clarity</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>

            <div className="third information">
              <img src="images/Vector (4).png" alt="logo_here" />
              <div className="rightcontext">
                <h2>clarity</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="left-part">
          <div className="left-align-context">
            <h2>Reason to invest in stock in 2024</h2>
          </div>

          <div className="reason-content">
            <div className="investcrypto-heading">
              <img src="images/Vector.png" alt="" />
            </div>
            <div className="reson-align-content">
              <h3>Buying Bitcoin in legal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                className aptent taciti sociosqu ad.
              </p>
            </div>
          </div>
          <div className="reason-content">
            <div className="investcrypto-heading">
              <img src="images/Vector.png" alt="" />
            </div>
            <div className="reson-align-content">
              <h3>Buying Bitcoin in legal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                className aptent taciti sociosqu ad.
              </p>
            </div>
          </div>
          <div className="reason-content">
            <div className="investcrypto-heading">
              <img src="images/Vector.png" alt="" />
            </div>
            <div className="reson-align-content">
              <h3>Buying Bitcoin in legal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                className aptent taciti sociosqu ad.
              </p>
            </div>
          </div>
        </div>

        <div className="right-part">
          <img className="values" src="images/Group 48.png" alt="" />
          <img className="chart-wave" src="images/Group 37.png" alt="" />
        </div>
      </div>
      <footer>
        <div className="last-section">
          <div className="left-part-footer">
            <img src="images/logo.png" alt="" />
            <p>
              CoinIntention's mission is to make investing in stocks easy and
              efficient. CoinIntention tracks various data of stocks and thus
              offers its users an overview of all stocks available on the market
              and their performance, market capitalization, trading volume, etc.
            </p>
          </div>

          <div className="right-part-footer">
            <div className="partx">
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Community rules</li>
                <li>Disclaimer</li>
                <li>Methodology</li>
              </ul>
            </div>
            <div className="partx">
              <h4>Support</h4>
              <ul>
                <li>Requested form</li>
                <li>Contact support</li>
                <li>FAQ's</li>
                <li>Glossary</li>
              </ul>
            </div>

            <div className="partx">
              <h4>Socials</h4>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
