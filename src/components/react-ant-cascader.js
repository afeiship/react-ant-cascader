import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Cascader } from 'antd';


export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: []
  };
  /*===properties end===*/

  render(){
    const { className, items, ...props } = this.props;
    return (
      <Cascader options={items} {...props} className={classNames('react-ant-cascader',className)} />
    );
  }
}
