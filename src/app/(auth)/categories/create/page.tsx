'use client';
import { CreateCategoryDto } from '@dtos/create-category.dto copy';
import CategoriesForm from '@features/categories/components/CategoriesForm';
import { Create, useForm } from '@refinedev/antd';

function CreateCategoryPage() {
  const { formProps, saveButtonProps } = useForm<CreateCategoryDto>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <CategoriesForm {...formProps} />
    </Create>
  );
}

export default CreateCategoryPage;
