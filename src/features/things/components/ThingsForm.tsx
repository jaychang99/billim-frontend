import { useSelect } from '@refinedev/antd';
import { Form, FormProps, Input, Select } from 'antd';

interface Props extends FormProps {}

const ThingsForm = (props: Props) => {
  const { selectProps } = useSelect({
    resource: 'categories',
    optionLabel: 'name',
    optionValue: 'id',
  });

  return (
    <Form {...props}>
      <Form.Item label="물건 명" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="물건 설명" name="description">
        <Input />
      </Form.Item>
      <Form.Item
        label="카테고리"
        name="categoryId"
        rules={[{ required: true }]}
      >
        <Select {...selectProps} />
      </Form.Item>
    </Form>
  );
};

export default ThingsForm;
