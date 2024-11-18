import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import NavBar from "@components/NavBar";
import SimpleDetailsCard from "@components/SimpleDetailsCard";
import LoadingCircle from "@components/LoadingCircle";

// import the get necessary functions
import { getSpaceCraft } from "@utils/api/spaceCraft";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SpaceCraft() {
  // Set up the state
  const [spacecraftDetails, setSpacecraftDetails] = useState(null);

  // Get the id from the router
  const router = useRouter();
  const { spacecraftId } = router.query;

  // Get the spacecraft details from the api on mount and when the id changes
  useEffect(() => {
    getSpaceCraft(spacecraftId).then((data) => {
      setSpacecraftDetails(data);
    });
  }, [spacecraftId]);

  return (
    <>
      <NavBar />
      {!spacecraftDetails ? (
        <LoadingCircle />
      ) : (
        <Container sx={{ paddingTop: 2 }}>
          <Grid container>
            <Grid xs="12" item>
              <Typography variant="h3" gutterBottom>
                {spacecraftDetails.name}
              </Typography>
            </Grid>
            <Grid item xs="6">
              <SimpleDetailsCard
                title={`${spacecraftDetails.name} details`}
                subDescription={spacecraftDetails.description}
              />
            </Grid>
            <Grid item xs="6">
              <SimpleDetailsCard
                title={`${spacecraftDetails.name} configuration`}
                subDescription={spacecraftDetails.spacecraft_config.details}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
