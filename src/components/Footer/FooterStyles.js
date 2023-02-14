
import styled from 'styled-components';
   
export const Box = styled.div`
  background-image: linear-gradient(black, #202121);
  position: absolute;
  width: 100%;
  overflow: hidden;
  margin-top: 10vh;
  
   
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
   
export const Row = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
   
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
   
export const FooterLink = styled.a`
  color: gray;
  font-size: 18px;
  text-decoration: none;
  margin-left: 5px;
  text-align: center;
   
  &:hover {
      color: white;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;