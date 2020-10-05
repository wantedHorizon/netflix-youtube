import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import FaqsContainer from '../../containers/FaqContainer';
import FooterContainer from '../../containers/FooterContainer';
import JumbotronContainer from '../../containers/JumbotronContainer';
import { Feature, OptForm } from '../../components';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};
export default Home;
