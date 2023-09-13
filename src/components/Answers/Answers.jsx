import React, { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';

const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map(answer => {
        const isLiked = answer.likes.includes(user?._id);

        return (
          <Box key={answer._id}>
            <p>{answer.reply}</p>
          </Box>
        );
      })}
    </div>
  );
};

export default Answers;
