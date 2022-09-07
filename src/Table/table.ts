export interface Props {
  /**
   * @description 状态类型
   * @default []
   */
  titleParams?: any;

  /**
   * 文本内容
   * @default []
   */
  tableData?: any;


  /**
   *
   *表格对齐方式
   * @type {string}
   * @default left
   */
  align?: string


  /**
   *
   * 展开行
   * @type {Function}
   * @default 接受自定义参数，回调函数传入展开行内容
   */
  expandedRowRender?: any

  /**
    * 支持筛选
    * @type {boolean}
    * @default false
    */
  filter?: any


  /**
   *
   *	单选
   * @type boolean
   * @default false
   */
  radio?: any

  /**
*
*单选回调
* @type Function
* @default --
*/
  radioSelectCallback?: any

  /**
   *
   *多选
   * @type boolean
   * @default false
   */
  checked?: any

  /**
*
*多选回调
* @type Function
* @default --
*/
  checkedSelectCallback?: any

  /**
*
*支持排序
* @type boolean
* @default false
*/
  avableSort?: false

  /**
* 虚拟列表，大数据量的解决方案之一，无法与lazyLoad、pagination并用
* @type {boolean}
* @default false
*/
  virtualized?: false

  /**
   *
   *懒加载、虚拟列表默认展示数据条数
   * @type {number}
   * @default 10
   */
  largeDateShowNum?: any

  /**
   *
   * 懒加载，大数据量的解决方案之一，无法与virtualized、pagination并用
   * @type {boolean}
   * @default false
   */
  lazyLoad?: boolean


  /**
   *
   * 分页，大数据量的解决方案之一，无法与virtualized、lazyLoad并用
   * @type {boolean}
   * @default false
   */
  pagination?: boolean
  /**
   *
   * 分页器对齐方式
   * @type string
   * @default left
   */
  paginationAlign?: string


  /**
   *
   * 分页器改变页码回调函数
   * @type {Function}
   * @default --
   */
  changePNumCallback?: any

  /**
   *
   * 	分页器改变页码回调函数
   * @type {Function}
   * @default --
   */
  changePSizeCallback?: any


  /**
   *
   * 配置拖拽
   * @type {boolean}
   * @default false
   */
  dropabled?: boolean


  /**
   *
   * 拖拽成功回调
   * @type {Function}
   * @default --
   */
  dropCallback?: any
}