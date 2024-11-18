import Head from "next/head";

// Do the imports
import { useState, useEffect } from "react";
import { getAgency } from "@utils/api/agencies";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import NavBar from "@components/NavBar";
import SimpleDetailsCard from "@components/SimpleDetailsCard";

import { useRouter } from "next/router";
import LoadingCircle from "@components/LoadingCircle";

export default function Agency() {
  // Create a stateful variable to store the agency details
  const [agencyDetails, setAgencyDetails] = useState(null);

  // set up the router
  const router = useRouter();
  // get the id from the query
  const { id } = router.query;

  // Load the details on mount and when id changes
  useEffect(() => {
    getAgency(id).then((data) => {
      setAgencyDetails(data);
    });
  }, [id]);

  return (
    <>
      <NavBar />
      {!agencyDetails ? (
        <LoadingCircle />
      ) : (
        <Container sx={{ paddingTop: 2 }}>
          <Grid container>
            <Grid item xs="2">
              <img
                alt={agencyDetails.name}
                src={agencyDetails.logo_url}
                style={{ width: "120px" }}
              />
            </Grid>
            <Grid item xs="10">
              <Typography variant="h3" gutterBottom>
                {`${agencyDetails.name} (${agencyDetails.abbrev})`}
              </Typography>
            </Grid>
            <Grid item xs="4">
              <Typography variant="h5">Launch Details</Typography>
              <SimpleDetailsCard
                title={"Total Launches"}
                description={agencyDetails.total_launch_count}
              />
              <SimpleDetailsCard
                title={"Successful Launches"}
                description={agencyDetails.successful_launches}
              />
              <SimpleDetailsCard
                title={"Successful Landings"}
                description={agencyDetails.successful_landings}
              />
            </Grid>
            <Grid item xs="4">
              <Typography variant="h5">{`Agency Information`}</Typography>
              <SimpleDetailsCard
                title={"administrator"}
                description={`${agencyDetails.administrator}`}
              />
              <SimpleDetailsCard
                title={"Space Agency Details"}
                description={`Founded ${agencyDetails.founding_year}`}
                subDescription={agencyDetails.description}
              />
            </Grid>
            <Grid item xs="4">
              <Typography variant="h5">{`Spacecraft List`}</Typography>
              {agencyDetails.spacecraft_list &&
                agencyDetails.spacecraft_list.map((spacecraft) => {
                  return (
                    <SimpleDetailsCard
                      key={spacecraft.id}
                      description={spacecraft.name}
                      buttonCallback={() => {
                        router.push(`/spacecraft/${spacecraft.id}`);
                      }}
                      buttonName="Go to Spacecraft Page"
                    />
                  );
                })}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
