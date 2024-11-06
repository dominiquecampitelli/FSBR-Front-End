import { Button, Form, Input } from "antd";

import { Container } from "../../components/container";
import { Card } from "../../components/card";

import { HeadLine, Logo } from "./styles";

export function Register() {
  return (
    <Container>
      <Card>
        <HeadLine>
          <Logo>FSBR</Logo>
          <Button type="link">Já tenho conta!</Button>
        </HeadLine>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Informe seu nome" }]}
          >
            <Input placeholder="Nome" />
          </Form.Item>

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
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
