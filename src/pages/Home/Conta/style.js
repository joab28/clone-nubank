import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  width: 100%;
  height: 460px;
`;
export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${props => (props.height ? props.height : '100')}%;
  align-items: center;
  box-sizing: border-box;
`;

export const Column = styled.View`
  min-height: 1px;
  background: ${props => (props.color ? props.color : '#ffffff')};
  width: ${props => (props.grid ? (props.grid / 12) * 100 : '100')}%;
`;
export const TextConta = styled.Text`
  font-size: ${props => (props.size ? props.size : 20)}px;
  color: black;
  margin-left: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;
export const ViewIcons = styled.View`
  position: relative;
  height: 100px;
  width: 85px;
  justify-content: center;
  align-items: center;
`;

export const RoundIcon = styled.View`
  position: absolute;
  bottom: 25px;
  background: #f0f1f5;
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;
export const TextIcons = styled.Text`
  position: absolute;
  top: 90px;
  font-size: ${props => (props.size ? props.size : 20)}px;

  color: black;
  font-weight: bold;
  padding-left: 10px;
  text-align: center;
`;

export const Card = styled.View`
  background-color: #f0f1f5;
  width: ${props => (props.width ? props.width : 80)}%;
  height: ${props => (props.height ? props.height : 100)}%;
  margin: 35px;
  padding: 0px 14px 0px 14px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextCard = styled.Text`
  font-size: ${props => (props.size ? props.size : 10)}px;
  color: black;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const HideContainer = styled.View`
  background-color: #f0f1f5;
  width: 70%;
  height: 39px;
  margin-left: 20px;
`;
