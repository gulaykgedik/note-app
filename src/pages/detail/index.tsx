import { FC } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { Note } from "../../types";
import PageContainer from "../../styled/page-container";
import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import Markdown from "react-markdown";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/slices/noteSlice";
import { AppDispatch } from "../../redux/store";

const Detail: FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <PageContainer>
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Box>
          <Stack>
            <Typography variant="h3">{note.title}</Typography>

            <Stack direction="row" gap={1} flexWrap="wrap" mt={2}>
              {note.tags.map((tag) => (
                <Chip label={tag} />
              ))}
            </Stack>
          </Stack>

          <Box marginY={4} className="markdown">
            <Markdown>{note.markdown}</Markdown>
          </Box>
        </Box>

        <Stack direction="row" gap={2} justifyContent="end" py={4}>
          <Button component={Link} to="/" variant="contained" color="primary">
            Geri
          </Button>
          <Button component={Link} to="edit" variant="contained" color="info">
            Düzenle
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Sil
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Detail;
