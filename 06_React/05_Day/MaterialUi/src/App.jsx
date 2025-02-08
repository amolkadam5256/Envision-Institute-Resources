import React from "react";
import styled from "styled-components";
import { TextField, Autocomplete } from "@mui/material";
import HalfRating from "./Rating";
import BasicTable from "./TableUi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Dark Knight", year: 2008 },
  { label: "Pulp Fiction", year: 1994 },
  { label: "Schindler's List", year: 1993 },
  { label: "The Lord of the Rings: The Return of the King", year: 2003 },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  { label: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { label: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { label: "The Lord of the Rings: The Two Towers", year: 2002 },
  { label: "The Matrix", year: 1999 },
  { label: "Goodfellas", year: 1990 },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Seven Samurai", year: 1954 },
  { label: "Se7en", year: 1995 },
  { label: "City of God", year: 2002 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Spirited Away", year: 2001 },
  { label: "The Green Mile", year: 1999 },
  { label: "Interstellar", year: 2014 },
  { label: "Parasite", year: 2019 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "The Lion King", year: 1994 },
  { label: "Gladiator", year: 2000 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "The Pianist", year: 2002 },
  { label: "Whiplash", year: 2014 },
  { label: "The Departed", year: 2006 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Blvd.", year: 1950 },
  { label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", year: 1964 },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "WALL·E", year: 2008 },
  { label: "The Shining", year: 1980 },
  { label: "Avengers: Infinity War", year: 2018 },
  { label: "Oldboy", year: 2003 },
  { label: "Coco", year: 2017 },
  { label: "Braveheart", year: 1995 },
  { label: "American History X", year: 1998 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Spider-Man: Into the Spider-Verse", year: 2018 },
  { label: "Toy Story", year: 1995 },
  { label: "The Grand Budapest Hotel", year: 2014 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Rashomon", year: 1950 },
  { label: "Batman Begins", year: 2005 },
  { label: "The Truman Show", year: 1998 },
  { label: "Joker", year: 2019 },
  { label: "Mad Max: Fury Road", year: 2015 },
  { label: "Inside Out", year: 2015 },
  { label: "Gone Girl", year: 2014 },
  { label: "The Wolf of Wall Street", year: 2013 },
  { label: "Blade Runner 2049", year: 2017 },
  { label: "Her", year: 2013 },
  { label: "Logan", year: 2017 },
  { label: "Zootopia", year: 2016 },
  { label: "John Wick", year: 2014 },
  { label: "Dune: Part One", year: 2021 },
  { label: "Everything Everywhere All at Once", year: 2022 },
  { label: "Spider-Man: No Way Home", year: 2021 }
];

const App = () => {
  return (
    <Container>
      <Title>Amol Tukaram Kadam</Title>
      <Section>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </Section>
      <Section>
        <HalfRating />
        <BasicTable />
      </Section>
    </Container>
  );
};

export default App;