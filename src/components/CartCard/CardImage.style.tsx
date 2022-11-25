import styled from 'styled-components';

export const CardImage = styled.img`
  border-radius: 8px;
  max-height: 60px;
  margin-left: 20px;

  @media (max-width: 768px) {
    max-height: 50px;
    margin-left: 10px;
  }
`;
