import './Phone.css'

export default function Phone() {
    return (
        <div className="container  max-[500px]:h-3/5 sm:h-3/5 md:h-3/5">
            <div className="iphone max-[500px]:scale-[0.4]	sm:scale-[0.4]	md:scale-[0.4] lg:scale-[0.45] xl:scale-50 2xl:scale-75">
                <div className="buttons">
                    <div className="silent" />
                    <div className="sleep" />
                    <div className="vol-up" />
                    <div className="vol-down" />
                </div>
                <div className="top">
                    <div className="black-bar" />
                    <div className="iphone-top" />
                </div>
                <div className="components">
                    <div className="speaker" />
                    <div className="camera">
                        <div className="shine-left" />
                        <div className="shine-right" />
                    </div>
                </div>
                <div className="screen">
                    <img src="./dlink-1.jpg" alt="dlink-screen" />
                    <video loop autoPlay muted>
                        <source src="dlink.mp4" type="video/mp4" />
                    </video>

                    <div className="stuff">
                        <div className="service">
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                        </div>
                        <div className="battery">
                            <div className="nub" />
                            <div className="energy" />
                        </div>
                        <div className="lock-carrier">AT&T</div>

                        <div className="lock-bar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
