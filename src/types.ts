export type Note = {
  id: string;
  title: string;
  markdown: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type NoteData = Omit<Note, "id">;
