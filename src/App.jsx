import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-md">
        <NoteForm />
        <NoteList />
      </div>
    </div>
  );
};

export default App;
