import '../css/section02.css'

const Section02 = () => {
    return (
        <section className="Business">
        <h2><span className="txtBlue">OUR</span> BUSINESS</h2>
        <p>작약 파랑의 다양한 사업 영역을 소개합니다.</p>
        <div className="container">
            <figure>
                <div className="inbox">
                    <img src="./img/img02.jpg" alt=""/>
                </div>
                <div className="cover">
                    <h3>주요사업</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quis!</p>
                    <a href="">자세히보기</a>
                </div>
            </figure>
            <figure>
                <div className="inbox">
                    <img src="./img/img03.png" alt=""/>
                </div>
                <div className="cover">
                    <h3>주요사업</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quis!</p>
                    <a href="">자세히보기</a>
                </div>
            </figure>
            <figure>
                <div className="inbox">
                    <img src="./img/img04.jpg" alt=""/>
                </div>
                <div className="cover">
                    <h3>주요사업</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quis!</p>
                    <a href="">자세히보기</a>
                </div>
            </figure>
            <figure>
                <div className="inbox">
                    <img src="./img/img05.jpg" alt=""/>
                </div>
                <div className="cover">
                    <h3>주요사업</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quis!</p>
                    <a href="">자세히보기</a>
                </div>
            </figure>
        </div>
        <div className="inner">
            <div className="tit">
                <strong>심플하고 모던한 작약 파랑 테마</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="list">
                <ul className="dotList">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus fugit nostrum
                        corrupti quisquam repudiandae?</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Section02;