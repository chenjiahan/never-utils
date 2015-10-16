/**
 * 解析html,返回element
 * 若是多个DOM,则返回数组
 */
export default function parseHTML(str) {
    let el = document.createElement('div');
    el.innerHTML = str;
    if(el.children.length === 1) {
        return el.firstChild;
    }
    return el.children;
}