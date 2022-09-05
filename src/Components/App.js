import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPeople from '../Pages/People/ListPeople';
import DetailPeople from '../Pages/People/DetailPeople';

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ListPeople />}/>
            <Route exact path="/detalle/:id"  element={<DetailPeople />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
