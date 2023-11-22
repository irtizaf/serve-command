import { Box, Image, Input, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import { Valueone } from "../context/context";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const Resetcode = () => {
  const {
    setStep,
    username,
    setUsername,
    verificationCode,
    setVerificationCode,
  } = Valueone();

  const handleForgotPassword = async () => {
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

    const forgotPasswordCommand = new ForgotPasswordCommand({
      ClientId: "1727702mdj4021tmc218s3efab",
      Username: username,
    });

    try {
      await client.send(forgotPasswordCommand);
      // Successful initiation of forgot password process
      //setShowForgotPasswordForm(true);
    } catch (error) {
      console.error("Forgot password initiation failed", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      w={{ "2xl": "1920px" }}
      background={"var(--gray-50, #F7FAFC)"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={{ "2xl": "32px" }}
        flexShrink={0}
        w={{ "2xl": "360px" }}
        h={"auto"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={{ "2xl": "24px" }}
          alignSelf={"stretch"}
        >
          <Image
            src={"/Flattened.png"}
            w={{ "2xl": "33px" }}
            h={{ "2xl": "34px" }}
            fill={"#11190C"}
          />
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ "2xl": "12px" }}
            alignSelf={"stretch"}
          >
            <Text
              alignSelf={"stretch"}
              textAlign={"center"}
              fontFamily={"Chivo"}
              fontSize={{ "2xl": "30px" }}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={{ "2xl": "39.9px" }}
              w={"100%"}
              h={"auto"}
            >
              Enter your reset code
            </Text>

            <Text
              alignSelf={"stretch"}
              textAlign={"center"}
              fontFamily={"Inter"}
              fontSize={{ "2xl": "16px" }}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={{ "2xl": "24px" }}
              w={"100%"}
              h={"auto"}
              textColor={"var(--gray-600, #475467)"}
            >
              <Text>
                Code sent to: <strong>{username}</strong>
              </Text>
              <br />

              <Text>
                {" "}
                If your phone number exists in ServeCommand, you will receive a
                text with your code to update your password.
              </Text>
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={{ "2xl": "32px" }}
          alignSelf={"stretch"}
          w={"100%"}
          h={"auto"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ "2xl": "24px" }}
            alignSelf={"stretch"}
            borderRadius={"12px"}
          >
            <Box
              display={"flex"}
              //  flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "6px" }}
              alignSelf={"stretch"}
            >
              

              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </Box>

            <Box
              typeof="Button"
              display={"flex"}
              h={{ "2xl": "40px" }}
              px={{ "2xl": "16px" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "8px" }}
              alignSelf={"stretch"}
              borderRadius={"6px"}
              background={"var(--primary-main, #11190C)"}
              onClick={() => setStep(3)}
            >
              <Text
                textColor={"white"}
                fontFamily={"Inter"}
                fontSize={{ "2xl": "16px" }}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={{ "2xl": "24px" }}
              >
                Enter Code
              </Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            w={{ "2xl": "360px" }}
            justifyContent={"center"}
            textAlign={"center"}
            gap={{"2xl":"1"}}
          >
            <Text
              textColor={"var(--gray-600, #475467)"}
              fontFamily={"Inter"}
              fontSize={{ "2xl": "16px" }}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={{ "2xl": "24px" }}
            >
              
              Didn’t receive the email?
            </Text>

            <Text
              textColor={"var(--primary-main, #11190C)"}
              fontFamily={"Inter"}
              fontSize={{ "2xl": "16px" }}
              fontStyle={"normal"}
              fontWeight={600}
              lineHeight={{ "2xl": "24px" }}
              onClick={handleForgotPassword}
            >
              Click to resend
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          h={{ "2xl": "40px" }}
          px={{ "2xl": "16px" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ "2xl": "8px" }}
          alignSelf={"stretch"}
          borderRadius={"6px"}
          w={"100%"}
          onClick={() => setStep(0)}
        >
          <Image
            src="/left-icon.svg"
            h={{ "2xl": "16px" }}
            w={{ "2xl": "16px" }}
          />

          <Text
            h={"auto"}
            w={"auto"}
            textColor={"var(--gray-800, #1A202C)"}
            fontFamily={"Inter"}
            fontSize={{ "2xl": "16px" }}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={{ "2xl": "24px" }}
          >
            Back to log in
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Resetcode;
