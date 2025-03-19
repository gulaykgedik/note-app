import { FC } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../styled/page-container";
import Form from "../../components/form";
import { NoteData } from "../../types";
import { addNote } from "../../redux/slices/noteSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Create: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (data: NoteData) => {
    dispatch(addNote(data));
    navigate("/");
  };
  return (
    <PageContainer>
      <Typography variant="h4">Not Oluştur</Typography>

      <Form handleSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default Create;
