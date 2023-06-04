SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "https://advantageonlineshopping.com"
For sendFeedback = 1 To 4 Step 1
		
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("helpLink").Click
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs"). _
		Select "#" & sendFeedback
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs"). _
		Select "#" & sendFeedback
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "2@2.com"
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "UFT is Create"
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Check CheckPoint("CONTINUE SHOPPING")
	Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("CONTINUE SHOPPING").Click
	
next
SystemUtil.CloseProcessByName "iexplore.exe"

