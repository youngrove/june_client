import React from "react";
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="section" id="intro">
      <h3>시설보기</h3>
      <p>
        준레지던스원룸텔의 깨끗한 시설, 넉넉한 생활공간으로 품격있는 고객님을
        초대합니다. 지하철 2, 3호선 을지로3가역과 가깝게 위치하고 주변 산책하기
        좋은 청계천, 종로 학원가, 명동, 주변 중대형 사무실 등 학생 및 직장인에게
        최적의 위치입니다. 강화된 소방법 적용으로 안전한 생활과 전문가의 편안한
        인테리어 시공으로 세련된 주거공간을 마련하였습니다. 직접 방문하시어
        시원한(따뜻한) 차 한잔 하시며 천천히 살펴보세요.
      </p>
      <hr />
      <div className="intro-container">
        <Slider {...settings}>
          <div>
            <img src={require("../img/1.jpg")} alt="img1" />
          </div>
          <div>
            <img src={require("../img/2.jpg")} alt="img2" />
          </div>
          <div>
            <img src={require("../img/3.jpg")} alt="img3" />
          </div>
          <div>
            <img src={require("../img/4.jpg")} alt="img4" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Intro;
