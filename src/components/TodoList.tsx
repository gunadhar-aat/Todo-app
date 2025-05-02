import { Fragment, useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import NoResultFound from "./NoResultFound";

export const TodoList = ({
  addTask,
  setAddTask,
  filter,
}: {
  addTask: { text: string; completed: boolean }[];
  setAddTask: React.Dispatch<
    React.SetStateAction<{ text: string; completed: boolean }[]>
  >;
  filter: "all" | "completed" | "incomplete";
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (index: number) => {
    setAddTask(addTask.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditText(addTask[index].text);
  };

  const saveEdit = (index: number) => {
    if (editText.trim() === "") return;
    const updatedTasks = [...addTask];
    updatedTasks[index].text = editText;
    setAddTask(updatedTasks);
    setEditingIndex(null);
  };

  const toggleComplete = (index: number) => {
    const updatedTasks = [...addTask];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setAddTask(updatedTasks);
  };

  const filteredTasks = addTask.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <Fragment>
      {addTask.length === 0 && <NoResultFound />}
      <CheckboxGroup>
        {filteredTasks.map((task, index) => (
          <Stack
            alignItems={"center"}
            borderBottomWidth={1}
            borderBottomColor={"#6c63ff"}
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            pb={5}
            pt={10}
            role="group"
            spacing={4}
            width={"full"}
            key={index}
          >
            <Flex alignItems="center" gap={4} flex={1}>
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              {editingIndex === index ? (
                <Input
                  borderColor={"#6c63ff"}
                  focusBorderColor="#6c63ff"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => saveEdit(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(index);
                  }}
                  autoFocus
                  border={"none"}
                />
              ) : (
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
              )}
            </Flex>

            <Flex
              gap={4}
              opacity={0}
              transition="0.2s ease-in-out"
              _groupHover={{ opacity: 1 }}
            >
              {editingIndex === index ? (
                <IconButton
                  size="sm"
                  icon={<CheckIcon />}
                  aria-label="Save"
                  onClick={() => saveEdit(index)}
                />
              ) : (
                <EditIcon cursor="pointer" onClick={() => handleEdit(index)} />
              )}
              <DeleteIcon
                cursor="pointer"
                onClick={() => handleDelete(index)}
              />
            </Flex>
          </Stack>
        ))}
      </CheckboxGroup>
    </Fragment>
  );
};
