Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist (20)
currentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml") )
print currentScore &"|"& desiredScore  &"|"& currentScore > desiredScore
If currentScore >= desiredScore Then
	Reporter.ReportEvent micPass, "checkScore", "Score exceeded the desired value of " & desiredScore
Else 
	Reporter.ReportEvent micFail, "checkScore", "Score is too low. Found " & currentScore & " and need " & desiredScore
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click

