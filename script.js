const { Grid, Table, TableHeaderRow } = DevExpress.DXReactGridBootstrap3;
const {
  Getter,
  Template,
  TemplatePlaceholder,
  Plugin } =
DevExpress.DXReactCore;
const { SortingState, IntegratedSorting } = DevExpress.DXReactGrid;

class TestPlugin extends React.PureComponent {
  render() {
    return /*#__PURE__*/(
      React.createElement(Plugin, null, /*#__PURE__*/
      React.createElement(Getter, {
        name: "rows",
        computed: (getters) =>
        getters.rows.concat([{ name: "Test Album", artist: "Computer", year: 0 }]) })));



  }}


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
      { name: "name", title: "Name" },
      { name: "artist", title: "Artist" },
      { name: "year", title: "Year" }],

      rows: [
      {
        name: "Their Satanic Majesties Request",
        artist: "The Rolling Stones",
        year: 1967 },

      { name: "Prime Cuts", artist: "David Bowie", year: 1983 },
      { name: "Human", artist: "Rag'n'Bone Man", year: 2017 }] };


  }

  render() {
    const { rows, columns } = this.state;

    return /*#__PURE__*/(
      React.createElement(Grid, { rows: rows, columns: columns }, /*#__PURE__*/
      React.createElement(SortingState, null), /*#__PURE__*/





      React.createElement(IntegratedSorting, null), /*#__PURE__*/
      React.createElement(TestPlugin, null), /*#__PURE__*/

      React.createElement(Table, null), /*#__PURE__*/
      React.createElement(TableHeaderRow, { showSortingControls: true })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));