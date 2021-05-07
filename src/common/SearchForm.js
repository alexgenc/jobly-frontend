import React, { useState } from 'react';
import './SearchForm.css';

/** Search widget.
 *
 * Appears on CompanyList and JobList components so that the  results can be filtered down.
 *
 * This component doesn't *do* the searching, but it renders the search form and calls the `search` function prop that runs in a parent component to do the searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

const SearchForm = ( { searchFor } ) => {

  const [searchTerm, setSearchTerm] = useState("");

  // Update form field
  function handleChange(evt){
    setSearchTerm(evt.target.value);
  }

  // Submit Form
  function handleSubmit(evt){
    evt.preventDefault();
    // Account for accidentally trying to search for just spaces
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim())
  }

  return (
    <div className="SearchForm mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
            className="form-control form-control-lg flex-grow-1"
            name="searchTerm"
            placeholder="Enter search term.."
            value={searchTerm}
            onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;