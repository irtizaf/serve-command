"use client";

import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Valueone } from "../context/context";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const Reset = () => {
  const { username, setUsername, setStep } = Valueone();

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
      setStep(2);
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
              Reset Password
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
              No worries, we will help you reset your password.
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
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={{ "2xl": "4px" }}
              alignSelf={"stretch"}
            >
              <Text
                w={"auto"}
                h={{ "2xl": "16px" }}
                alignSelf={"stretch"}
                textColor={"blackAlpha.700"}
                fontFamily={"Inter"}
                fontSize={{ "2xl": "12px" }}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={{ "2xl": "16px" }}
                letterSpacing={{ "2xl": "0.3px" }}
              >
                Phone Number
              </Text>

              <Input
                display={"flex"}
                h={{ "2xl": "40px" }}
                w={"100%"}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"4px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="Enter your phone number"
                fontSize={{ "2xl": "16px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              onClick={handleForgotPassword}
            >
              <Text
                textColor={"white"}
                fontFamily={"Inter"}
                fontSize={{ "2xl": "16px" }}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={{ "2xl": "24px" }}
              >
                Send Code
              </Text>
            </Box>
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

export default Reset;
