import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, deleteNote } from "../api/noteApi";

const NoteList = () => {
  const queryClient = useQueryClient();
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Get unique categories from notes
  const categories = ["All", ...new Set(notes.map((note) => note.category))];

  // Filter notes based on selected category
  const filteredNotes =
    selectedCategory === "All"
      ? notes
      : notes.filter((note) => note.category === selectedCategory);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      {/* Category Filter Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Filter by Category:
        </label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Notes List */}
      <div className="grid gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id} className="bg-white shadow p-4 rounded-md">
              <h2 className="text-lg font-semibold">{note.note}</h2>
              <p className="text-sm text-gray-600">{note.category}</p>
              <button
                onClick={() => deleteMutation.mutate(note.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notes found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
