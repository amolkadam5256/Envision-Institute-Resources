import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  width: max-content;
`;

export default function HalfRating() {
  return (
    <StyledStack spacing={2}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
      <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
    </StyledStack>
  );
}
