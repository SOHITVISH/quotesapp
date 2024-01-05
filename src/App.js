
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookmarkList from './component/BookmarkList'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
              <a href="/bookmarks">Bookmarks</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/bookmarks">
              <BookmarkList/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
