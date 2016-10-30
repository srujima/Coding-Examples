function SortedStringMatrix(inputString) {
  var sortedStringArray = inputString.trim().split(/ +/g).sort();
  var arrayLength = sortedStringArray.length;
  var columnLength = 3;
  var rowLength = Math.ceil(arrayLength / columnLength);
  var i = 0;
  var resultRow = '';
  var outputString = '';
  var outputElement = document.getElementById('outputString');
  
  outputElement.innerHTML = '';

  while (i < rowLength) {
    resultRow = sortedStringArray[i] + '\t';

    if (arrayLength % columnLength === 1) {
      resultRow += (i !== rowLength-1 ? sortedStringArray[i+rowLength] : '') + '\t';
      resultRow += (sortedStringArray[rowLength < 3 ? i+1+rowLength : (rowLength > 3 ? i+(2*rowLength)-1 : i+2+rowLength)] || '');
    }
    else {  	
      resultRow += (sortedStringArray[i+rowLength] || '') + '\t';
      resultRow += (sortedStringArray[i+(2*rowLength)] || '');
    }

    outputString += resultRow + '<br />';    
    i++;
  }
  
  outputElement.innerHTML = outputString;
}
