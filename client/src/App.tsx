import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';

const ExampleComponent = () => <h2 />;
const ExampleComponent1 = () => <h2>Standalone example page</h2>;
const ExampleComponent2 = () => <h2>Group of pages</h2>;

class App extends React.Component {
  public state = {
    response: ''
  };

  public componentDidMount() {
    this.callApi('/api/hello')
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

      this.callApi("/api/crawl")
      .then(res => console.log("sent crawling request"))
      .catch(err => console.log(err));
  }

  public callApi = async (url: RequestInfo) => {
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    else {
      console.log("response", body);
    }

    return body;
  };
  

  public render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p className="App-intro">{this.state.response}</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/1">Example route 1</Link></li>
              <li><Link to="/2">Example route 2</Link></li>
            </ul>
            <div>
              <Switch>
                  <Route exact path="/" component={ExampleComponent} />
                  <Route exact path="/1" component={ExampleComponent1} />
                  <Route exact path="/2" component={ExampleComponent2} />
              </Switch>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
