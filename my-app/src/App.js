import React from 'react';
import './App.css';
import Header from './componemtes/Header.jsx';
import MainContent from './componemtes/MainContent.jsx';
import Sidebar from './componemtes/Sidebar.jsx';
import Footer from './componemtes/Footer.jsx';

function App() {

  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainContent />
        <Sidebar
            items={[
              { url: 'https://react.dev/', text: 'Site oficial react' },
              { url: 'https://pt.wikipedia.org/wiki/React_(JavaScript)', text: 'mais sobre react' },
              {
                url:
                  'https://www.udemy.com/course/curso-reactjs-ninja/?utm_source=adwords-intl&utm_medium=udemyads&utm_campaign=React_new_v.PROF_la.PT_cc.BR_ti.7450&utm_content=deal4584&utm_term=_._ag_101403446333_._kw_react+js+curso_._ad_659919008769_._de_c_._dm__._pl__._ti_kwd-300446744063_._li_9100763_._pd__._&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWSEmREYUVveTxbqFaft_NcYUL50l4wTwBFeDrbPP8PQyiskt9tviYaApUxEALw_wcB',
                text: 'curso para aprender mais sobre react',
              },
              { url: 'https://roadmap.sh/react', text: 'road map' },
            ]}
          />
      </div>
      <Footer />
    </div>
  );
}

export default App;