// src/components/AnimatedCard.js
import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const CardWrapper = styled.div`
  width: 300px;
  max-width: 100%;
  background-color: teal;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  color: #fff; /* Text color */
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;



const AnimatedCard = ({ title, content }) => {
  const navigate = useNavigate();
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CardContent>
            <Title>
              <h1>
                <b>Order Success</b>
              </h1>
            </Title>
            <Description>We'll call you to confirm your Order</Description>
          </CardContent>
        </CardWrapper>
      </CardContainer>

      <Button
        mt={6}
        colorScheme="teal"
        onClick={()=>navigate("/")}
        w="full"
        _hover={{ bg: 'teal.600' }}
      >
        Home Page
      </Button>
    </>
  );
};

export default AnimatedCard;
