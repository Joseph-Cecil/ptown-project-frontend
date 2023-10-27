import { Box } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

const AnimatedBottomBanner = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, translateY: '100%' }}
    //   animate={{ opacity: 1, translateY: '0%' }}
    //   exit={{ opacity: 0, translateY: '100%' }}
    //   transition={{ duration: 1 }}
    // >
      <Box
      Width="70vh"
        marginTop="1rem"
        bottom="0"
        left="90%"
        right="90%"
        bg="teal.500"
        color="white"
        borderRadius="5%"
        p={4}
        textAlign="center"
      >
        <p>This is a nice animated banner at the bottom!</p>
      </Box>
    // </motion.div>
  );
};

export default AnimatedBottomBanner;
