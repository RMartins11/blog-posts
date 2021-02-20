import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import promise from "redux-promise";

import reducers from './reducers';
import PostsIndex from "./components/PostsIndex";
import NewPosts from "./components/PostsNew";
import PostsShow from "./components/PostsShow";
import DeletePost from "./components/PostsDelete";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Route path="/" exact component={PostsIndex} />
    <Route path="/posts/new" exact component={NewPosts} />
    <Route path="/posts/:id" exact component={PostsShow} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
