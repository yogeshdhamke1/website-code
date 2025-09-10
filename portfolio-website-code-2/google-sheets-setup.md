# Google Sheets Integration Setup

Store contact form submissions directly in Google Sheets for easy tracking and management.

## 1. Create Google Sheet
1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form Responses"
4. Add headers in row 1:
   - A1: Name
   - B1: Email  
   - C1: Message
   - D1: Timestamp

## 2. Create Google Apps Script
1. In your Google Sheet, go to Extensions > Apps Script
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.name,
      data.email,
      data.message,
      data.timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S)
4. Name it "Portfolio Contact Form Handler"

## 3. Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy the Web app URL (e.g., https://script.google.com/macros/s/ABC123.../exec)

## 4. Update JavaScript
In `script.js`, replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your actual Web app URL.

## 5. Test Integration
1. Fill out your contact form
2. Submit the form
3. Check your Google Sheet - new row should appear with the data

## Benefits:
- ✅ Automatic data backup
- ✅ Easy to export/analyze
- ✅ No database setup required
- ✅ Real-time updates
- ✅ Free to use

## Data Stored:
- Contact name
- Email address
- Message content
- Submission timestamp

Now you'll have both email notifications AND a permanent record in Google Sheets!