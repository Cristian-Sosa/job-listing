import data from "../../public/data.json";
import JobCard from "./components/JobCard";

function JobList() {
  return (
    <section className="mt-5 py-4 px-3 
    d-flex flex-column flex-md-row flex-wrap justify-content-md-around
    JobList">
      {data.map((post) => {
        return (
          <JobCard
            key={post.id}
            logo={post.logo}
            company={post.company}
            isNew={post.new}
            isFeatured={post.featured}
            position={post.position}
            postedAt={post.postedAt}
            contract={post.contract}
            location={post.location}
            languages={post.languages}
          />
        );
      })}
    </section>
  );
}
export default JobList;
