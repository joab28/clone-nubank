import React, {useState} from 'react';
import {
  Container,
  Titulo,
  BoxUser,
  BoxConta,
  ContainerImage,
  ContainerIcons,
  IconButton,
} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEye from 'react-native-vector-icons/Ionicons';
import IconMail from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
const Header = props => {
  const {dados, eyeOff, setEyeOff} = props;
  return (
    <>
      <Container>
        <BoxUser>
          <ContainerImage>
            <Icon
              name="user"
              size={25}
              style={{marginLeft: '25%'}}
              color="#fff"
            />
          </ContainerImage>
          <Titulo>Olá, {dados.nome}</Titulo>
        </BoxUser>
        <BoxConta>
          <ContainerIcons>
            <IconButton onPress={e => setEyeOff(!eyeOff)}>
              {eyeOff ? (
                <Feather name="eye-off" size={25} color="#fff" />
              ) : (
                <IconEye name="eye-outline" size={25} color="#fff" />
              )}
            </IconButton>

            <Icon
              name="questioncircleo"
              size={20}
              color="#fff"
              style={{marginLeft: '20%', marginTop: '5%'}}
            />
            <IconMail
              name="email-plus-outline"
              size={22}
              color="#fff"
              style={{marginLeft: '20%', marginTop: '5%'}}
            />
          </ContainerIcons>
        </BoxConta>
      </Container>
    </>
  );
};

export default Header;
