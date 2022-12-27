import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import {Results} from "../Pages/Results";
import * as React from "react";
import PageLayout from "../Components/PageLayout";
import {pages} from "../constants/pages";

export const AppRoute: React.FC = ()=>{
  return  (
      <BrowserRouter>
      <Routes>
        <Route path={pages.home} element={
          <PageLayout>
          <Home/>
          </PageLayout>}/>
        <Route path={`${pages.results}/:search`} element={<PageLayout>
          <Results/>
        </PageLayout>}/>
        <Route path="*" element={<PageLayout>
          <Home/>
        </PageLayout>}/>
    </Routes>
      </BrowserRouter>
  )
};
export default AppRoute