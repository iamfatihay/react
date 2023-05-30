import styled from "styled-components";

const KartSSS = styled.div`
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({ters})=>ters || "row"};

  @media (max-width:${({theme})=>theme.responsive}){
    flex-direction: column
  }
`;

export default KartSSS;
