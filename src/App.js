import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./pages/Log";
import Registr from "./pages/Registr"
import News from "./pages/News"
import NoPage from "./pages/NoPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<News />} />
          <Route path="/log" element={<Log />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
