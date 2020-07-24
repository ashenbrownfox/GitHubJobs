import React from 'react';
import useFetchJobs from './UseFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing</h1>}
      {<h1>{jobs.length}</h1>}
    </Container>
    
    );
  
}

export default App;
