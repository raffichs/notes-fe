import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../api/noteApi";
import { useState } from "react";

const NoteForm = () => {
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

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

  return (
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
  );
};

export default NoteForm;
