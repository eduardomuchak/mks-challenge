import styled from 'styled-components';

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  background-color: #0f52ba;
  color: #ffffff;
  position: absolute;
  bottom: 0;

  &:hover {
    cursor: pointer;
    background-color: #003d9a;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`;
