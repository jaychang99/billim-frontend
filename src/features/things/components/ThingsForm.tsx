import { Form, FormProps, Input } from 'antd';

interface Props extends FormProps {}

const ThingsForm = (props: Props) => {
  return (
    <Form {...props}>
      <Form.Item label="물건 명" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="물건 설명" name="description">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default ThingsForm;
