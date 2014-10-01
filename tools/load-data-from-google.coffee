getDataFromGoogle = (spreadsheetID, sheetName, _then) ->
	connectionData =
		email: 'username@gmail.com'
		password: 'google_password'

	tableData = []
	gsheets = require('google-sheets')
	gsheets.auth connectionData, (err) ->
		console.log 'Could not login to Google'  if err
		return  if err
		# Spreadsheet
		gsheets.getSpreadsheet spreadsheetID, (err, spreadsheet) ->
			console.log 'spreadsheet "', spreadsheetID, '"not found'  if err
			return  if err
			# Worksheets
			spreadsheet.getWorksheet sheetName, (err, worksheet) ->
				console.log 'worksheet "', sheetName, '" not found'  if err
				return  if err
				# console.log "<#{sheetName}> last modified: ", worksheet.meta.lastModified
				worksheet.getRows (err, _rows) ->
					return next(err)  if err
					rows = _rows
					tableData = []
					rows.forEach (row) ->
						tableData.push row.data
					_then tableData


loadCollectionFromGoogle = (spreadsheetID, sheetName, idField, dataPath, layout) ->
	getDataFromGoogle spreadsheetID, sheetName, (dataIn) ->
		console.log "#{dataPath}: Data loaded from Google"
		fs = require "fs"
		dataFile = "./web/#{dataPath}/_data.json"
		dataOut = {}
		try dataOut = { 'index': JSON.parse(fs.readFileSync(dataFile))['index'] }
		dataIn.forEach (item) ->
			key = item[idField]
			if key
				if layout
					item['styles'] = ['book'];
					delimiterPos = (dataPath.match(new RegExp("/", "g")) || []).length;
					prePath = Array(delimiterPos+2).join '../';
					fs.writeFile "./web/#{dataPath}/#{key}.jade", "extends #{prePath}_shared/#{layout}", (error) ->
						console.error("Error writing file", error) if error
				dataOut[key] = item
		fs.writeFile dataFile, JSON.stringify(dataOut), (error) ->
			console.error("Error writing file", error) if error



### main() ###

# Load collection from Google Spreadsheets
# 		params: spreadsheetID, sheetName, idField, dataPath, layout (optional)
#		id: only lowercase latin letters allowed

loadCollectionFromGoogle '1-AcqvncL8XYhbZJmM700SuBhh_KhHuejjf83vKYXNEM', 'my_articles', 'id', 'articles', 'article'
# ...
