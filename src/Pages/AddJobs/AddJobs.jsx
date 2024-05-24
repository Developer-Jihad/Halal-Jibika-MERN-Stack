import { useState } from "react";
import img from "../../assets/images/addjob.gif";
import styles from "./addjob.module.css";
import axios from "axios";

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    title: "",
    logo: "",
    description: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://halal-jibika-server.onrender.com/jobs",
        formData
      );
      console.log("POST Response:", response.data);
    } catch (error) {
      console.error("Error creating post: ", error);
    }
    console.log("Form submitted:", formData);
    setFormData({
      companyName: "",
      position: "",
      title: "",
      logo: "",
      description: "",
    });
  };

  return (
    <div className="container">
      <div className={styles.addJobContainer}>
        <div className={styles.leftColumn}>
          <img src={img} alt="Company Logo" className={styles.logo} />
        </div>
        <div className={styles.rightColumn}>
          <h1>Add Jobs</h1> <br />
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

export default AddJobForm;
