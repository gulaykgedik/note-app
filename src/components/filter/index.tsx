import { Autocomplete, Grid2 as Grid, TextField } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ setTitle, setSelectedTags }) => {
  const { tags } = useSelector((store: RootState) => store.tags);
  return (
    <Grid container mt={5} spacing={6}>
      <Grid size={6}>
        <TextField
          label="Başlığa göre ara"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid size={6}>
        <Autocomplete
          multiple
          options={tags}
          id="tag-search"
          renderInput={(params) => (
            <TextField {...params} label="Etikete göre ara" />
          )}
          onChange={(e, allTags) => setSelectedTags(allTags)}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
