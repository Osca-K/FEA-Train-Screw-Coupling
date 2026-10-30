import { Route, Routes } from 'react-router-dom';
import ReportLayout from './layouts/ReportLayout';
import CoverPage from './pages/CoverPage';
import ChapterPlaceholder from './pages/ChapterPlaceholder';
import { chapters } from './data/chapters';

export default function App() {
  return <Routes><Route element={<ReportLayout />}>
    <Route index element={<CoverPage />} />
    {chapters.slice(1).map(chapter => <Route key={chapter.slug} path={chapter.path} element={<ChapterPlaceholder chapter={chapter} />} />)}
    <Route path="*" element={<ChapterPlaceholder />} />
  </Route></Routes>;
}
