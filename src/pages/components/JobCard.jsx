import './JobCard.css';

function JobCard({
  logo,
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  languages,
}) {
  return (
    <div
      className={`my-5 py-2 px-3 bg-light text-dark
        d-flex flex-column
        ${isFeatured ? 'border-5 border-primary border-start' : 'border-5 border-light border-start'}
        border-top-0 border-end-0 border-bottom-0 rounded
        JobCard`}
    >
      <img
        className="w-25 position-relative top-0 start-0 translate-middle-y"
        src={logo}
        alt={logo}
      />
      <header
        className="m-0 p-0 pb-1 bg-transparent
        border-0
        position-relative top-0 start-0 translate-middle-y
        card-header
        jobCard_header"
      >
        <span
          className="me-3 fs-5
            header_enterprise"
        >
          {company}
        </span>

        <span
          className={`py-2 px-3 mx-1 bg-primary 
            text-light text-uppercase fs-6 fw-bold
            rounded-pill
            ${isNew ? 'visible' : 'invisible' }
            header_tag-new`}
        >
          new!
        </span>
        <span
          className={`p-2 px-3 mx-1 bg-dark
            text-light text-uppercase fs-6 fw-bold
            rounded-pill
            ${isFeatured ? 'visible' : 'invisible' }
            header_tag-new`}
        >
          featured
        </span>
      </header>
      <section className="JobCard_body">
        <span className="py-2 fw-bold body_role">{position}</span>

        <p className="mb-0 py-2 fw-bold text-black-50 body_data">
          {`${postedAt} • ${contract} • ${location}`}
        </p>
      </section>
      <hr className="mt-2 mb-4 border border-secondary border-1" />
      <footer className="mb-3 JobCard_footer">
        {languages.map((language) => {
          return (
            <button
              type="button"
              className="mx-2 text-capitalize
              btn btn-outline-primary btn-sm"
            >
              {language}
            </button>
          );
        })}
      </footer>
    </div>
  );
}
export default JobCard;
