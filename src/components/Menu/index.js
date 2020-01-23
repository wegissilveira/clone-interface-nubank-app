import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

import QRcode from 'react-native-qrcode-svg'

export default function Menu({translateY}) {
  return (
    <Container style={{
        opacity: translateY.interpolate({
            inputRange:[0,150],
            outputRange:[0,1],
            extrapolate:'clamp'

        })
    }}
     > 
        <Code>
            <QRcode 
                value="https://rocketseat.com.br"
                color="#8B10AE"
                backgroundColor="#FFF"
                size={80}
            />
        </Code>
        <Nav>
            <NavItem>
                <Icon name="help-outline" size={20} color="#FFF" />
                <NavText>Me ajuda</NavText>
            </NavItem>
            <NavItem>
                <Icon name="person-outline" size={20} color="#FFF" />
                <NavText>Meu perfil</NavText>
            </NavItem>
            <NavItem>
                <Icon name="credit-card" size={20} color="#FFF" />
                <NavText>Configurar cartão</NavText>
            </NavItem>
            <NavItem>
                <Icon name="smartphone" size={20} color="#FFF" />
                <NavText>Configurações do app</NavText>
            </NavItem>
        </Nav>

        <SignOutButton onPress={()=>{}}>
            <SignOutButtonText>SAIR DO APP</SignOutButtonText>
        </SignOutButton>
    </Container>
  );
}
