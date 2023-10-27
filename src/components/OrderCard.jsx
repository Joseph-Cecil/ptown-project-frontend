// components/OrderCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Text,
  Button,
  Heading,
  VStack,
  Divider,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

const OrderCard = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState('Pending');
  const hoverColor = useColorModeValue('teal.200', 'teal.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  const handleUpdateStatus = () => {
    const newStatus = orderStatus === 'Pending' ? 'Completed' : 'Pending';
    setOrderStatus(newStatus);
  };

  if (!order) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg={bgColor}
        shadow="md"
        _hover={{ bg: hoverColor }}
      >
        <Heading as="h3" size="md" fontWeight="bold" mb={2}>
            ORDER DETAILS
          </Heading>
        <Divider mb={4} />
        <VStack spacing={2} align="left">
        <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              Order:
            </Badge>{' '}
            {order.name}
          </Text>
          <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              Price:
            </Badge>{' '}
            {order.price}
          </Text>
          <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              Location:
            </Badge>{' '}
            {order.description}
          </Text>
        </VStack>
        <Divider my={4} />
        <VStack spacing={2} align="left">
          <Heading as="h3" size="md" fontWeight="bold" mb={2}>
            DELIVERY DETAILS
          </Heading>
          <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              Area:
            </Badge>{' '}
            {order.areaName}
          </Text>
          <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              Name:
            </Badge>{' '}
            {order.streetName}
          </Text>
          <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              House Number:
            </Badge>{' '}
            {order.houseNum}
          </Text>
          <Text>
            <Badge colorScheme="teal" fontWeight="bold">
              Phone:
            </Badge>{' '}
            {order.phoneNum}
          </Text>
        </VStack>
        <Text mt={4} color={textColor} fontWeight="bold">
          Status: {orderStatus}
        </Text>
        <Button
          mt={4}
          colorScheme={orderStatus === 'Pending' ? 'teal' : 'green'}
          onClick={handleUpdateStatus}
          size="sm"
        >
          {orderStatus === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
        </Button>
      </Box>
    </motion.div>
  );
};

export default OrderCard;
