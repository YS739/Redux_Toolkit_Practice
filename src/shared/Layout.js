import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <h1>My ToDo List</h1>
    </Head>
  );
};

const Footer = () => {
  return (
    <Foot>
      <h1>화이팅!</h1>
    </Foot>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

// styled-components
const Head = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 40px;
`;

const Foot = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
