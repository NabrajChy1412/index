<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>convert minutes to seconds in javascript</title>
</head>
<body>
  <script type = "text/javascript">
    function convertMinutestoSeconds(minutes) 
    {
      return Math.floor(minutes * 60);
    }
    var minutesToSeconds = convertMinutestoSeconds(2); // convert minutes to second javascript 
    document.write( "Result of converting minutes to seconds :- " + minutesToSeconds ); 
 
  </script>  
</body>
</html>