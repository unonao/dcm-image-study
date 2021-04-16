import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Routes
import ExamplePageBasic from './components/ExamplePageBasic.js';
import ExamplePageGrid from './components/ExamplePageGrid.js';

// cornerstone tools の初期化
import initCornerstone from './initCornerstone.js';
initCornerstone();

/**
 *
 *
 * @param {*} { href, text }
 * @returns
 */
function LinkOut({ href, text }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

/**
 *
 *
 * @param {*} { title, url, text, screenshotUrl }
 * @returns
 */
function ExampleEntry({ title, url, text, screenshotUrl }) {
  return (
    <div>
      <h5>
        <Link to={url}>{title}</Link>
      </h5>
      <p>{text}</p>
      <hr />
    </div>
  );
}

function Index() {
  const style = {
    minHeight: '512px',
  };

  const examples = [
    {
      title: 'Props Documentation',
      url: '/props',
      text: 'COMING SOON',
    },
    {
      title: 'Basic Usage',
      url: '/basic',
      text:
        'How to render an array of DICOM images and setup common built-in tools.',
    },
    {
      title: 'Grid Layout',
      url: '/grid',
      text: 'How to render multiple viewports and track the "active viewport".',
    },
    // MOST COMPLEX: (mini viewer)
    // - (mini viewer) Dynamic Grid + Global Tool Sync + Changing Tools
    // Misc. Other Props: (just list them all, prop-types, basic comments for docs)
    // - onElementEnabled (escape hatch)
    // - eventListeners
    // - isStackPrefetchEnabled
    // - react-resize-observer
  ];

  const exampleComponents = examples.map(e => {
    return <ExampleEntry key={e.title} {...e} />;
  });

  return (
    <div className="container">
      <div className="row">
        <h1>Cornerstone Viewport</h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <p>
            This is a set of re-usable components for displaying data with{' '}
            <LinkOut
              href={'https://github.com/cornerstonejs/cornerstone'}
              text={'cornerstone.js'}
            />
            .
          </p>
        </div>

        <div className="col-xs-12 col-lg-12" style={style}>
          <h3>Examples</h3>
          {exampleComponents}
        </div>

        <div className="col-xs-12 col-lg-12">
          <h3>Configuring Cornerstone</h3>
          <p>
            All of these examples assume that the cornerstone family of
            libraries have been imported and configured prior to use. Here is
            brief example of what that may look like in ES6:
          </p>

        </div>
      </div>
    </div>
  );
}

/**
 *
 *
 * @param {*} props
 * @returns
 */
function Example(props) {
  return (
    <div className="container">
      <h5>
        <Link to="/">Back to Examples</Link>
      </h5>
      {props.children}
    </div>
  );
}

function AppRouter() {
  const basic = () => Example({ children: <ExamplePageBasic /> });
  const grid = () => Example({ children: <ExamplePageGrid /> });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/basic/" render={basic} />
        <Route exact path="/grid/" render={grid} />
        <Route exact component={Index} />
      </Switch>
    </Router>
  );
}

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
