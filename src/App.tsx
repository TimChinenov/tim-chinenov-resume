import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticlesPage from './articles-page/articles-page';
import AboutPage from './about-page/about-page';
import HomePage from './home-page/home-page';
import Layout from './layout/layout';
import { ArticlePageWrapper } from './articles-page/article-page';
import { CareerPage } from './career-page/career-page';

function App() {
  return (
    <div className="px-4">
      <header className="App-header">
        <link href="/dist/output.css" rel="stylesheet" type="text/html"/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={<HomePage />} />
            <Route path="home" element={ <HomePage /> } />
            <Route path="articles" element={ <ArticlesPage />} />
            <Route path="about" element={ <AboutPage /> } />
            <Route path="career" element={ <CareerPage />} />
            <Route path={`articles/:id`} element={ <ArticlePageWrapper />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
