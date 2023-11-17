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


const NewPass = () => {
  const {setStep, username } = Valueone()
  
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordChangeForm, setShowPasswordChangeForm] = useState(false);
  const [session, setSession] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [show, setShow] = useState(false);

  // const handleLogin = async () => {
  //   const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

  //   const initiateAuthCommand = new InitiateAuthCommand({
  //     AuthFlow: 'USER_PASSWORD_AUTH',
  //     ClientId: '1727702mdj4021tmc218s3efab',
  //     AuthParameters: {
  //       USERNAME: username,
  //       PASSWORD: password,
  //     },
  //   });

  //   try {
  //     const initiateAuthResponse:any = await client.send(initiateAuthCommand);

  //     if (initiateAuthResponse.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
  //       // User needs to set a new password
  //       console.log('User needs to set a new password', initiateAuthResponse);
  //       setSession(initiateAuthResponse.Session);
  //       setShowPasswordChangeForm(true);
  //     } else {
  //       // Authentication successful
  //       console.log('Authentication successful', initiateAuthResponse);
  //       setStep(2)
        
  //       // Redirect or perform any additional actions upon successful login
  //     }
  //   } catch (error) {
  //     console.error('Authentication failed', error);

  //     // Handle error, e.g., display an error message
  //   }
  // };

  // const handleChangePassword = async () => {
  //   const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

  //   const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand({
  //     ClientId: '1727702mdj4021tmc218s3efab',
  //     ChallengeName: 'NEW_PASSWORD_REQUIRED',
  //     Session: session,
  //     ChallengeResponses: {
  //       USERNAME: username,
  //       NEW_PASSWORD: newPassword,
  //     },
  //   });

  //   try {
  //     const respondToAuthChallengeResponse = await client.send(respondToAuthChallengeCommand);
  //     console.log('Password change response:', respondToAuthChallengeResponse);

  //     // You can handle the response accordingly, e.g., show a success message
  //   } catch (error) {
  //     console.error('Password change failed', error);
  //     // Handle error, e.g., display an error message
  //   }
  // };

  // const handleForgotPassword = async () => {
  //   const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

  //   const forgotPasswordCommand = new ForgotPasswordCommand({
  //     ClientId: '1727702mdj4021tmc218s3efab',
  //     Username: username,
  //   });

  //   try {
  //     await client.send(forgotPasswordCommand);
  //     // Successful initiation of forgot password process
  //     setShowForgotPasswordForm(true);
  //   } catch (error) {
  //     console.error('Forgot password initiation failed', error);
  //     // Handle error, e.g., display an error message
  //   }
  // };


 

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
    }};

  const confirnPass = () => {

    if (password == newPassword){
      console.log("your new password is",newPassword)
      handleConfirmForgotPassword()
  
    }
    else {
      console.log("error reenter the password")
      setShow(true)
    }


  }


    


  return (
    <Box 
    //display={{xl:"flex",lg:"flex",sm:"flex"}}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    //h={"100vh"}
   // border={{sm:'3px solid green'}}
    w={{"2xl": "1920px",xl:"100%",lg:"100%",sm:"100%"}}
    h={{"2xl":"1080px",xl:"100vh",lg:"100vh",sm:"100vh",md:"100vh"}}
    px={{"2xl":"0px",xl:"32px",lg:"none",sm:"auto"}}
    py={{"2xl":"0px", xl:"48px",lg:"none",sm:"auto"}}
    pt={{"2xl":"349px"}}
    pb={{"2xl":"373px"}}
    //flexDirection={{xl:"column",lg:"column",sm:"column"}}
    
    //justifyContent={{xl:"center",lg:"center",sm:"center"}}
    
    //alignItems={{xl:"center",lg:"center",sm:"center"}}
    
    gap={{ "2xl":"0px",xl:"32px",lg:"20px",sm:"15px"}}
    background={"var(--gray-50, #F7FAFC)"}
   
    
    >
      
      <Box
      //display={{xl:"flex",lg:"flex"}}
      display={"flex"}
      width={{"2xl":"360px", xl:"360px",lg:"250px",sm:"200px"}}
      flexDirection={"column"}
      //flexDirection={{xl:"column",lg:"column"}}
      alignItems={"center"}
      //alignItems={{xl:"center",lg:"center"}}
      gap={{"2xl":"32px" ,xl:"32px",lg:"20px",sm:"15px"}}
      >
        <Box
        // display={{xl:"flex",lg:"flex"}}
        // flexDirection={{xl:"column",lg:"column"}}
        // alignItems={{xl:"center",lg:"center"}}
        display={"flex"}
        flexDirection={"column"}
        
        alignItems={"center"}
        gap={{ "2xl":"24px",xl:"24px",lg:"15px",sm:"10px"}}
        alignSelf={"stretch"}
        h={{xl:"98px",lg:"auto"}}
        >
          <Image src='/Flattened.png' 
          w={{ "2xl":"33px",xl:"33px",lg:"30px",sm:"22px"}} 
          h={{ "2xl":"34px",xl:"34px",lg:"30px",sm:"22px"}}
          />
          <Text
          textColor={"gray.900"}
          textAlign={"center"}
          fontFamily={"Chivo"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={{"2xl":"39.9px",xl:"39.9px",lg:"35px",sm:"auto"}}
          fontSize={{ "2xl":"30px",xl:"30px",sm:"21px",lg:"25px"}}
          >
          Confirm New Password
          </Text>
        </Box>
        <Box
        // display={{xl:"flex",lg:"flex"}}
        // flexDirection={{xl:"column",lg:"column"}}
        // alignItems={{xl:"center",lg:"center"}}
        display={"flex"}
        flexDirection={"column"}
        
        alignItems={"center"}
        gap={{ "2xl":"24px",xl:"24px",lg:"15px",sm:"10px"}}
        alignSelf={"stretch"}
        borderRadius={"12px"}
        h={{ "2xl":"212px",xl:"212px",lg:"auto",sm:"auto"}}
        >
        <Box
        display={"flex" }
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={{ "2xl":"24px",xl:"24px",lg:"18px",sm:"8px"}}
        alignSelf={"stretch"}
        >
          <Box
          // display={{xl:"flex",lg:"flex"}}
          // flexDirection={{xl:"column",lg:"column"}}
          
          display={"flex"}
          flexDirection={"column"}
          
          alignItems={"flex-start"}
          alignSelf={"stretch"}
          h={{"2xl":"64px",xl:"64px",lg:"auto",sm:"auto"}}
          gap={{ "2xl":"4px",xl:"4px",lg:"6px",sm:"4px"}}
          >
            <Text
            h={{ "2xl":"16px",xl:"16px",lg:"auto",sm:"auto"}}
            alignSelf={"stretch"}
            fontFamily={"Inter"}
            fontSize={{ "2xl":"12px",xl:"12px",lg:"12px",sm:"12px"}}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={{"2xl":"16px" ,xl:"16px",lg:"15px",sm:"auto"}}
            letterSpacing={{ "2xl":"0.3px",xl:"0.3px",lg:"0.3px",sm:"auto"}}
            textColor={"blackAlpha.700"}
            >
              Enter New Password
            </Text>

            <Input 
            display={"flex"}
            h={{ "2xl":"40px",xl:"40px",lg:"auto",sm:"auto"}}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ "2xl":"10px",xl:"10px",lg:"8px",sm:"4px"}}
            placeholder='Enter new password'
            py={{sm:"5px"}}
            px={{xl:"16px",lg:"14px",sm:"7px"}}
            flex={"1 0 0"}
            borderRadius={"4px"}
            border={"1px solid var(--gray-200, #E2E8F0)"}
            background={"white"}
            textColor={"#A0AEC0"}
            fontFamily={"Inter"}
            fontSize={{ "2xl":"16px",xl:"16px",sm:"14px"}}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"normal"}
            value={password}
          onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          alignSelf={"stretch"}
          h={{ "2xl":"64px",xl:"64px",lg:"auto"}}
          gap={{"2xl":"4px",xl:"4px",lg:"6px"}}
          >
            <Text
            h={{ "2xl":"16px",xl:"16px",lg:"auto",sm:"auto"}}
            alignSelf={"stretch"}
            fontFamily={"Inter"}
            fontSize={{ "2xl":"12px",xl:"12px",lg:"12px",sm:"12px"}}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={{ "2xl":"16px",xl:"16px",lg:"14px",sm:"auto"}}
            letterSpacing={{ "2xl":"0.3px",xl:"0.3px",lg:"0.3px",sm:"auto"}}
            textColor={"blackAlpha.700"}
            >
              Confirm New Password
            </Text>

            <Input 
            type='password'
            display={"flex"}
            h={{"2xl":"40px" ,xl:"40px",lg:"auto",sm:"auto"}}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ "2xl":"10px",xl:"10px",lg:"8px",sm:"4px"}}
            placeholder='Confirm password
            '
            px={{"2xl":"16px",xl:"16px",lg:"14px",sm:"7px"}}
            py={{sm:"5px"}}
            flex={"1 0 0"}
            borderRadius={"4px"}
            border={ show?"2px solid var(--red-500, #E53E3E)" : "1px solid var(--gray-200, #E2E8F0)"}
            background={"white"}
            textColor={"#A0AEC0"}
            fontFamily={"Inter"}
            fontSize={{ "2xl":"16px",xl:"16px",lg:"14px",sm:"14px"}}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"normal"}
            value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
            />
            {show && <Text
            h={{"2xl":"16px"}}
            alignSelf={"stretch"}
            textColor={"var(--red-500, #E53E3E)"}
            fontFamily={"Inter"}
            fontSize={{"2xl":"12px"}}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={{"2xl":"16px"}}
            >
              Password does not match</Text>}
          </Box>
        </Box>   

          <Box>

            <Box
            typeof='Button'
            display={"flex"}
            height={{ "2xl":"40px",xl:"40px",lg:"auto",sm:"auto"}}
            px={{ "2xl":"16px",xl:"16px",lg:"14px",sm:"7px"}}
            py={{sm:"5px"}}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ "2xl":"8px",xl:"8px",lg:"6px",sm:"4px"}}
            alignSelf={"stretch"}
            borderRadius={"6px"}
            background={"#11190C"}
            w={{ "2xl":"360px",xl:"360px",lg:"250px",sm:"200px"}}
            onClick={confirnPass}
            >
              <Text
              w={{ "2xl":"auto",xl:"auto",lg:"auto",sm:"auto"}}
              h={{"2xl":"auto",xl:"auto",lg:"auto",sm:"auto"}}
              textColor={"white"}
              fontFamily={"Inter"}
              fontSize={{ "2xl":"16px",xl:"16px",lg:"14px",sm:"12px"}}
              fontStyle={"normal"}
              fontWeight={600}
              lineHeight={{ "2xl":"24px",xl:"24px",lg:"20px",sm:"auto"}}
              >
              Reset Password and Sign in
              </Text>
            </Box>
          </Box>


        </Box>
        
      </Box>

      {/* {showPasswordChangeForm && (
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
      )} */}
    </Box>
  )
}

export default NewPass