// Name des Tabellenblatts (genau so wie im Sheet unten rechts)
const SHEET_NAME = 'Tabelle1';

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getEntries() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Blatt "' + SHEET_NAME + '" nicht gefunden!');
  return sheet.getDataRange().getValues();
}

function addEntry(name, date, from, to, comment) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Blatt "' + SHEET_NAME + '" nicht gefunden!');
  sheet.appendRow([name, date, from, to, comment]);
}
