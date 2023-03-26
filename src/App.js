import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FetchCardData from "./Components/Card/FetchCardData";
import History from "./Components/History";
import { HistoryContextProvider } from "./Components/Store/HistoryContext";
import UserForm from "./Components/UserForm";

function App() {
  return (
    <div>
      <HistoryContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<UserForm />} />
            <Route path="/history" element={<History />} />
            <Route path="/bucket" element={<FetchCardData />} />
          </Routes>
        </Router>
      </HistoryContextProvider>
    </div>
  );
}

export default App;
