import { Form, FormProps, Input } from 'antd';

interface Props extends FormProps {}

const CategoriesForm = (props: Props) => {
  return (
    <Form {...props}>
      <Form.Item label="카테고리 명" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="카테고리 설명" name="description">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default CategoriesForm;
