import React from 'react';
import { getRandomTime } from '../../utilities/time'
import { timerService } from '../../services'

const Context = React.createContext(null);

function Provider({ children }) {
  const [fullText, setFullText] = React.useState('');
  const [charCount, setCharCount] = React.useState(0);
  const [menuItem, setMenuItem] = React.useState([]);
  const [url, setUrl] = React.useState('');
  const [lang, setLang] = React.useState('');

  const timerJobId = React.useRef(null)

  const initialize = (text) => {
    setCharCount(0)
    setFullText(text)

    timerJobId.current = timerService.add(() => {
      setCharCount(previous => previous + 1)

      if (charCount > fullText.length) {
        timerService.stop(timerJobId);
      }
    }, getRandomTime());
  }
  
  const navigate = (path, data) => {
    setCharCount(0)
    setMenuItem(path)
    setFullText(data.text || "Select an option below to read more.")
    setUrl(data.url)
    setLang(data.lang)

    if (timerJobId.current) {
      timerService.restart(timerJobId.current);
    }
  }

  return (
    <Context.Provider value={{ fullText, charCount, menuItem, url, lang, initialize, navigate }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider }
