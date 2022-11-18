import data from "../data.json";
import JobCard from "./components/JobCard";

function JobList() {
  return (
    <section className="py-4 px-3 d-flex flex-column">
      <JobCard />
      <h1>{data.map(() => {
        <h1>{data.company}</h1>
      })}</h1>
    </section>
  );
}
export default JobList;
