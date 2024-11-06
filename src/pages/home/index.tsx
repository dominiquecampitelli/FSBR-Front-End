import { Button, Form, Input, Row } from "antd";

import { Container } from "../../components/container";

import { Navbar, Logo, Card, HeadLine } from "./styles";

export function Home() {
  return (
    <Container>
      <Navbar>
        <Logo>FSBR</Logo>
        <Button type="link">Sair</Button>
      </Navbar>
      <Card>
        <HeadLine>Dados do seu perfil</HeadLine>
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
            <Row style={{ justifyContent: "space-between" }}>
              <Button danger htmlType="submit">
                Deletar conta
              </Button>
              <Button type="primary" htmlType="submit">
                Atualizar dados
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
