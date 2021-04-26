import React, { useState } from 'react'
import { Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
// import axios_init from "../../utils/axios_init";
import { isLoadingOverlay, setAuthTokens } from '@/redux/actions'
import './login.less'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { requests } from '@/redux/requests'
import logo from '@/assets/images/logo_white.svg'
function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [notfound, setNotFound] = useState(false)

  // const [login, loginInfo] = useMutation(requests.auth.login, {
  //   onSuccess: (res) => {
  //     dispatch(isLoadingOverlay(false))
  //     dispatch(setAuthTokens(res))
  //     localStorage.setItem('token', res.access_token)
  //     history.push('/')
  //     document.location.reload()
  //   },
  //   onError: () => {
  //     console.log('error')
  //     setNotFound(true)
  //     dispatch(isLoadingOverlay(false))
  //   },
  // })

  // console.log('loginInfo => ', loginInfo)

  // static Login func
  const login = (res) => {
    dispatch(isLoadingOverlay(false))
    dispatch(setAuthTokens(staticData))
    localStorage.setItem('token', staticData.access_token)
    history.push('/')
    document.location.reload()
  }

  const onFinish = (values) => {
    dispatch(isLoadingOverlay(true))
    login(values)
  }
  return (
      <div className='login'>
        <div className='logo_content'>
          <img
              className='logo_image'
              alt={'Logo'}
              src={logo}
          />
        </div>
        <div className='login_content'>
          <h1>Войти в систему</h1>
          { notfound ? (<Alert style={{ marginBottom: '20px' }} message="Логин или пароль неверный !" type="error" />) : undefined }
          <Form
              name='normal_login'
              className='login-form'
              initialValues={{ remember: true }}
              onFinish={onFinish}
          >
            <Form.Item
                name='login'
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                  size="large"
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Введите логин'
              />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password
                  size="large"
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  // type='password'
                  placeholder='Введите пароль'
              />
            </Form.Item>

            <Form.Item>
              <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  size='large'
              >
                Войти в систему
              </Button>
              {/*Or <a href="">register now!</a>*/}
            </Form.Item>
          </Form>
          <p>All Rights Reserved. &copy; Udevs 2021</p>
        </div>
      </div>
  )
}
export default Login

const staticData = {
  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTc2MDMxOTcsImlhdCI6MTYxNjk5ODM5NywiaXNzIjoibXVubyIsInNlc3Npb25faWQiOiI5NGJlODg5Yy0yNWRmLTQxY2MtOTkyMy04ZjYwMGJjYzA2NmQiLCJzdGF0dXMiOiJBIiwic3ViIjoiYmZmOWQ0NGEtN2RkNC00Y2M5LThjOWMtMTM5NmVhYmY3NzVmIiwidXNlcl90eXBlIjoiYWRtaW4ifQ.WwoWusGGFGRimkNqyPIxIafgpivBEps1yk1EXD_i9zY"
}
