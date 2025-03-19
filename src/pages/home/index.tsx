import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageContainer from "../../styled/page-container";
import { Grid2 as Grid, Button, Stack, Typography, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import Filter from "../../components/filter";
import NoteCard from "../../components/card/note-card";

const Home: FC = () => {
  const { notes } = useSelector((store: RootState) => store.notes);
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredNotes = useMemo(
    () =>
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(title.toLowerCase()) &&
          selectedTags.every((stag) => note.tags.includes(stag))
      ),
    [notes, title, selectedTags]
  );

  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={1}>
          <img src="/logo.png" width={50} />
          <Typography variant="h4">Notlar</Typography>
        </Stack>

        <Button component={Link} to="/create" variant="contained">
          Oluştur
        </Button>
      </Stack>

      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />

      <Grid container spacing={2} mt={4}>
        {filteredNotes.length === 0 ? (
          <Grid size={12}>
            <Alert severity="info">Not Bulunamadı...</Alert>
          </Grid>
        ) : (
          filteredNotes.map((note) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={note.id}>
              <NoteCard key={note.id} note={note} />
            </Grid>
          ))
        )}
      </Grid>
    </PageContainer>
  );
};

export default Home;
