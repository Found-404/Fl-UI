export interface Props {
  /**
   * @description 是否可在input中输入
   * @default false
   */
  disabled?: boolean;

  /**
   * 设置计数器允许的最小值
   * @default -
   */
  min: number;

  /**
   * 	设置计数器允许的最大值
   * @default -
   */
  max: number;

  /**
   * 	计数器步长
   * @default 1
   */
  step: number;

  /**
   * 	数值精度
   * @default 0
   */
  precision: number;

  /**
   * 	初始值
   * @default -
   */
  defaultValue: number;

  /**
   * 	大小
   * @default -
   */
  size: string;

  /**
   * 	变化回调
   * @default -
   */
  onChange?: () => void;
}
// 组件中不能使用原始事件
