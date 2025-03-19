import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addTag } from "../../redux/slices/tagsSlice";

interface Props {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagSelect: FC<Props> = ({ selectedTags, setSelectedTags }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { tags } = useSelector((store: RootState) => store.tags);
  return (
    <div>
      <Autocomplete
        multiple
        options={tags}
        freeSolo
        value={selectedTags}
        onChange={(_, inputTags) => {
          if (inputTags.length === 5) {
            return alert("En fazla 5 etiket ekleyebilirsiniz");
          }

          if (inputTags[inputTags.length - 1]) {
            dispatch(addTag(inputTags[inputTags.length - 1]));
          }

          setSelectedTags(inputTags);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Etiketler"
            variant="outlined"
            placeholder="Etiket ekle"
          />
        )}
      />
    </div>
  );
};

export default TagSelect;
