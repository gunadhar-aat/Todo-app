import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const SearchTask = ({
  task,
  onSearch,
}: {
  task: string;
  onSearch: (query: string) => void;
}) => (
  <Container p={"0px 10px"}>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="#6c63ff" />
      </InputLeftElement>
      <Input
        value={task}
        borderColor={"#6c63ff"}
        focusBorderColor="#6c63ff"
        placeholder="Search Note..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  </Container>
);

export default SearchTask;
