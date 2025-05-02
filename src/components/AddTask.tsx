import React, { Fragment, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { TodoInput } from "./TodoInput";

export const AddTask = ({
  task,
  setTask,
  onAdd,
}: {
  task: string;
  setTask: (value: string) => {};
  onAdd: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Button
        bg={"#6c63ff"}
        borderRadius={"50%"}
        bottom={10}
        color={"white"}
        height={"60px"}
        left={"62%"}
        onClick={onOpen}
        position={"fixed"}
        width={"60px"}
        _hover={{ bg: "" }}
      >
        <AddIcon alignSelf={"center"} fontSize={25} width={"full"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>NEW NOTE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TodoInput task={task} setTask={setTask as any} onAdd={onAdd} />
          </ModalBody>

          <ModalFooter pt={20} width={"full"} justifyContent={"space-between"}>
            <Button
              color={"#6c63ff"}
              borderWidth={"2px"}
              borderColor={"#6c63ff"}
              onClick={onClose}
              _hover={{ bg: "#6c63ff", color: "white" }}
            >
              CANCEL
            </Button>
            <Button
              bg={"#6c63ff"}
              color={"white"}
              _hover={{ bg: "" }}
              onClick={() => {
                onAdd();
                onClose();
              }}
            >
              APPLY
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default AddTask;
