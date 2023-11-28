// pages/index.js
"use client";
import { Box, Progress } from "@chakra-ui/react";
import React from "react";
import NavBar from "./screens/screen1";
import Sidescreen from "./screens/sidescreen";
import { Valueone } from "./context/context";
import Login from "./screens/login";
import FileUpload from "./uploadfile/button";
import Reset from "./screens/reset";
import Resetcode from "./screens/resetCode";
import NewPass from "./screens/newpassword";
import LoginWithPasswordChangeAndForgot from "./uploadfile/cognito";
import Progressbar from "./screens/progressbar";
import FirstTimeNewPass from "./screens/firsttimeloginhangepass";
import ConfirmMaping from "./screens/confirmMaping";
import NestedMenu from "./uploadfile/dropdowntesting";
import NestedDropdownMenu from "./uploadfile/dropdowntesting";

const Home = () => {
  const { step } = Valueone();
 
  return (
    <Box>
      {/* {step == 0 && <Login />}
      {step == 1 && <Reset />}
      {step == 2 && <Resetcode />}
      {step == 3 && <NewPass />}

      {step == 4 && <FirstTimeNewPass />}

      {step == 5 && (
        <Box display={"flex"}>
          <NavBar />
          <Sidescreen />
        </Box>
      )} */}

    
      <NestedDropdownMenu />

      
    </Box>
  );
};

export default Home;
