export interface Props {
  /**
   * 是否启用禁止状态
   * @default false
   */
  disabled?: boolean;

  /**
   * 前缀
   * @default -
   */
  prefix?: string;

  /**
   * 后缀
   * @default -
   */
  suffix?: string;

  /**
   * 默认值
   * @default -
   */
  defaultValue?: string;

  /**
   * 	输入框内容变化时的回调
   * @default -
   */
  onChange?: () => void;

  /**
   * 提示信息
   * @default -
   */
  placeholder?: string;
}

// 组件不能使用原始事件
