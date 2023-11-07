import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React , { useState }from 'react'
import { Valueone } from '../context/context';
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
} from "@aws-sdk/client-cognito-identity-provider";


const Login = () => {
  const {setStep} = Valueone()
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
        setStep(2)
        
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
    <Box 
    display={{xl:"flex"}}
    w={{xl:"1440px"}}
    h={{xl:"960px"}}
    px={{xl:"32px"}}
    py={{xl:"48px"}}
    flexDirection={{xl:"column"}}
    justifyContent={{xl:"center"}}
    alignItems={{xl:"center"}}
    gap={{xl:"32px"}}
    background={"white"}
    >
      <Box
      display={{xl:"flex"}}
      width={{xl:"360px"}}
      flexDirection={{xl:"column"}}
      alignItems={{xl:"center"}}
      gap={{xl:"32px"}}
      >
        <Box
        display={{xl:"flex"}}
        flexDirection={{xl:"column"}}
        alignItems={{xl:"center"}}
        gap={{xl:"24px"}}
        alignSelf={"stretch"}
        h={{xl:"98px"}}
        >
          <Image src='/Flattened.png' w={{xl:"33px"}} h={{xl:"34px"}}/>
          <Text
          textColor={"gray.900"}
          textAlign={"center"}
          fontFamily={"Chivo"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={{xl:"39.9px"}}
          >
          Log in to your account
          </Text>
        </Box>
        <Box
        display={{xl:"flex"}}
        flexDirection={{xl:"column"}}
        alignItems={{xl:"center"}}
        gap={{xl:"24px"}}
        alignSelf={"stretch"}
        borderRadius={"12px"}
        h={{xl:"212px"}}
        >
        <Box
        display={{xl:"flex"}}
        flexDirection={{xl:"column"}}
        alignItems={{xl:"flex-start"}}
        gap={{xl:"20px"}}
        alignSelf={"stretch"}
        >
          <Box
          display={{xl:"flex"}}
          flexDirection={{xl:"column"}}
          alignItems={{xl:"flex-start"}}
          alignSelf={"stretch"}
          h={"64px"}
          gap={{xl:"8px"}}
          >
            <Text
            h={{xl:"16px"}}
            alignSelf={"stretch"}
            fontFamily={"Inter"}
            fontSize={{xl:"12px"}}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={{xl:"16px"}}
            letterSpacing={{xl:"0.3px"}}
            textColor={"blackAlpha.700"}
            >
              Phone
            </Text>

            <Input 
            display={{xl:"flex"}}
            h={{xl:"40px"}}
            flexDirection={{xl:"column"}}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{xl:"10px"}}
            placeholder='Enter your phone number'
            px={{xl:"16px"}}
            flex={"1 0 0"}
            borderRadius={"4px"}
            border={"1px solid var(--gray-200, #E2E8F0)"}
            background={"white"}
            textColor={"#A0AEC0"}
            fontFamily={"Inter"}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"normal"}
            value={username}
          onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
          display={{xl:"flex"}}
          flexDirection={{xl:"column"}}
          alignItems={{xl:"flex-start"}}
          alignSelf={"stretch"}
          h={"64px"}
          gap={{xl:"8px"}}
          >
            <Text
            h={{xl:"16px"}}
            alignSelf={"stretch"}
            fontFamily={"Inter"}
            fontSize={{xl:"12px"}}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={{xl:"16px"}}
            letterSpacing={{xl:"0.3px"}}
            textColor={"blackAlpha.700"}
            >
              Password
            </Text>

            <Input 
            type='password'
            display={{xl:"flex"}}
            h={{xl:"40px"}}
            flexDirection={{xl:"column"}}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{xl:"10px"}}
            placeholder='••••••••
            '
            px={{xl:"16px"}}
            flex={"1 0 0"}
            borderRadius={"4px"}
            border={"1px solid var(--gray-200, #E2E8F0)"}
            background={"white"}
            textColor={"#A0AEC0"}
            fontFamily={"Inter"}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"normal"}
            value={password}
          onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Box>   

          <Box>

            <Box
            typeof='Button'
            display={{xl:"flex"}}
            height={{xl:"40px"}}
            px={{xl:"16px"}}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{xl:"8px"}}
            alignSelf={"stretch"}
            borderRadius={"6px"}
            background={"#11190C"}
            w={{xl:"360px"}}
            onClick={handleLogin}
            >
              <Text
              w={{xl:"53px"}}
              h={{xl:"24px"}}
              textColor={"white"}
              fontFamily={"Inter"}
              fontSize={{xl:"16px"}}
              fontStyle={"normal"}
              fontWeight={600}
              lineHeight={{xl:"24px"}}
              >
              Sign in
              </Text>
            </Box>
          </Box>


        </Box>
        
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
    </Box>
  )
}

export default Login