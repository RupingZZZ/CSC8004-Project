import React,{Component} from "react";
import {message} from "antd";
import {reLogin} from"../../api"
import './login.less'
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import {Redirect} from 'react-router-dom'
import memoryUtils from  '../../utils/memoryUtils';
import storageUtils from  '../../utils/storageUtils';

 class Login extends Component{
handleSubmit = e => {
        e.preventDefault();
        //check all form
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                // submit form
                const {username,password} = values
                const response= await reLogin(username,password)
                const result=response.data
                if(result.status==0){
                   message.success("success")
                    const user = result.data
                    //save user
                    memoryUtils.user = user
                    //save user in local storage
                    storageUtils.saveUser(user)
                   this.props.history.replace('/')
                }
                else{
                    message.error(result.msg);
                }
            }else
                console.log('error')
        });
    };

    render() {
        const  user=memoryUtils.user
        if(user._id){
            return <Redirect to ='/'></Redirect>
        }
        const { getFieldDecorator } = this.props.form;
        return (
          <div className={"body"}>
              <div className={"body-header"}></div>
              <div className={"login"}>
                  <div className={"login-header"}><h3>User Login</h3></div>
                  <div className={"login-content"}>
                      <Form onSubmit={this.handleSubmit} className="login-form" >
                          <Form.Item>
                              {getFieldDecorator('username', {
                                  rules: [
                                      { required: true, message: 'Please input your username!' },
                                      { pattern: /^[A-Za-z0-9]+$/, message: 'Can only contain numbers and letters!' },
                                      { min: 4, message: 'Need to pass 4 digits' },
                                      { max: 14, message: 'Enter up to 14 digits!' }

                                  ],
                              })(
                                  <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="Username"
                                  />
                              )}
                          </Form.Item>
                          <Form.Item>
                              {getFieldDecorator('password', {
                                  rules: [
                                      { required: true, message: 'Please input your Password!' },
                                      { pattern: /^[A-Za-z0-9]+$/, message: 'Can only contain numbers and letters!' },
                                      { min: 4, message: 'Need to pass 4 digits' },
                                      { max: 14, message: 'Enter up to 14 digits!' }
                                      ],
                              })(
                                  <Input
                                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      type="password"
                                      placeholder="Password"
                                  />
                              )}
                          </Form.Item>
                          <Form.Item>

                              <Button type="primary" htmlType="submit" className="login-form-button">
                                  Log in
                              </Button>

                          </Form.Item>
                      </Form>
                  </div>
                  <div className={"login-footer"}></div>
              </div>

          </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login)
export default WrappedNormalLoginForm;