export default {
  "Open source projects": {
    "brian-dlee.surge.sh (this site)": {
      starred: true,
      lang: ["Javascript (es6/React)"],
      text:
        "This site is written in React. Most of it is built by applying styles over Semantic UI's " +
        "React components, but this Terminal required a fairly intricate implementation.",
      url: "https://github.com/brian-dlee/personal-website"
    },
    Radux: {
      starred: true,
      lang: ["Javascript (es6)"],
      text:
        "A Redux helper for building apps which hook into the global state using React and Redux. " +
        "Initially, Radux was just to make our lives easier when writing action creators, reducers, etc... " +
        "(i.e. less typing and less files to maintain). As time went on more features started to be added " +
        "to Radux.\nAt this point it allows global action dispatchers to be registered, an easier and quicker " +
        "approach to connecting components to the global state (while still trying to maintain a declarative " +
        "syntax), and multi-store management.\nRecently, I've moved away from this project and have switched " +
        "to a pattern similar to the ducks pattern for Redux configuration. That pattern is used on my personal " +
        "site.",
      url: "https://www.npmjs.com/package/radux"
    }
  },
  "Closed source projects": {
    Cargo: {
      lang: ["Javascript (es6/React)"],
      text:
        "An inventory management system completely written in React as " +
        "a progressive web app for a private client.\nThe app uses firebase for " +
        "authentication, photo storage, and as a realtime database. The source code for " +
        "this project is closed."
    },
    "iOS Inventory Manager": {
      starred: true,
      lang: ["Javascript (es6/React Native)"],
      text:
        "This is an early rendition of Cargo done in React Native. It's an iOS only app " +
        "that uses react-native-navigation and react-native-camera. This is my only " +
        "app I've written in React Native.\nIt had some eye opening experiences, but " +
        "once I got started I didn't find React Native development to be much " +
        "different than React and I found it to be a great learning experience and " +
        "entry point into React Native. The source code for this project is closed."
    },
    GymMe: {
      lang: ["Javascript (es6/React)"],
      text:
        "A workout generation app. This app is a progressive web app written in React " +
        "and using a firebase backend. This app was under development at Orion Network " +
        "Solutions.\nThe source code for this project is closed."
    },
    "dicedkitchen.com": {
      starred: true,
      lang: ["PHP (Wordpress)", "Javascript (jQuery)"],
      text:
        "This was a commercial site I did for a private client recently. The site was built using " +
        "Wordpress. I basically customized the theme, created the logo and configured the site to meet " +
        "the client's needs.\nCompleting this project also including writing a custom Wordpress plugin " +
        "to deliver customer reports.",
      url: "https://dicedkitchen.com"
    },
    "water.noaa.gov": {
      lang: ["PHP (Symfony)", "Python 2", "Javascript (jQuery/Dojo)"],
      text:
        "This site was written with Symfony as it's backend. It's main feature was " +
        "a mobile ready ESRI map powered by ESRI's Javascript API. It's more of a traditional " +
        "web application using a PostgreSQL database with some Python scripts " +
        "running on the backend. This app also included the development of web ready map services " +
        "on ArcGIS Servers and a Python (Flask) powered REST API that served up raw values for plotting " +
        "on a javascript powered chart.\nThe strengths gained from this app were understanding " +
        "how to build a mobile interface using Bootstrap and es5 javascript, building a REST api using " +
        "Flask, and, the most challenging of all, post processing massive data for a map service " +
        "capable of running in the browser.\nThe data that ultimately becomes the map service " +
        "is National Water Model output containing forecast data on 2.7 million streams across the entire " +
        "nation. The processing of that output required very extensive optimization to run in " +
        "a timely manner.",
      url: "http://water.noaa.gov"
    },
    "water.weather.gov": {
      lang: ["PHP", "Perl", "Python", "C++", "Javascript (jQuery)"],
      text:
        "This site is a non-frameworked PHP and jQuery powered site. It includes interactive " +
        "web maps, a full CMS, and quite literally hundreds of pages.\nThis is the first web site I had " +
        "ever really worked on and it gives a solid appreciation of where things are now " +
        "and the importance of good software development. As this was the first app I " +
        "worked on, I learned a lot, but probably the most valuable takeaway is how " +
        "important organization is in a large application. Without organization, literally " +
        "everything is vastly more difficult than it needs to be."
    }
  },
  Interests: {
    AI: {
      starred: true,
      text:
        "Although this has always been a field that has intrigued me, my interests grew during the CS " +
        "program at UNLV when I took an elective on AI. AI has already proven to be an incredible " +
        "technology changing the pace of software today. This is one field I've had my eyes on for a while and " +
        "I would love the opportunity to be more involved in."
    },
    "Game Development": {
      starred: true,
      text:
        "Games have always been a passion of mine. In my free time, I've been gaining more experience in " +
        "game development and design. My experience is primarily with Unity but I've also had my eyes on " +
        "developing games using the Unreal Engine and even plain Javascript/WebGL."
    }
  }
};
