Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("$269.99").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("HowMany", dtGlobalSheet)
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("ShoppingCart").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("REMOVE").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("Your shopping cart is").Click
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("Your shopping cart is").Check CheckPoint("Your shopping cart is empty_2")
Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("Link").Click

