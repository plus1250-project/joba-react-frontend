import React, {useState} from 'react';

import './App.css';
import Header from "./Components/Layout/Header";
import Main from "./Components/Layout/Main";
import Footer from "./Components/Layout/Footer";
import Nav from "./Components/Layout/Nav";
import Enterprise from './Components/CorpIndustry/Enterprise';
import RecentUpKeyword from './Components/RecentUpKeyword/RecentUpKeyword';
import CorpIndustry from './Components/CorpIndustry/CorpIndustry';
import KeywordsMap from './Components/KeywordsAnalysis/KeywordsMap/KeywordsMap';
import MonthlyTrend from './Components/MonthlyTrend/MonthlyTrend';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import MonthlyList from './Components/MonthlyList/MonthlyList';
import KeywordsAnalysis from './Components/KeywordsAnalysis/KeywordsAnalysis';

function App() {
  const [listIsShown, setListIsShown] = useState(false);

  // 산업군별 리스트 모달 관련 Handler
  const openListHandler = () => {
    setListIsShown(true);
  }

  const closeListHandler = () => {
    console.log('close');
    setListIsShown(false);
  }


  return (
    <div className="App">
      {listIsShown && <Enterprise onClose={closeListHandler}/>}
      <div className="container">
        <Nav />
        <div className="content">
          <Header/>
          <Main>
            <div className="content__header">
              <RecentUpKeyword />
              <CorpIndustry onOpen={openListHandler}/>
            </div>
            <div className="content__body">
              <KeywordsAnalysis />
              <ArticlesList />
            </div>
            <MonthlyList />
          </Main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;