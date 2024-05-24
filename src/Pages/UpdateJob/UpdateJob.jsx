import { useState, useEffect } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import img from "../../assets/images/addjob.gif";
import styles from "./updatejob.module.css";
import axios from "axios";

const UpdateJob = () => {
  const paramsId = useParams().id;
  const data = useRouteLoaderData("root").data.find(
    (job) => job._id == paramsId
  );

  // Initialize formData with data values once data is available
  const [formData, setFormData] = useState({
    companyName: data?.companyName || "",
    position: data?.position || "",
    title: data?.title || "",
    logo: data?.logo || "",
    description: data?.description || "",
  });

  // Update formData when data changes
  useEffect(() => {
    if (data) {
      setFormData({
        companyName: data.companyName || "",
        position: data.position || "",
        title: data.title || "",
        logo: data.logo || "",
        description: data.description || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://halal-jibika-server.onrender.com/jobs/${paramsId}`,
        formData
      );
      console.log("Put Response:", response.data);
      // Clear form after successful submission
      setFormData({
        companyName: "",
        position: "",
        title: "",
        logo: "",
        description: "",
      });
    } catch (error) {
      console.error("Error updating job: ", error);
    }
  };

  if (!data) {
    return <div>Loading...</div>; // Optional: Add a loading indicator
  }

  return (
    <div className="container">
      <div className={styles.addJobContainer}>
        <div className={styles.leftColumn}>
          <img src={img} alt="Company Logo" className={styles.logo} />
        </div>
        <div className={styles.rightColumn}>
          <h1>Update Jobs</h1> <br />
          <hr />
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label htmlFor="logo">Company Logo:</label>
            <input
              type="url"
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              required
            />

            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
