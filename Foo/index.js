import React from 'react';
import styles from "./index.module.less";
var Foo = function Foo(props) {
  return /*#__PURE__*/React.createElement("h4", {
    className: styles.text
  }, props.title);
};
export default Foo;