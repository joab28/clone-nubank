import React from 'react';
import {
  Container,
  Divider,
  Card,
  Box,
  TextCard,
  BoxInvestimentos,
  HideContainer,
} from './style';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Credito = props => {
  let {dados, eyeOff} = props;
  return (
    <Container>
      <Divider />
      <Card>
        <Ionicons name="card-outline" size={22} color="black" />
        <Box>
          <TextCard bold={1}>Cartão de crédito</TextCard>
          <IconEntypo name="chevron-small-right" size={25} color="black" />
        </Box>
        <TextCard color={'#777777'} size={15}>
          Fatura atual
        </TextCard>

        {!eyeOff ? (
          <TextCard bold={1} size={22}>{`R$ ${dados.fatura_cartao}`}</TextCard>
        ) : (
          <HideContainer />
        )}
        <TextCard
          color={'#777777'}
          size={
            15
          }>{`Limite disponível de R$ ${dados.limite_disponivel}`}</TextCard>
      </Card>
      <Divider />

      <Card>
        <FontAwesome5 name="hand-holding-usd" size={20} color="black" />
        <Box>
          <TextCard bold={1}>Emprestimo</TextCard>
          <IconEntypo name="chevron-small-right" size={25} color="black" />
        </Box>
        <TextCard color={'#777777'} size={15}>
          Valor disponivel de até
        </TextCard>
        {!eyeOff ? (
          <TextCard size={15} color={'#777777'}>
            R$ 1000,00
          </TextCard>
        ) : (
          <HideContainer />
        )}
      </Card>
      <Divider />

      <Card>
        <FontAwesome5 name="signal" size={20} color="black" />
        <Box>
          <TextCard bold={1}>Investimentos</TextCard>
          <IconEntypo name="chevron-small-right" size={25} color="black" />
        </Box>
        <TextCard color={'#777777'} size={15}>
          O keito Nu de investir: sem asteriscos, linguagem fácil e a partir de
          R$ 1. Saiba mais.
        </TextCard>
        <BoxInvestimentos>
          <FontAwesome
            name="money"
            size={25}
            color="black"
            style={{marginRight: 10}}
          />
          <TextCard bold={1} size={13}>
            Consultar saldo para transferência
          </TextCard>
        </BoxInvestimentos>
      </Card>
      <Divider />

      <Card>
        <Feather name="heart" size={20} color="black" />
        <Box>
          <TextCard bold={1}>Seguro de vida</TextCard>
          <IconEntypo name="chevron-small-right" size={25} color="black" />
        </Box>
        <TextCard color={'#777777'} size={15}>
          Conheça Nubank Vida: um seguro simples e que cabe no bolso.
        </TextCard>
      </Card>
      <Divider />

      <Card>
        <SimpleLineIcons name="handbag" size={20} color="black" />
        <Box>
          <TextCard bold={1}>Shopping</TextCard>
          <IconEntypo name="chevron-small-right" size={25} color="black" />
        </Box>
        <TextCard color={'#777777'} size={15}>
          Vantagens exclusivas das nossas marcas preferidas
        </TextCard>
      </Card>
      <Divider />
    </Container>
  );
};

export default Credito;
