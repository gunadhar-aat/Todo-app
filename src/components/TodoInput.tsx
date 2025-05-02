import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Container } from "./Container";

export const TodoInput = ({
  task,
  setTask,
}: {
  task: string;
  setTask: (value: string) => {};
  onAdd: () => void;
}) => (
  <Container p={"0px 5px"}>
    <InputGroup>
      <Input
        autoFocus
        borderColor={"#6c63ff"}
        focusBorderColor="#6c63ff"
        placeholder="Add Note..."
        onChange={(e) => setTask(e.target.value)}
      />
    </InputGroup>
  </Container>
);
