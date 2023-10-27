import React from 'react';
import { useColorMode, useColorModeValue, Text, Flex, Switch } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const isDarkMode = colorMode === 'dark';

  return (<> <Flex align="center" position="sticky"
    top="0" >
  <Switch
    size="lg"
    
    colorScheme="teal"
    isChecked={isDarkMode}
    onChange={toggleColorMode}
    aria-label={`Switch to ${text} mode`}
    icon={<FaSun boxSize={5} />}
    checkedIcon={<FaMoon boxSize={5} />}
  />
  <Text ml={2} fontSize="lg" fontWeight="bold" color={isDarkMode ? 'gray.300' : 'gray.700'}>
    {text === 'dark' ? 'Dark Mode' : 'Light Mode'}
  </Text>
</Flex></>       
    
  );
};
