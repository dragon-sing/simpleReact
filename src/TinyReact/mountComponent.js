import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDOM, container, oldDOM) {
  let nextVirtualDom = null;
  let component = null;
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDom = buildFunctionComponent(virtualDOM);
    console.log(nextVirtualDom);
  } else {
    // 类组件
    nextVirtualDom = buildClassComponent(virtualDOM);
    component = nextVirtualDom.component;
  }

  if (isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, container, oldDOM);
  } else {
    mountNativeElement(nextVirtualDom, container, oldDOM);
  }

  if (component) {
    component.componentDidMount();
    if (component.props && component.props.ref) {
      component.props.ref(component);
    }
  }
}

function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props || {});
  const nextVirtualDom = component.render()
  nextVirtualDom.component = component;
  return nextVirtualDom;
}
