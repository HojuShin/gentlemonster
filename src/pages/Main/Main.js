import React, { useEffect, useRef } from "react";
import './main.css';
import model from '../../assets/model.png'

export default function Main() {

    //useRef로 DOM에 접근
    const fadeRef = useRef([]);

    // 컴포넌트가 처음으로 렌더링될 때 실행
    useEffect(() => {
        // .section01Img 클래스를 가진 요소들을 변수에 저장
        const fadeElements = document.querySelectorAll(".scrollSection");
        // fadeRef.current에 fadeElements를 할당
        fadeRef.current = Array.from(fadeElements);

        // 스크롤 이벤트 핸들러 생성
        const handleScroll = () => {
            // fadeRef.current에 저장된 모든 요소를 반복하면서 처리
            fadeRef.current.forEach((img) => {
                // 요소가 화면 안에 들어왔는지 확인하고 화면 안에 있다면 클래스 추가
                if (isInView(img)) {
                    img.classList.add("scrollSection--visible");
                }
            });
        };

        // 스크롤 이벤트 리스너 등록
        document.addEventListener("scroll", handleScroll);

        // 컴포넌트가 unmount되기 전에 실행될 클린업 함수
        return () => {
            // 스크롤 이벤트 리스너 제거
            document.removeEventListener("scroll", handleScroll);
        };
    }, []); // 한 번만 실행되도록


    // 요소가 화면 안에 들어왔는지 확인하는 함수
    const isInView = (element) => {
        // 요소의 위치 정보를 가져옴
        const rect = element.getBoundingClientRect();

        // 요소의 하단 경계가 화면 위쪽(0)을 넘어가는지 확인하고, 
        // 요소의 상단 경계가 화면 아래쪽(창의 높이 - 150px 또는 브라우저 높이 - 150px)을 넘어가지 않는지 확인
        return (
            rect.bottom > 0 &&
            rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
        );
    };

    return (
        <div className="container">
            <div className="main" >
                <div id="mainImg"></div>
                <div className="main-desc">
                    <p>2024 OPTICAL COLLECTION</p>
                </div>
            </div>

            <div className="section01" >
                <div className="section01Img scrollSection"> <img src="https://web-resource.gentlemonster.com/assets/stories/24-optical/collection/mo/optical-product-1.jpg" alt="item" loading="lazy" className="" /></div>
                <div className="section01Img scrollSection"> <img src="https://web-resource.gentlemonster.com/assets/stories/24-optical/collection/mo/optical-product-6.jpg" alt="item" loading="lazy" /></div>
                <div className="section01Img scrollSection"> <img src="https://web-resource.gentlemonster.com/assets/stories/24-optical/collection/mo/optical-product-3.jpg" alt="item" loading="lazy" /></div>
            </div>

            <div className="section02 scrollSection">
                <div className="logo1"><h1>GENTLE</h1></div>
               <img src={model} alt="model" id="section02Img"></img>
                <div className="logo2"><h1>MONSTER</h1></div>
            </div>
        </div>
    )
}