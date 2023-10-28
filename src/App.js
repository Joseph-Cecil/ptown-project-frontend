import React, { useState } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';
import DeliveryDetails from './components/DeliveryDetails';
import Card from './components/Card';
import Orders from "./components/OrdersPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {disableReactDevTools} from "@fvilers/disable-react-devtools"


if(process.env.NODE_ENV === "production"){
  disableReactDevTools();
}

  export const orderStatus = React.createContext();
function App() {

  const [orderState, setOrderState] = useState("")

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        justifyContent="space-around"
        margin="1rem"
        fontSize="xl"
      >
        <ColorModeSwitcher justifySelf="flex-end"/>
        <orderStatus.Provider value={orderState}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="delivery-details" element={<DeliveryDetails/>} />
            <Route path="success" element={<Card/>} />
            <Route path='orders' element={<Orders/>} />
          </Routes>
        </Router>
        </orderStatus.Provider>
      </Box>
    </ChakraProvider>
  );
}

export default App;
