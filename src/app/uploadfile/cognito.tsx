"use client"
import React, { useState } from 'react';
import { Input, Button, Box, Heading, VStack } from '@chakra-ui/react';
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const LoginWithPasswordChangeAndForgot: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordChangeForm, setShowPasswordChangeForm] = useState(false);
  const [session, setSession] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const handleLogin = async () => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const initiateAuthCommand = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: '1727702mdj4021tmc218s3efab',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    try {
      const initiateAuthResponse:any = await client.send(initiateAuthCommand);

      if (initiateAuthResponse.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
        // User needs to set a new password
        console.log('User needs to set a new password', initiateAuthResponse);
        setSession(initiateAuthResponse.Session);
        setShowPasswordChangeForm(true);
      } else {
        // Authentication successful
        console.log('Authentication successful', initiateAuthResponse);
        // Redirect or perform any additional actions upon successful login
      }
    } catch (error) {
      console.error('Authentication failed', error);
      // Handle error, e.g., display an error message
    }
  };

  const handleChangePassword = async () => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand({
      ClientId: '1727702mdj4021tmc218s3efab',
      ChallengeName: 'NEW_PASSWORD_REQUIRED',
      Session: session,
      ChallengeResponses: {
        USERNAME: username,
        NEW_PASSWORD: newPassword,
      },
    });

    try {
      const respondToAuthChallengeResponse = await client.send(respondToAuthChallengeCommand);
      console.log('Password change response:', respondToAuthChallengeResponse);

      // You can handle the response accordingly, e.g., show a success message
    } catch (error) {
      console.error('Password change failed', error);
      // Handle error, e.g., display an error message
    }
  };

  const handleForgotPassword = async () => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const forgotPasswordCommand = new ForgotPasswordCommand({
      ClientId: '1727702mdj4021tmc218s3efab',
      Username: username,
    });

    try {
      await client.send(forgotPasswordCommand);
      // Successful initiation of forgot password process
      setShowForgotPasswordForm(true);
    } catch (error) {
      console.error('Forgot password initiation failed', error);
      // Handle error, e.g., display an error message
    }
  };

  const handleConfirmForgotPassword = async () => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const confirmForgotPasswordCommand = new ConfirmForgotPasswordCommand({
      ClientId: '1727702mdj4021tmc218s3efab',
      Username: username,
      ConfirmationCode: verificationCode,
      Password: newPassword,
    });

    try {
      await client.send(confirmForgotPasswordCommand);
      // Successful confirmation of forgot password
      console.log('Password reset successful');
    } catch (error) {
      console.error('Password reset failed', error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading>Login</Heading>
      <Box>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {showPasswordChangeForm && (
        <>
          <Box>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Box>
          <Button onClick={handleChangePassword}>Change Password</Button>
        </>
      )}
      <Button onClick={handleLogin}>Login</Button>
      {showForgotPasswordForm ? (
        <>
          <Box>
            <Input
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </Box>
          <Box>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Box>
          <Button onClick={handleConfirmForgotPassword}>Confirm Forgot Password</Button>
        </>
      ) : (
        <Button onClick={handleForgotPassword}>Forgot Password</Button>
      )}
    </VStack>
  );
};

export default LoginWithPasswordChangeAndForgot;
