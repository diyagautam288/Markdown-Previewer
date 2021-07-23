function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const placeholder = `
**Welcome in bold**
# h1
## h2
[freecodecamp](https://www.freecodecamp.org)
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
let a=1;
let b=3;
let c=a*b;
\`\`\`
- list item1
- list item2
- list item3
> Block Quotes!
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
class App extends React.Component
{constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      markdown: placeholder });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        markdown: e.target.value });

    });}
  render()
  {
    return /*#__PURE__*/(
      React.createElement("div", { className: "row d-flex justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-8 " }, /*#__PURE__*/
      React.createElement("h2", null, "EDITOR"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", className: "form-control", value: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { id: "preview", className: "col-8" }, /*#__PURE__*/
      React.createElement("h2", null, "RESULT"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: {
          __html: marked(this.state.markdown) } }))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));