import React from 'react';
import {
  Container,
  Card,
  TextCard,
  ButtonMais,
  TextArea,
  TextTitle,
} from './style';
import {ScrollView} from 'react-native';

const Extras = props => {
  return (
    <Container>
      <TextTitle size={16} bold={1}>
        Descubra mais
      </TextTitle>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card width={290}>
          <TextArea>
            <TextCard size={18} bold={1}>
              Indique seus amigos
            </TextCard>
            <TextCard size={13} bold={0}>
              Mostre aos seus amigos como é fácil ter uma vida sem burocracia.
            </TextCard>
          </TextArea>
          <ButtonMais>
            <TextCard size={16} color={'white'} bold={0}>
              indicar amigos
            </TextCard>
          </ButtonMais>
        </Card>
        <Card width={290}>
          <TextArea>
            <TextCard size={18} bold={1}>
              WhatsApp
            </TextCard>
            <TextCard size={13} bold={0}>
              Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem
              nem sair da conversa.
            </TextCard>
          </TextArea>
          <ButtonMais>
            <TextCard size={16} color={'white'} bold={0}>
              Quero conhecer
            </TextCard>
          </ButtonMais>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Extras;
