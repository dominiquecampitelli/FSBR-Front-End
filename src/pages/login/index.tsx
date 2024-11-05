import { Card, Button, Form, Input } from "antd";

import { Container } from "../../components/container";

export function Login() {
  return (
    <Container>
      <Card style={{ width: "450px" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Informe seu e-mail" }]}
          >
            <Input placeholder="E-mail" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Informe sua senha" }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" block htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
