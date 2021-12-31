import React, { useState } from 'react';
import {ScrollView, StatusBar} from 'react-native';
import Header from './Header';
import Conta from './Conta';
import Credito from './Credito';
import Extras from './Extras';
import dados from '../../mock/dados.json';
const Home = () => {
  const [eyeOff, setEyeOff] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="#830ad1" translucent={true} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
        <Header dados={dados} setEyeOff={setEyeOff} eyeOff={eyeOff} />
        <Conta dados={dados} eyeOff={eyeOff} />
        <Credito dados={dados} eyeOff={eyeOff} />
        <Extras />
      </ScrollView>
    </>
  );
};

export default Home;
