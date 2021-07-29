import React from 'react'
import Varane from "../src/img/raphael-varane.jpg";
import Messi from "../src/img/Lionel_Messi.jpg";
import Ronaldo from "../src/img/cristiano-ronaldo.jpg";
import Kounde from "../src/img/jules-kounde.jpg";
import Harry from "../src/img/harrykane.jpg";
import Sancho from "../src/img/sancho.jpeg";




const Service = () => {
  return (
    <div>
      <div className="text-center">
        <h1>LATEST TRANSFER NEWS</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 ,mx-auto">
            <div className="row gy-5 ml-5 ">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img class="card-img-top" src={Varane} height="300" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Raphael varane</h5>
                    <p class="card-text">OFFICIAL: varane to manutd HERE WE GO OFFICIALY CONFIRMED manchester united is delighted to announce that the club has reached an agreement for raphael varane.</p>
                    <a href="https://www.skysports.com/football/news/11667/12365636/raphael-varane-is-the-france-defender-the-missing-piece-in-manchester-uniteds-jigsaw" class="btn btn-outline-danger">more</a>
                  </div>
                 
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
              <div class="card" >
                <img class="card-img-top" src={Messi} height="300" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Lionel messi</h5>
                  <p class="card-text">no doubt messi will stay at barcelona but there are still complications in renewal of his contract. after renewal messi's new contract with barcelona will be until june 2026.</p>
                  <a href="https://www.sportskeeda.com/football/rumor-barcelona-set-date-lionel-messi-s-contract-renewal-reports" class="btn btn-outline-danger">more</a>
                </div>
               
              </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card" >
              <img class="card-img-top" src={Ronaldo} height="300" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Christiano ronaldo</h5>
                <p class="card-text">Christiano's future announced! he will stay at juventus , juventus president pavel nedved confirmed that .</p>
                <a href="https://www.vanguardngr.com/2021/07/juventus-wont-offer-ronaldo-new-deal-after-contract-expires-report/" class="btn btn-outline-danger">more</a>
              </div>
             
            </div>
          </div>
          <div className="col-md-4 col-10 mx-auto">
          <div class="card" >
            <img class="card-img-top" src={Kounde} height="300" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Jules kounde</h5>
              <p class="card-text">jules kounde agreed personal terms with chelsea until june 2026 and it could be a swap deal with sevilla.</p>
              <a href="https://www.skysports.com/football/news/11095/12365512/jules-kounde-chelsea-in-talks-with-sevilla-over-signing-france-centre-back" class="btn btn-outline-danger">more</a>
            </div>
           
          </div>
        </div>
        <div className="col-md-4 col-10 mx-auto">
        <div class="card" >
          <img class="card-img-top" src={Harry} height="300" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Harry kane</h5>
            <p class="card-text">there's still no agreement reached now between manchester city and tottenham for kane . Tottenham are denying rumours about harry kane set to join manchester city, same from city side.</p>
            <a href="https://www.mirror.co.uk/sport/football/transfer-news/transfer-news-live-kane-neves-24631957" class="btn btn-outline-danger">more</a>
          </div>
         
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
      <div class="card" >
        <img class="card-img-top" src={Sancho} height="300"alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Jadon sancho</h5>
          <p class="card-text">after 16 months of negotiations sancho joins man united on a permanent deal from borussia dortmund.</p>
          <a href="https://www.manchestereveningnews.co.uk/sport/football/manchester-united-sancho-shirt-numbers-21143555" class="btn btn-outline-danger">more</a>
        </div>
       
      </div>
    </div>
            </div>

          </div>
        </div>
      </div>


    </div>








  );
};

export default Service;