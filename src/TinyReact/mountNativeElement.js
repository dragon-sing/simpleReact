import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";
export default function mountNativeElement(virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM);

  if (oldDOM) {
    container.insertBefore(newElement, oldDOM)
  } else {
    container.appendChild(newElement);
  }

  // 判断旧的DOM对象是否存在, 如果存在, 删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }


  let component = virtualDOM.component;
  console.log("component", component);
  if (component) {
    component.setDOM(newElement);
  }
}
