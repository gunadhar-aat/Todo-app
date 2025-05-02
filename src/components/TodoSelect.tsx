import React from "react";
import { Select, Stack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const TodoSelect = ({
  setFilter,
}: {
  setFilter: (filter: "all" | "completed" | "incomplete") => void;
}) => {
  return (
    <Stack direction={"row"} w={"full"}>
      <Select
        bg="#6c63ff"
        color="white"
        borderColor="#6c63ff"
        _focus={{ borderColor: "#7367f0" }}
        _hover={{ bg: "#7367f0" }}
        width={"full"}
        onChange={(e) =>
          setFilter(
            e.target.value.toLowerCase() as "all" | "completed" | "incomplete"
          )
        }
      >
        <option
          style={{ backgroundColor: "white", color: "#6c63ff" }}
          value="All"
        >
          All
        </option>
        <option
          style={{ backgroundColor: "white", color: "#6c63ff" }}
          value="Completed"
        >
          Complete
        </option>
        <option
          style={{ backgroundColor: "white", color: "#6c63ff" }}
          value="Incomplete"
        >
          Incomplete
        </option>
      </Select>
      <DarkModeSwitch />
    </Stack>
  );
};

export default TodoSelect;
