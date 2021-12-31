import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  width: 100%;
  flex-direction: column;
`;
export const Divider = styled.View`
  border-bottom-color: #f0f1f5;
  border-bottom-width: 2px;
`;
export const Card = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 20px;
`;

export const Box = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextCard = styled.Text`
  font-size: ${props => (props.size ? props.size : 19)}px;
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  margin-bottom: 5px;
`;

export const BoxInvestimentos = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #f0f1f5;
  border-radius: 10px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;
export const HideContainer = styled.View`
  background-color: #f0f1f5;
  width: 70%;
  height: 39px;
`;
