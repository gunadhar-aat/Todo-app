import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Container } from "./Container";

export const TodoInput = ({
  task,
  setTask,
  onAdd,
}: {
  task: string;
  setTask: (value: string) => {};
  onAdd: () => void;
}) => (
  <Container p={"0px 10px"}>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="#6c63ff" />
      </InputLeftElement>
      <Input
        borderColor={"#6c63ff"}
        focusBorderColor="#6c63ff"
        placeholder="Search Note..."
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd();
        }}
      />
    </InputGroup>
  </Container>
);
