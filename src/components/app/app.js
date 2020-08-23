import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostAddForm from "../post-add-form/post-add-form";
import PostList from "../post-list/post-list";

import "./app.css";

const App = () => {

  const data = [
    {label: "Обучение по React", important: true, id: "onew"},
    {label: "Статьи по выбору техники", important: false, id: "twofd"},
    {label: "PlayStation 5 - скоро в продаже!", important: false, id: "threefd"}
  ]

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </div>
  )
}

export default App;
