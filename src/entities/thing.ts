import { Category } from '@entities/category';

export interface Thing {
  /**
   * 물건 이름
   */
  name: string;

  /**
   * 물건 설명
   */
  description: string;

  /**
   * 물건 카테고리
   */
  category: Category;
}
