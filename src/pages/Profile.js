import React from 'react';
import Footer from './Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <>
      <main>
        <Header pages isSearch={ false }>
        <h1>Profile</h1>
        </Header>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
