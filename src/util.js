import fetch from 'isomorphic-fetch';

const populateDivs = (sections, ...callback) => {
  Object.keys(sections).forEach((key) => {
      fetch(`/static/sections/${key}/${sections[key]}.html`)
          .then((response) => response.text())
          .then((response) => {
              const s = document.getElementById(key);
              s.innerHTML = response;
              callback.forEach(func => {
                  func();
              });
      });
  });
};

export default populateDivs;