import { Box, Button, Stack } from "@mui/material";

import { useState } from "react";

export default function Settings(props) {
  // props will contain a colorOptions prop (array of color strings)

  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <Box sx={{ backgroundColor: selectedColor }}>
      <Stack direction="row" spacing={2}>
        {props.colorOptions.map((color, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              sx={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColor(color);
              }}
            >
              {color}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
}
