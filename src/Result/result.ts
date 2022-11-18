import { ReactNode } from 'react';

export interface Props {
  /**
   * @description 操作区
   * @default -
   */
  extra: Array<ReactNode>;

  /**
   * 结果的状态
   * @default -
   */
  children: any;

  /**
   * title 文字
   * @default -
   */
  title: string;

  /**
   * subTitle 文字
   * @default -
   */
  subTitle: string;
}
