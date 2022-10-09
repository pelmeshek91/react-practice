import styled from 'styled-components';

export const Value = styled.span`
  color: ${({ isViolet }) => (isViolet ? 'lavender' : 'lightseagreen')};
`;
export const Text = styled.p`
  font-size: 14px;
  color: lightcoral;

  &:hover {
    color: lightskyblue;
  }
  &:hover ${Value} {
    color: lightsteelblue;
  }
`;
