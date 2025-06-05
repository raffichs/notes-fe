import { Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://be-784510099957.us-central1.run.app"; // Backend URL
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/notes" element={<NoteForm />} />
      </Routes>
    </div>
  );
}

export default App;
