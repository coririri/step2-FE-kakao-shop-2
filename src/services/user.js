import instance from './index'

export const register = (data) => {
  const { email, password, username } = data
  return instance.post("/join", {
    email,
    password,
    username,
  })
}

export const login = (data) => {
  const { email, password } = data
  return instance.post("/login",{
    email,
    password,
  })
}

export const emailCheck = (email) => {
  return instance.post("/check",{
    email,
  })
}

