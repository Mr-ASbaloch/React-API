import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
const AppData = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    console.log("Finish:", values)
   close
  };
  

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

 const formHandle = (e) =>{
    e.preventDefault();
 
 axios.post ("https://jsonplaceholder.typicode.com/posts" ,{title , body}).then ((response)=>{
        console.log(response);   
    
})
 }
       
    
  return (
    <Form style={{width :'220px' , height :"220px " , margin:"120px auto" }}
      form={form}
      name="horizontal_login"
      layout="inline"

      onChange={formHandle}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={title} onChange={(e)=>{
setTitle (e.target.value)

          }}
        />
      </Form.Item>
      <Form.Item
        name="body"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="body"
          placeholder="body"
          value={body} onChange={(e)=>{
          setBody(e.target.value)
          
                      }}
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default AppData;
