import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem 1rem;
  width: 100%;
  max-width: 938px;
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
