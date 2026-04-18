import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { HINT_QUESTIONS } from "../../constants/hints";

export default function EmptyState({ onHintClick }) {
  return (
    <Box sx={{ m: "auto", textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary" mb={1.5}>
        Ask me anything about the resume.
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
        {HINT_QUESTIONS.map(hint => (
          <Chip
            key={hint}
            label={hint}
            variant="outlined"
            size="small"
            onClick={() => onHintClick(hint)}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>
    </Box>
  );
}
