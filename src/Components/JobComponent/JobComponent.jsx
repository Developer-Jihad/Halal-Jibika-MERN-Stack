import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import style from "./job.module.css";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

export default function JobComponent({
  job,
  handleDelete,
  addToFavorite,
  addToApplied,
  isFav,
  isApplied,
}) {
  const { title, position, logo, _id, description, companyName } = job;

  const handleDeleteRequest = async () => {
    try {
      const response = await axios.delete(`http://localhost:9000/jobs/${_id}`);
      handleDelete(_id);
      console.log("DELETE Response:", response.data);
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  return (
    <div className={style.jobCard}>
      <div className="flex">
        <div>
          {logo ? (
            <img className={style.brandLogo} src={logo} alt={companyName} />
          ) : (
            <h1>{companyName}</h1>
          )}
        </div>
        <div onClick={() => addToFavorite(_id)} className="icon">
          {!isFav ? <MdFavoriteBorder /> : <MdFavorite />}
        </div>
      </div>
      <br />
      <h2>{position}</h2>
      <b>{title}</b>
      <p>{description}</p>
      <div className="flex">
        <div onClick={() => addToApplied(_id)}>
          {isApplied ? (
            <button style={{ color: "salmon" }} className="secondary-btn">
              Applied
            </button>
          ) : (
            <button className="secondary-btn">Apply Now</button>
          )}
        </div>
        <Link to={`/details/${_id}`}>
          <div className="icon">
            <BiDetail />
          </div>
        </Link>
        <Link to={`/updatejob/${_id}`}>
          <div className="icon">
            <BiSolidEdit />
          </div>
        </Link>
        <div onClick={handleDeleteRequest} className="icon">
          <RiDeleteBin4Fill />
        </div>
      </div>
    </div>
  );
}
