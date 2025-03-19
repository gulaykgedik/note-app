import { FC } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Note, NoteData } from "../../types";
import PageContainer from "../../styled/page-container";
import { Typography } from "@mui/material";
import Form from "../../components/form";
import { updateNote } from "../../redux/slices/noteSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const Edit: FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (data: NoteData) => {
    if (!data.title || !data.markdown || data.tags.length < 1)
      return alert("Lütfen tüm alanları doldurunuz.");

    dispatch(updateNote({ id: note.id, ...data }));
    navigate(`/note/${note.id}`);
  };

  return (
    <PageContainer>
      <Typography variant="h4" sx={{ mb: 5 }}>
        {note.id ? "Notu Düzenle" : "Yeni Not Oluştur"}
      </Typography>

      <Form note={note} handleSubmit={handleSubmit}></Form>
    </PageContainer>
  );
};

export default Edit;
