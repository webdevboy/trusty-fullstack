import { ReactElement, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import { Input, UserAvatar, SubmitButton } from './styled';
import {
  getAvatarUrl,
  getEmail,
  getFirstName,
  getLastName,
  getPhone,
} from '../../store/user/selectors';
import {
  setFirstNameAction,
  setLastNameAction,
  setEmailAction,
  setPhoneAction,
} from '../../store/user/actions';

function Main(): ReactElement {
  const dispatch = useDispatch();

  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const avatarUrl = useSelector(getAvatarUrl);

  const setFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstNameAction(e.target.value));
  };

  const setLastName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastNameAction(e.target.value));
  };

  const setEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailAction(e.target.value));
  };

  const setPhone = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhoneAction(+e.target.value));
  };

  return (
    <>
      <Typography align="center" variant="h2" component="h2">
        User Profile
      </Typography>
      <UserAvatar
        alt="Remy Sharp"
        src={avatarUrl}
        sx={{ width: 100, height: 100 }}
      />
      <Input
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={setFirstName}
        fullWidth
      />
      <Input
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={setLastName}
        fullWidth
      />
      <Input
        label="Email"
        variant="outlined"
        value={email}
        onChange={setEmail}
        fullWidth
      />
      <Input
        label="Phone number"
        variant="outlined"
        type="number"
        value={phone || ''}
        onChange={setPhone}
        fullWidth
      />
      <SubmitButton variant="contained" size="large">
        Save
      </SubmitButton>
    </>
  );
}

export default Main;