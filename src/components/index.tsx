import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "./Container";
import { TodoList } from "./TodoList";
import TodoSelect from "./TodoSelect";
import { AddTask } from "./AddTask";
import SearchTask from "./SearchTask";

export const Main = () => {
  const [addTask, setAddTask] = useState<
    { text: string; completed: boolean }[]
  >([]);

  const [task, setTask] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setAddTask([...addTask, { text: task, completed: false }]);
      setTask("");
    }
  };
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredTasks = addTask.filter((t) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && t.completed) ||
      (filter === "incomplete" && !t.completed);

    const matchesSearch = t.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <Container p={"0px 10px"}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
        justifyContent={"space-between"}
        width={"full"}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <SearchTask task={searchQuery} onSearch={handleSearch} />
        </GridItem>

        <GridItem colSpan={{ base: 1 }}>
          <TodoSelect setFilter={setFilter} />
        </GridItem>
      </Grid>

      <TodoList
        filteredTasks={filteredTasks}
        setAddTask={setAddTask}
        filter={filter}
      />
      <AddTask task={task} setTask={setTask as any} onAdd={handleAddTask} />
    </Container>
  );
};
