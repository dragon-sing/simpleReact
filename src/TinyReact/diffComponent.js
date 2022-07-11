import mountElement from "./mountElement";
import updateComponet from "./updateComponent";
export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    // 是一个组件
    updateComponet(virtualDOM, oldComponent, oldDOM, container);
  } else {
    // 不是同一个组件
    mountElement(virtualDOM, container, oldDOM)
  }
}

// 判断是否是一个组件
function isSameComponent(virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type === oldComponent.constructor
}
