import styled from 'styled-components';
import commonStyles from '../../../styles/themes/common'
export const Container = styled.article`
  background: ${({theme}) => theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${commonStyles.spacing.medium};
  border-radius: ${commonStyles.borderRadius};

  h2 {
    margin: 0 0 ${commonStyles.spacing.small};
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: ${commonStyles.spacing.small};
  }
`;
