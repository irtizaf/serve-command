import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

import React from "react";
import Login from "./login";
import Reset from "./reset";
import Resetcode from "./resetCode";
import NewPass from "./newpassword";
import FirstTimeNewPass from "./firsttimeloginhangepass";
import { Valueone } from "../context/context";
const ConfirmMaping = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { step } = Valueone();

  return (
    <Box>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {step == 0 && <Login />}
          {step == 1 && <Reset />}
          {step == 2 && <Resetcode />}
          {step == 3 && <NewPass />}

          {step == 4 && <FirstTimeNewPass />}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConfirmMaping;
