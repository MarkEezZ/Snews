import { useState } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import GridSection from './Components/Grid/GridSection';
import PaginationBar from './Components/PaginationBar/PaginationBar';
import Tab from './Components/PaginationBar/Tab';
import ArrowLeft from './Components/PaginationBar/ArrowLeft';
import ArrowRight from './Components/PaginationBar/ArrowRight';
import NextPage from './Components/PaginationBar/NextPage';
import PreviousPage from './Components/PaginationBar/PreviousPage';

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [addToPage, setAddToPage] = useState<number>(0);
  const [newsPerPage] = useState<number>(9);
  
  console.log(currentPage);

  return (
      <Body>
        <GridSection skipNews={currentPage * newsPerPage}></GridSection>
        <PaginationBar>
          <ArrowLeft lastPageList={setAddToPage} addToPage={addToPage} refreshCurrentPage={setCurrentPage} currentPage={currentPage}></ArrowLeft>
          <PreviousPage currentPage={currentPage} previousPage={setCurrentPage} refreshPageList={setAddToPage} divFromPage={addToPage}></PreviousPage>
          <Tab pageNumber={1 + addToPage} changeCurrentPage={setCurrentPage} currentPage={currentPage}></Tab>
          <Tab pageNumber={2 + addToPage} changeCurrentPage={setCurrentPage} currentPage={currentPage}></Tab>
          <Tab pageNumber={3 + addToPage} changeCurrentPage={setCurrentPage} currentPage={currentPage}></Tab>
          <Tab pageNumber={4 + addToPage} changeCurrentPage={setCurrentPage} currentPage={currentPage}></Tab>
          <Tab pageNumber={5 + addToPage} changeCurrentPage={setCurrentPage} currentPage={currentPage}></Tab>
          <NextPage currentPage={currentPage} nextPage={setCurrentPage} refreshPageList={setAddToPage} addToPage={addToPage}></NextPage>
          <ArrowRight nextPageList={setAddToPage} addToPage={addToPage} refreshCurrentPage={setCurrentPage}></ArrowRight>
        </PaginationBar>
      </Body>
    );
}

export default App;
