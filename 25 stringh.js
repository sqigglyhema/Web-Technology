
  var str = "Hello, World!";
  var charAtIndex = str.charAt(7);
  document.write("<p>Character at index 7: " + charAtIndex + "</p>");

  var unicodeAtIndex = str.charCodeAt(7);
  document.write("<p>Unicode at index 7: " + unicodeAtIndex + "</p>");

  var str1 = "Hello, ";
  var str2 = "World!";
  var joinedString = str1.concat(str2);
  document.write("<p>Joined string: " + joinedString + "</p>");

  var unicodeValue = 65;
  var stringFromUnicode = String.fromCharCode(unicodeValue);
  document.write("<p>String from Unicode value 65: " + stringFromUnicode + "</p>");

  var lowercaseStr = "hello, world!";
  var uppercaseStr = lowercaseStr.toUpperCase();
  document.write("<p>Uppercase string: " + uppercaseStr + "</p>");
