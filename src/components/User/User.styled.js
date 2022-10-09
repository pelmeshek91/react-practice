import styled from 'styled-components';

export const Value = styled.span`
  color: ${({ isViolet }) => (isViolet ? 'lavender' : 'lightpink')};
`;
export const Text = styled.p`
  font-size: 14px;
  color: lightskyblue;

  &:hover {
    color: lightpink;
  }
  &:hover ${Value} {
    color: lightsteelblue;
  }
`;
