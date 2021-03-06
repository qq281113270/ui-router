import Request, { gql, GraphqlClient } from './request';

var userId = '559645cd1a38532d14349246';

// 注册
const register = (data) => {
    return Request.post('/user/register', data);
};

// 登录
const login = (data) => {
    return Request.post('/user/login', data);
};

// 查询
const query = (data) => {
    return GraphqlClient.query({
        query: gql`{
            user(id: "${userId}") {
              name
              friends {
                name
              }
            }
          }`,
    });
};

//变异
const createUser = (data) => {
    return GraphqlClient.mutate({
        mutation: `
      mutation M($name: String!) {
        createUser(name: $name) {
          name
          friends {
            name
          }
        }
      }
      `,
        variables: data,
    });
};


const getUser =()=>{
    return GraphqlClient.query({
        query: gql`
        {
            hello
            
          }
        `,
    });
}

// 查询
const getUserInfo = (data) => {
    return GraphqlClient.query({
        query: gql`
            {
                getUserInfo {
                    code
                    mgs
                    data {
                        name
                        phone
                    }
                }
            }
        `,
    });
};

const hello = (data) => {
    return GraphqlClient.query({
        query: gql`
            {
                hello()
                {

                }
            }
        `,
    });
};

export { createUser, register, login, getUserInfo, hello,getUser };
