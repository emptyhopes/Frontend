import { FunctionComponent } from "react";

import { UsersAPI } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";

import { Wrapper } from "@/Application/Containers/UI/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Container/Container";

const Users: FunctionComponent = () => {
  const { isLoading, isError, data: users } = UsersAPI.useGetUsersQuery(10);
  return (
    <>
      <Wrapper>
        <Container>
          <>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {isError && <h1>Произошла ошибка.</h1>}
            {users &&
              users.map((user) => (
                <div key={user.id}>
                  {user.id}. {user.username}
                </div>
              ))}
          </>
        </Container>
      </Wrapper>
    </>
  );
};

export { Users };
