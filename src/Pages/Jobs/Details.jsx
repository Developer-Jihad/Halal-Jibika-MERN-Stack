import { useParams, useRouteLoaderData } from "react-router-dom";
import style from "./details.module.css";
import { BiSolidEdit } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

export default function Details() {
  const paramsId = useParams().id;
  const data = useRouteLoaderData("root")?.find((job) => job._id == paramsId);
  console.log(paramsId);
  console.log(data);
  const { title, position, logo, description, companyName } = data;

  return (
    <div className="container">
      <div className={style.detailsCard}>
        <div className="flex">
          <div>
            {logo ? (
              <img className={style.brandLogo} src={logo} alt="" />
            ) : (
              <h1>{companyName}</h1>
            )}
          </div>
          <div className="icon">
            <MdFavoriteBorder />
          </div>
        </div>
        <br />
        <h2>{position}</h2>
        <p>
          <b>{title}</b>
        </p>
        <hr />
        <p>{description}</p>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          provident excepturi aliquam, illo nostrum ad, eos vero ipsum corrupti
          suscipit velit deserunt? Ullam repellat, sunt quidem soluta tenetur
          quod quas?
        </p>
        <br />
        <div className="flex">
          <button className="secondary-btn">Apply Now</button>
          <div className="icon">
            <BiSolidEdit />
          </div>
        </div>
      </div>
    </div>
  );
}
