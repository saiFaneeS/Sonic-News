import './App.css';
import { Navbar } from './comp/Navbar';
import { News } from './comp/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
// import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  // let apiKey = process.env.REACT_APP_NEWS_API

  // const [progress, setProgress] = useState(0);

  // setProgress(progress)

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  pageSize = '9';
  country = 'us';
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          {/* <LoadingBar
                    color='#f11946'
                    progress={state.progress}
                /> */}
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="technology" key="tech" />} />
            <Route exact path='/general' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="general" key="general" />} />
            <Route exact path='/business' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="business" key="business" />} />
            <Route exact path='/entertainment' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="entertainment" key="entertainment" />} />
            <Route exact path='/health' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="health" key="health" />} />
            <Route exact path='/science' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="science" key="science" />} />
            <Route exact path='/sports' element={<News /* setProgress={setProgress} apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="sports" key="sports" />} />
            <Route exact path='/technology' element={<News /* setProgress={setProgress}  apiKEY={apiKey} */ pageSize={this.pageSize} country={this.country} category="technology" key="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}