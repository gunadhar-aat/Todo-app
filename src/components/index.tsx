import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "./Container";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import TodoSelect from "./TodoSelect";
import { AddTask } from "./AddTask";

export const Main = () => {
  const [addTask, setAddTask] = useState<
    { text: string; completed: boolean }[]
  >([]);

  const [task, setTask] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setAddTask([...addTask, { text: task, completed: false }]);
      setTask("");
    }
  };
  console.log(addTask);
  return (
    <Container p={"0px 10px"}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
        justifyContent={"space-between"}
        width={"full"}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <TodoInput
            task={task}
            setTask={setTask as any}
            onAdd={handleAddTask}
          />
        </GridItem>

        <GridItem colSpan={{ base: 1 }}>
          <TodoSelect setFilter={setFilter} />
        </GridItem>
      </Grid>

      <TodoList addTask={addTask} setAddTask={setAddTask} filter={filter} />
      <AddTask />
    </Container>
  );
};
