import { Link } from "react-router-dom";
import img from "../../assets/images/Job hunt.gif";
import style from "./hero.module.css";

export default function HeroComponent() {
  return (
    <>
      <div className="container">
        <div className={style.hero}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={style.heroText}
          >
            <h1>
              Wecome to <span>Halal Jibika</span>,
            </h1>
            <h1>
              Without Compromising on Your DEEN Find Your{" "}
              <span>Dream JOB </span>
            </h1>

            <br />
            <h3>
              We have <span>3M+</span> Live Jobs
            </h3>
            <br />
            <Link to="./jobs">
              <button>Explor Now</button>
            </Link>
            <br />
          </div>
          <div className={style.heroImg}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
