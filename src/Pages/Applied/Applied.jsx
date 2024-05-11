import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../../Components/JobComponent/JobComponent";
import style from "../Jobs/jobs.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Applied() {
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);

  const [appliedJobIds, addToApplied] = useLocalStorage("appliedJobIds");

  const isApplied = !!Object.values(appliedJobIds).length;

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">
        {isApplied ? "Your Applied JOBS" : "You Don't have any Applied Job"}
      </h1>
      <div className={style.jobs}>
        {isApplied &&
          jobs.map((job) => {
            if (appliedJobIds[job._id] === undefined) return null;
            return (
              <JobComponent
                isApplied={true}
                handleDelete={handleDelete}
                addToApplied={addToApplied}
                key={job._id}
                job={job}
              />
            );
          })}
      </div>
    </div>
  );
}
