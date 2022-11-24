import { UsersAPI } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";

import { Wrapper } from "@/Application/Containers/Application/Components/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/Application/Components/Container/Container";

const Users = () => {
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
