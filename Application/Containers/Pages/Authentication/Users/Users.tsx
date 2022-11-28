import { UsersMiddleware } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

const Users: React.FunctionComponent = () => {
  const { isLoading, isError, data: users } = UsersMiddleware.useGetUsersQuery(10);
  return (
    <>
      <Wrapper>
        <Container>
          <>
            <Breadcrumbs />
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
