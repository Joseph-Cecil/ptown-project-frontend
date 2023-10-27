import { Box, Button, FormControl, FormLabel, Input, Heading, Flex, Textarea } from '@chakra-ui/react';
import AnimatedBottomBanner from './Animation';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const history = useNavigate();
  const DEFAULT_FORM_OBJECT = {
    name: '',
    price: NaN,
    description: '',
    areaName: '',
    streetName: '',
    houseNum: '',
    phoneNum: NaN,
  };

  const [formData, setFormData] = useState(DEFAULT_FORM_OBJECT);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData )
    // Assuming formData is the data collected in Home component
    history('/delivery-details', { state: { orderData: formData } });
  };

  // const createProduct = async () => {
  //   await axios.post('http://localhost:5000/order', formData);
  //   setFormData(DEFAULT_FORM_OBJECT);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              Make Your Order
            </Heading>

            <FormControl mb={4}>
              <FormLabel htmlFor="order">Order Details</FormLabel>
              <Textarea
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.currentTarget.value
                  });
                }}
                name="name"
                value={formData.name}
                required="true"
                placeholder={
                  'Eg.1 Rice 2gh, chicken 5gh no pepper\nEg.2 One Bag of Cool sachet water\nEg.3 Vip spaghetti 15gh 2 packs'
                }
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="price">Total Price</FormLabel>
              <Input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    price: e.currentTarget.value
                  });
                }}
                name="price"
                value={formData.price}
                required="true"
                type="number"
                placeholder="Eg. 10"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="location">Preferred Location To Buy Your Order</FormLabel>
              <Input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    description: e.currentTarget.value
                  });
                }}
                name="description"
                value={formData.description}
                id="location"
                placeholder="Old Station, opposite Pharmacy"
              />
            </FormControl>

            <Button
              mt={6}
              colorScheme="teal"
              type="submit"
              w="full"
              _hover={{ bg: 'teal.600' }}
            >
              Next
            </Button>
          </Box>
        </Flex>
      </form>

      <AnimatedBottomBanner />
    </>
  );
};

export default Home;
