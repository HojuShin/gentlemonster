import { useEffect, useState } from "react";
import up from '../assets/up.png'

export default function Sticky() {

    // 스크롤 위치 추적 상태 
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {

        // 스크롤 이벤트 발상할 때 호출되는 함수 
        const handleScroll = () => {
            // 현재 윈도우의 세로 스크롤 위치를 가져와서 상태 업데이트
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트될 때 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); //컴포넌트가 처음 마운트될 때만 실행됨

    // 스크롤 업 동작 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤
        });
    };

    return (
        <>
            <div className={`sticky-title ${scrollPosition > 700 ? 'active' : ''}`}>
                <p>24 OPTICAL COLLECTION · GENTLE MONSTER</p>
            </div>
            <div className="sticky-scrollUp">
                <button
                    className={`upBtn ${scrollPosition > 700 ? 'active' : ''}`}
                    onClick={() => scrollToTop()}
                >
                    <img src={up} alt="up" id="up"></img>
                </button>
            </div></>
    )
}