import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';

export const Input = styled(TextField)`
  display: block;
  margin: 30px auto 0 auto;
  width: 80%;
`;

export const UserAvatar = styled(Avatar)`
  display: block;
  margin: 30px auto 0 auto;
`;

export const SubmitButton = styled(LoadingButton)`
  display: flex;
  margin: 30px auto 0 auto;
`;
