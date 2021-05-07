import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import JobCardList from './JobCardList';
import SearchForm from '../common/SearchForm';
import LoadingSpinner from "../common/LoadingSpinner";


/** Show page with list of jobs.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * JobList -> JobCardList -> JobCard
 *
 * This is routed to at /jobs
 */
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect( function searchForJobs() {
    searchJobs()
  }, []);

  async function searchJobs(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
      <div className="JobList col-md-8 offset-md-2">
        <SearchForm searchFor={searchJobs} />
        {jobs.length
            ? <JobCardList jobs={jobs} />
            : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
  );
}

export default JobList;