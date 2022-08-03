import '../css/section01.css'

const Section01 = () => {
    return (
        <section className="about">
            <h2><span className="mainColor">CEO's</span> GREETINGS</h2 >
            <p>새로운 미래를 열어가는 작약 파랑</p>
            <div className="container" >
                <div className="des" >
                    <p className="tit">웹서비스의 <span className="mainColor" > 새로운 미래</span><br />
                        <span className="mainColor">작약 파랑</span>이 만들어가겠습니다.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Dolores, magni vero. Eum sed cum, nemo
                        ut labore sunt. Odit, tempore.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Dolore velit quo laborum soluta unde
                        modi ipsam!<br />
                        Reiciendis quae quos earum saepe voluptatibus rerum id doloremque!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Voluptatibus porro enim, incidunt
                        voluptates quae facilis.</p>
                    <p>작약 파랑 임직원 일동</p>
                </div >
                <figure>
                    <img src="./img/img01.png" alt="" />
                </figure>
            </div>
            <div className="inner" >
                <h3>주요현황</h3>
                <table className="resTable" >
                    <tbody>
                        <tr>
                            <th>주 소</th>
                            <td>부산시 동래구 사직동 1234-56 쌍둥이 달래무리 옆</td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>051-324-3414</td>
                        </tr>
                    </tbody>
                </table >
            </div >
        </section >
    )
}
export default Section01;