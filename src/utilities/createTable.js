const createFullyearRows = (
  values = ["row", "row", "row", "row", "row"],
  defaultRows = {
    "ene-20": 6,
    "feb-20": 8,
    "mar-20": 10,
    "abr-20": 12,
    "may-20": 4,
    "jun-20": 2,
    "jul-20": 6,
    "ago-20": 14,
    "sep-20": 16,
    "oct-20": 22,
    "nov-20": 20,
    "dic-20": 18,
  }
) => {
  let rows = [];

  values.forEach((value) => {
    rows.push({
      name: value,
      ...defaultRows,
    });
  });

  return rows;
};

const createFullyearCols = (
  name = null,
  defaultCols = [
    "ene-20",
    "feb-20",
    "mar-20",
    "abr-20",
    "may-20",
    "jun-20",
    "jul-20",
    "ago-20",
    "sep-20",
    "oct-20",
    "nov-20",
    "dic-20",
  ],
  actions = true
) => {
  let cols = [];

  if (actions) {
    cols.push({
      name: "actions",
      label: "Actions",
      field: "",
      align: "center",
    });
  }

  if (name != null) {
    cols.push({
      name,
      required: true,
      label: name,
      align: "left",
      field: (row) => row.name,
      format: (val) => `${val}`,
      sortable: true,
    });
  }

  defaultCols.forEach((col) => {
    cols.push({
      name: col,
      align: "center",
      label: col,
      field: col,
      sortable: true,
    });
  });

  return cols;
};

const createTotalTable = (
  config = {
    title: "Title",
    name: "name",
    totalTitle: "Total Title",
    rows: ["row", "row", "row", "row", "row"],
    defaultRows: null,
    defaultCols: null,
  }
) => {
  let rows =
    config.defaultRows != null
      ? createFullyearRows(config.rows, config.defaultRows)
      : createFullyearRows(config.rows);

  let cols =
    config.defaultCols != null
      ? createFullyearCols(config.name, config.defaultCols)
      : createFullyearCols(config.name);

  return {
    type: Object,
    name: config.title,
    rows: rows,
    columns: cols,
    totalSection: {
      totalTitle: config.totalTitle,
      totalEnable: true,
      StringValues: 1,
      whiteSpaces: 1,
    },
    actions: {
      enable: true,
      edit: true,
      delete: false,
    },
  };
};

const createMultiTotalTables = (tablesConfig = [{}, {}, {}]) => {
  return tablesConfig.map((table) => {
    return createTotalTable(table);
  });
};

export {
  createFullyearRows,
  createFullyearCols,
  createTotalTable,
  createMultiTotalTables,
};
