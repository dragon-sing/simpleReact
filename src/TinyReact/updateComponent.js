import diff from './diff'

export default function updateComponet(virtualDOM, oldComponent, oldDOM, container) {

  oldComponent.componentWillReceiveProps(virtualDOM.props);
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    // 未更新前的props
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDOM.props);
    // 组件更新
    oldComponent.updateProps(virtualDOM.props);
    //  获取组件返回的最新的virtualDom
    let nextVirtualDom = oldComponent.render();
    nextVirtualDom.component = oldComponent;
    diff(nextVirtualDom, container, oldDOM);
    oldComponent.componentDidUpdate(prevProps);
  }
   
}
