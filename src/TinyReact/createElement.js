export default function createElement(type, props, ...children) {

  // 解决text文本情况
  const childElements = [].concat(...children).reduce((result, child) => {
    if (![false, true, null].includes(child)) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement("text", { textContent: child }));
      }
    }
    return result
  }, [])

  return {
    type,
    props: Object.assign({children: childElements}, props),
    children: childElements,
  };
}
