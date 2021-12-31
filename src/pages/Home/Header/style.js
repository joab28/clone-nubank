import styled from 'styled-components/native';

export const Container = styled.View`
  background: #830ad1;
  width: 100%;
  padding-top: 34px;
  flex-direction: row;
  height: 165px;
`;
export const BoxUser = styled.View`
  background: #830ad1;
  width: 50%;
  height: 100%;
`;
export const BoxConta = styled.View`
  background: #830ad1;
  width: 50%;
  margin-top: 5%;
`;
export const ContainerImage = styled.View`
  background: #9a3ad7;
  width: 50px;
  height: 50px;
  justify-content: center;
  border-radius: 30px;
  margin-top: 15px;
  margin-left: 20px;
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
`;

export const Titulo = styled.Text`
  color: white;
  font-size: 20px;
  margin-top: 25px;
  margin-left: 20px;
  font-weight: bold;
`;

export const IconButton = styled.TouchableOpacity`
  min-width: 28px;
  min-height: 28px;
  margin-top: 7px;
`;
