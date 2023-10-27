// components/OrdersPage.js
import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import OrderCard from './OrderCard';
import axios from 'axios';



const OrdersPage = () => {
  const headingBgColor = useColorModeValue('teal.500', 'teal.700');
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const {data: allOrders} = await axios.get('http://localhost:5000/orders');
      setMyOrders(allOrders);
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Box
        mt={4}
        mr={2}
        bg={headingBgColor}
        color="white"
        p={4}
        textAlign="center"
        borderRadius={5}
      >
        <Heading as="h1" size="xl" mb={2}>
          All Orders
        </Heading>
      </Box>
      <Grid
        templateColumns={{
          base: '1fr',
          sm: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={4}
        p={4}
      >
        {myOrders.map(order => (
          <GridItem key={order.id}>
            <OrderCard order={order} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default OrdersPage;
