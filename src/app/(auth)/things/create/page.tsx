'use client';

import { CreateThingDto } from '@dtos/create-thing.dto';
import ThingsForm from '@features/things/components/ThingsForm';
import { Create, useForm } from '@refinedev/antd';

function CreateThingPage() {
  const { formProps, saveButtonProps } = useForm<CreateThingDto>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <ThingsForm {...formProps} />
    </Create>
  );
}

export default CreateThingPage;
