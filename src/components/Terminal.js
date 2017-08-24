import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Cursor from './Cursor';
import Prompt from './Prompt';

import './Terminal.css';

const colors = {
  grey: '#818181',
  yellow: '#bbba30',
  purple: '#a36aca',
  blue: '#4384ec'
};

const terminalData = {
  'experience': {
    'brian-dlee.surge.sh': {
      lang: 'Javascript (es6)',
      description: `
        This site is written in React. 
        For basic UI components I'm using React bindings for Semantic UI, 
        but other components like this terminal are hand written.`,
      url: 'https://github.com/brian-dlee/personal-website',
    },
    'Radux':  {
      lang: 'Javascript (es6)',
      description: `
        A Redux helper for building apps which hook into the global state. Initially, Radux
        was just to make our lives easier in maintaining and building state bindings for our
        React/Redux app. As time went on more features started to be added to Radux. At this
        point it allows global action dispatchers to be registered, a far easier (imho) 
        approach to connecting components to the global state, multi-store management. And
        soon to come: asynchronous dispatchers, react router sister package, and form validation
        sister package.`,
      url:  'https://www.npmjs.com/package/radux',
    },
    'Cargo': {
      lang: 'Javascript (es6)',
      description: `
        An inventory management system completely written in React as
        a progressive web app for a private client. The app uses firebase for 
        authentication, photo storage, and as a realtime database. In writing this
        application, I've developed two packages: a SegmentedForm component which allows
        the user to breakdown large forms into small pieces that are especially useful on
        mobile devices (the app was written to be used heavily on iPod touches), and
        a form validation package. I hope to be able to share the source code on both
        of these packages very soon. I am unable to show the source code for the app itself.`,
    },
    'iOS Inventory Manager': {
      lang: 'Javascript (es6)',
      description: `
        This is an early rendition of Cargo done in React Native. It's an iOS only app
        that uses react-native-navigation and react-native-camera. This is my only
        app I've written in React Native. It had some eye opening experiences, but
        once I got started I didn't find React Native development to be much
        different than React.`,
      url: 'https://github.com/brian-dlee/ios-inventory-manager'
    },
    'GymMe': {
      lang: 'Javascript (es6)',
      description: `
        A workout generation app. Again this app is a progressive web app written in React
        and using a firebase backend. This app has been under development at Orion Network
        Solutions and hopes to have a release candidate out soon. GymMe features
        mobile optimization techniques using Semantic UI and implementation of global state
        using a package I developmented (and published on NPM) Radux. Radux was actually
        thought of during the development of this app. Again, I cannot share the source code
        or the URL of this app since it is not yet live.`
    },
    'water.noaa.gov': {
      lang: ['PHP-Symfony', 'Python 2', 'Javascript'],
      description: `
        This site was written with Symfony as it's backend. It's main feature was
        a mobile ready ESRI map powered by ESRI's Javascript API. It's more of a traditional
        web application using a PostgreSQL database with some Python scripts
        running on the backend. This app also included the development of web ready map services
        on ArcGIS Servers and a Python (Flask) powered REST API that served up raw values for plotting
        on a javascript powered chart. The strengths gained from this app were understanding
        how to build a mobile interface using Bootstrap and es5 javascript, building a REST api using
        Flask, and, the most challenging of all, post processing massive data for a map service
        capable of running in the browser. The data that ultimately becomes the map service
        is National Water Model output containing forecast data on 2.7 million streams across the entire
        nation. The processing of that output required very extensive optimization to run in
        a timely manner.`,
      url: 'http://water.noaa.gov'
    },
    'water.weather.gov': {
      lang: ['PHP', 'Perl', 'Python', 'Javascript'],
      description: `
        This site is a non-frameworked PHP and jQuery powered site. It includes interactive
        web maps, a full CMS, and hundreds of pages. This is the first web site I had
        ever really worked on and it gives a solid appreciation of where things are now
        and the importance of good software development. As this was the first app I
        worked on, I learned a lot, but probably the most valuable takeaway is how
        important organization is in a large application. Without organization, literally
        everything is vastly more difficult than it needs to be.
      `
    },
    'Various python packages': {
      lang: 'Python',
      description: `
        I have written various python packages to make life easier from docker wrappers
        to SFTP clients.`,
      url: 'https://github.com/orionnetworksolutions'
    },
    'Interests': {
    }
  }
}


const getRandomTime = () => Math.random() * 100 + 50;

class Terminal extends Component {
  constructor() {
    super();

    this.state = {
      greeting: ''
    };
  }

  displayOptions() {

  }

  setShellUpdateTimeout() {
    // This is my way of making it look lifelike!
    setTimeout(this.writeNextCharacter.bind(this), getRandomTime());
  }

  writeNextCharacter() {
    this.setState({
      greeting: this.props.children.slice(0, this.charCount)
    });

    this.charCount++;

    if (this.charCount <= this.props.children.length) {
      this.setShellUpdateTimeout();
    } else {
      this.displayOptions();
    }
  }

  componentDidMount() {
    this.charCount = 0;
    this.setShellUpdateTimeout();
  }

  render() {
    const promptLines = this.state.greeting.split(/\n/);
    let content = [];

    for (let i = 0; i < promptLines.length; i++) {
      content.push(
        <div key={'promptLine' + i}>
          <code><Prompt />{promptLines[i]}{promptLines.length - 1 === i ? <Cursor /> : ''}</code>
        </div>
      );
    }

    return (
      <div className="Terminal">
        <Segment {...this.props}>
          {content}
        </Segment>
      </div>
    );
  }
}

export default Terminal;
export {
  colors
};
