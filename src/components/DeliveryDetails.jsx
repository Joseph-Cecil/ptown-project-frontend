import { Box, Button, FormControl, FormLabel, Input, Heading, Flex, useToast } from '@chakra-ui/react';
import AnimatedBottomBanner from './Animation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import api from "../api";

const DeliveryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const orderData = location.state?.orderData || {};
  const toast = useToast();
  
  const [deliveryData, setDeliveryData] = useState({
    areaName: '',
    streetName: '',
    houseNum: '',
    phoneNum: 0,
  });

  useEffect(() => {
    if (location.state) {
      setDeliveryData((prevData) => ({ ...prevData, ...location.state.orderData }));
    }
  }, [location.state]);

  const handleSubmit = async () => {
     // Perform validation before allowing submission
     if (!deliveryData.areaName || !deliveryData.streetName || !deliveryData.houseNum) {
      // Display an error toast or message
      toast({
        title: 'Error',
        description: 'Please fill out all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    navigate("/success")

    // Extract only the necessary data properties
    const simplifiedData = {
      areaName: deliveryData.areaName,
      streetName: deliveryData.streetName,
      houseNum: deliveryData.houseNum,
      phoneNum: deliveryData.phoneNum,
      name: orderData.name || '',
      price: orderData.price || null,
      description: orderData.description || '',
    };
    console.log('Simplified data:', simplifiedData);

    // Send the complete order data to your server
    try {
      await axios.post(`${api}/order`, simplifiedData);
      console.log('Order submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Flex direction="column" align="center" justify="center" minH="75vh">
        <Box
          maxW={{ base: '90%', sm: '80%', md: '50%' }}
          w="full"
          p={{ base: 4, md: 8 }}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Heading mb={6} textAlign="center">
            Delivery Details
          </Heading>

          <FormControl mb={4}>
            <FormLabel htmlFor="areaName">Full Name</FormLabel>
            <Input
              onChange={(e) => setDeliveryData({ ...deliveryData, areaName: e.currentTarget.value })}
              value={deliveryData.areaName}
              required="true"
              placeholder="Eg. Kwame Kwadwo"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="streetName">StreetName</FormLabel>
            <Input
              onChange={(e) => setDeliveryData({ ...deliveryData, streetName: e.currentTarget.value })}
              required="true"
              value={deliveryData.streetName}
              placeholder="Eg. Mercedes Street"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="houseNum">House Number</FormLabel>
            <Input
              onChange={(e) => setDeliveryData({ ...deliveryData, houseNum: e.currentTarget.value })}
              value={deliveryData.houseNum}
              required="true"
              placeholder="GB123"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="phoneNum">Phone Number</FormLabel>
            <Input
              onChange={(e) => setDeliveryData({ ...deliveryData, phoneNum: e.currentTarget.value })}
              
              placeholder="0274117900"
            />
          </FormControl>

          <Button
            mt={6}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
            w="full"
            _hover={{ bg: 'teal.600' }}
          >
            Place Order
          </Button>
        </Box>
      </Flex>

      <AnimatedBottomBanner />
    </>
  );
};

export default DeliveryDetails;
