import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../api/noteApi";
import { useEffect, useState } from "react";
import axios from "axios";
import NoteList from "./NoteList";
import { Navigate } from "react-router-dom";

const NoteForm = () => {
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [admin, setAdmin] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .get("/admin")
      .then(({ data }) => {
        if (data) {
          setAdmin(data);
        } else {
          setRedirect(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching admin data: ", error);
        setRedirect(true);
      });
  }, []);

  const createMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      setNote("");
      setCategory("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate({ note, category });
  };

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      setAdmin(null);
      setRedirect(true);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Welcome, {admin?.username}</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-xl font-bold mb-2">Add Note</h2>
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border p-2 w-full rounded mb-2"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </form>

      <NoteList />
    </div>
  );
};

export default NoteForm;
