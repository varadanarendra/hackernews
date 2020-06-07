import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import axios from 'axios';
import Pagination from './components/Pagination';
import Chart from './components/Chart';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [chart, setChart] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://hn.algolia.com/api/v1/search?tags=front_page")
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prePageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel
    axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.nbPages)
      setPrevPageUrl(res.data.page)
      setNews(res.data.hits);
      setChart(res.data.hits)
    });

    return () => cancel();

  }, [currentPageUrl])


  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }


  function gotoPrevPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  if (loading) return "Loading...."
  return (
    <div className="App">
      <NewsList news={news} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prePageUrl ? gotoPrevPage : null}
      />
      <Chart chart={chart}/>
    </div>
  );
}

export default App;
