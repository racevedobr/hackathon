import React from 'react';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';
import Background from '../../components/Background';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>

          <SignLink onPress={() => {}}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
