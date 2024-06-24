// src/components/Form/styles.js
import { css } from '@emotion/react';

export const rootStyles = css`
  & .MuiTextField-root {
    margin: ${({ theme }) => theme.spacing(1)};
  }
`;

export const paperStyles = css`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const formStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const fileInputStyles = css`
  width: 97%;
  margin: 10px 0;
`;

export const buttonSubmitStyles = css`
  margin-bottom: 10px;
`;
