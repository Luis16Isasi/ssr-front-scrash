import * as React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid green;
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 24px auto 0 auto;
`;

const App = ({ title }) => {

  return (
    <Container>
      <h1>Hello world</h1>
      <br />
      <h2>{title}</h2>
    </Container>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      title: 'Hola! Luis Isasi Oyolo'
    }
  }
}

export default App;