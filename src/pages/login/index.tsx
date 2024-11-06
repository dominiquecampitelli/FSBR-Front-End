import { Button, Form, Input } from "antd";

import { Container } from "../../components/container";
import { Card } from "../../components/card";

import { HeadLine, Logo } from "./styles";

export function Login() {
  return (
    <Container>
      <Card>
        <HeadLine>
          <Logo>FSBR</Logo>
          <Button type="link">Criar conta</Button>
        </HeadLine>
        <Form
          name="basic"
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

          <Form.Item style={{ margin: 0 }}>
            <Button type="primary" block htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
