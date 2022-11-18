import data from "../data.json";
import JobCard from "./components/JobCard";

function JobList() {
  console.log(data[0].company);
  return (
    <section className="mt-5 py-4 px-3 d-flex flex-column">
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
