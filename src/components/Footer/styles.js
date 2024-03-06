import styled from 'styled-components';
import commonStyles from'../../styles/themes/common'

export const Container = styled.footer`
  background: ${({theme}) => theme.footerBackgrourdColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${commonStyles.spacing.large};
  border-radius: ${commonStyles.borderRadius};
  justify-content: space-between;
  margin-top: ${commonStyles.spacing.large};

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
