import React from 'react';
import {
  Container,
  Row,
  Column,
  TextConta,
  ViewIcons,
  RoundIcon,
  TextIcons,
  Card,
  TextCard,
  HideContainer,
} from './style';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native';
const Conta = props => {
  const {dados, eyeOff} = props;
  return (
    <>
      <Container>
        <Row height={25}>
          <Column grid="10">
            <TextConta size={20}>Conta</TextConta>
            {!eyeOff ? (
              <TextConta size={25}>{`R$ ${dados.valor_conta}`}</TextConta>
            ) : (
              <HideContainer />
            )}
          </Column>
          <Column grid="2">
            <IconEntypo name="chevron-small-right" size={25} color="black" />
          </Column>
        </Row>
        <Row height={30}>
          <Column grid="12">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ViewIcons>
                <RoundIcon>
                  <IconAntDesign name="antdesign" size={20} color="black" />
                </RoundIcon>
                <TextIcons size={12}>Área pix</TextIcons>
              </ViewIcons>
              <ViewIcons>
                <RoundIcon>
                  <IconMaterialCommunityIcons
                    name="barcode"
                    size={20}
                    color="black"
                  />
                </RoundIcon>
                <TextIcons size={12}>Pagar</TextIcons>
              </ViewIcons>
              <ViewIcons>
                <RoundIcon>
                  <IconMaterialCommunityIcons
                    name="cash-plus"
                    size={20}
                    color="black"
                  />
                </RoundIcon>
                <TextIcons size={12}>Transferir</TextIcons>
              </ViewIcons>
              <ViewIcons>
                <RoundIcon>
                  <IconMaterialCommunityIcons
                    name="cash-plus"
                    size={20}
                    color="black"
                  />
                </RoundIcon>
                <TextIcons size={12}>Depositar</TextIcons>
              </ViewIcons>
              <ViewIcons>
                <RoundIcon>
                  <IconMaterialIcons
                    name="attach-money"
                    size={20}
                    color="black"
                  />
                </RoundIcon>
                <TextIcons size={12}>Pegar emprestado</TextIcons>
              </ViewIcons>
              <ViewIcons>
                <RoundIcon>
                  <IconFeather name="smartphone" size={20} color="black" />
                </RoundIcon>
                <TextIcons size={12}>Recarga de celular</TextIcons>
              </ViewIcons>
            </ScrollView>
          </Column>
        </Row>
        <Row height={10}>
          <Card>
            <Column grid="2" color={'#f0f1f5'}>
              <IconMaterialIcons
                name="credit-card"
                size={20}
                padding={20}
                color="black"
              />
            </Column>
            <Column grid="10" color={'#f0f1f5'}>
              <TextCard size={14} bold={1}>
                Meus cartões
              </TextCard>
            </Column>
          </Card>
        </Row>
        <Row height={30}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            height={'100%'}>
            <Card height={60} width={34}>
              <TextCard size={13} bold={0}>
                {`Você tem até R$ ${dados.valor_emprestimo} disponíveis para empréstimo.`}
              </TextCard>
            </Card>
            <Card height={60} width={34}>
              <TextCard size={13} bold={0}>
                Conquiste planos futuros: conheça as opções para guardar
                dinheiro.
              </TextCard>
            </Card>
          </ScrollView>
        </Row>
      </Container>
    </>
  );
};

export default Conta;
