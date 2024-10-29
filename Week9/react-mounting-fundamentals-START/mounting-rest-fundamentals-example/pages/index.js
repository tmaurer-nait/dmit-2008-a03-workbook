import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { getQuote } from "../utils/api/quotes";

export default function Home() {
  const DEFAULT_QUOTE = "Quote goes here";
  const DEFAULT_AUTHOR = "Author here";

  const [something, setSomething] = useState("");

  setSomething(something + "here's the first issue \n");
  setSomething(something + "here's the second issue \n");
  setSomething(something + "here's the third issue \n");

  const [quoteData, setQuoteData] = useState({
    quote: DEFAULT_QUOTE,
    author: DEFAULT_AUTHOR,
  });

  const [quotesFetched, setQuotesFetched] = useState(0);

  useEffect(() => {
    console.log("Home component mounted");
    changeQuote();
  }, []);

  useEffect(() => {
    if (
      quoteData.quote !== DEFAULT_QUOTE &&
      quoteData.author !== DEFAULT_AUTHOR
    ) {
      // Whenever quote data changes update the number of quotes fetched
      setQuotesFetched(quotesFetched + 1);
    }
  }, [quoteData]);

  const changeQuote = () => {
    getQuote().then((data) => {
      setQuoteData({
        quote: data.quote,
        author: "Kanye West",
      });
    });
  };

  return (
    <div>
      <Head>
        <title>We Love Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            We Love Quotes
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              {quoteData.quote}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              {quoteData.author}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" onClick={changeQuote}>
                Get New Quote
              </Button>
            </Box>
            <Typography
              sx={{ pt: 8 }}
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              You have fetched {quotesFetched} quotes
            </Typography>
          </Box>
        </Container>
      </main>
    </div>
  );
}
