import { List } from "@chakra-ui/react";
import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ 
  fontSize,
  todoList, 
  toggleTodoListItemStatus, 
  deleteTodoListItem, 
  title, 
  as 
}) => {
  return (
    <>
    {todoList.length !== 0 && (
      <>
        <TodoTitle title={title} as={as} mt="12" />
        <List w="full">
          {todoList.map((todo) => (
            <TodoItem todo={todo} key={todo.id} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
          ))}
        </List>
      </>
    )}
    </>
  );
}