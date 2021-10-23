import { ReactElement, ChangeEvent, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { Input, UserAvatar, SubmitButton } from './styled';
import {
  getAvatarUrl,
  getEmail,
  getFirstName,
  getLastName,
  getLoading,
  getPhone,
} from '../../store/user/selectors';
import {
  setFirstNameAction,
  setLastNameAction,
  setEmailAction,
  setPhoneAction,
  getUserAction,
  updateUserAction,
} from '../../store/user/actions';
import { IUser } from '../../store/user/interfaces';

function Main(): ReactElement {
  const dispatch = useDispatch();

  const [updatedSuccess, setUpdatedSuccess] = useState(false);

  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const avatarUrl = useSelector(getAvatarUrl);
  const loading = useSelector(getLoading);

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

  const closeSnackbar = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setUpdatedSuccess(false);
  };

  const fetchUser = useCallback(async () => {
    await dispatch(getUserAction());
  }, [dispatch]);

  const updateUser = useCallback(async () => {
    const updatedUser: IUser = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      avatarUrl,
    };
    await dispatch(updateUserAction(updatedUser));
    setUpdatedSuccess(true);
  }, [
    dispatch,
    firstName,
    lastName,
    email,
    phone,
    avatarUrl,
  ]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
        data-cy-id="firstname-input"
        fullWidth
      />
      <Input
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={setLastName}
        data-cy-id="lastname-input"
        fullWidth
      />
      <Input
        label="Email"
        variant="outlined"
        value={email}
        onChange={setEmail}
        data-cy-id="email-input"
        fullWidth
      />
      <Input
        label="Phone number"
        variant="outlined"
        type="number"
        value={phone || ''}
        onChange={setPhone}
        data-cy-id="phone-input"
        fullWidth
      />
      <SubmitButton
        onClick={updateUser}
        loading={loading}
        loadingPosition="center"
        variant="contained"
        size="large"
        data-cy-id="sumbit-btn"
      >
        Save
      </SubmitButton>
      <Snackbar open={updatedSuccess} autoHideDuration={6000} onClose={closeSnackbar}>
        <MuiAlert data-cy-id="success-updated" elevation={6} variant="filled">Profile Updated</MuiAlert>
      </Snackbar>
    </>
  );
}

export default Main;