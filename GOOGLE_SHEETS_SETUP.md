# 將歷史成績連結至 Google Sheets

你不需要把 Google 帳號、密碼或 API 金鑰交給任何人。以下設定全部在你的 Google 帳號內完成。

1. 新建一個 Google 試算表，第一個工作表可命名為「IPA Scores」。
2. 點選「擴充功能」→「Apps Script」，將預設程式碼全部換成下列內容，然後儲存。

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['時間', '暱稱', '分數', '模式', '題型']);
  }
  sheet.appendRow([
    new Date(data.at),
    data.name,
    data.score,
    data.modeLabel,
    data.directionLabel
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. 右上角點「部署」→「新增部署作業」→類型選「網頁應用程式」。
4. 「執行身分」選「我」；「誰可以存取」選「所有人」。這只讓網頁能新增分數，並不會分享你的試算表內容。
5. 第一次部署時 Google 會要求授權 Apps Script 存取**你這份試算表**；依畫面完成授權。
6. 複製部署後以 `/exec` 結尾的網址，打開網頁右上角的齒輪，貼到「Google Apps Script 網頁應用程式網址」並儲存。

若日後不想同步，只要清空該欄位即可；本機紀錄不會被刪除。請不要分享試算表的編輯連結或 Google 帳號密碼。

## 用 GitHub Pages 上線

1. 在 GitHub 建立一個公開 repository，然後上傳 `index.html`、`styles.css` 與 `app.js`。
2. 到 repository 的 **Settings → Pages**，選擇從 `main` 分支部署，資料夾選 `/ (root)`。
3. GitHub 會提供一個 `https://你的帳號.github.io/專案名稱/` 網址。開啟後即可分享給同學使用。

每位使用者可自行填寫暱稱。若有設定 Google Sheet，該暱稱與每局成績會一起寫入同一份紀錄。
