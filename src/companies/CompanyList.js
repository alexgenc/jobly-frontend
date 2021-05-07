import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api'
import CompanyCard from './CompanyCard'
import SearchForm from '../common/SearchForm';
import LoadingSpinner from '../common/LoadingSpinner';


/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */
const CompanyList = () => {

  const [companies, setCompanies] = useState([]);

  
  useEffect( function searchForCompanies() {
      searchCompanies()
  }, []);
  
  async function searchCompanies(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={searchCompanies} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default CompanyList;