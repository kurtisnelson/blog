---
title: "Exploiting the QBOT Rewards System"
datePublished: Thu Sep 12 2013 13:44:00 GMT+0000 (Coordinated Universal Time)
cuid: cljhlegcp01sf0vnv18ijg9xg
slug: exploiting-the-qbot-rewards-system-f18976853dd8

---

*I emailed multiple managers at Georgia Tech Dining about a month ago about this vulnerability to give them time to fix it. As of 9/12, they still have not fixed it so I am disclosing the vulnerability publically*

For this school year, Georgia Tech Dining (GTDining) premiered a new rewards system for most of their locations. The system they chose to use is [QBOT](http://qbot.com), essentially the electronic equivalent of the classic rewards punch card.

QBOT chose to implement this system using a QR code that the cashier holds up for the customer to scan with a mobile app. The QR code is a semi-permanent printed one that as far as I have observed, does not get replaced. These codes decode with a standard QR scanner to text strings of the form `chicago-ilXKFBchcZ000546`, with all of the codes I have seen starting with a `chicago` prefix. Since this never changes, I have gathered the strings for many of the locations by simply taking a picture of the code instead of using the QBOT app to scan it. These strings can then be fed into any QR code builder and scanned at home with the QBOT app at will.

The app does have a small safeguard built in of only one scan every 4 hours and scans must be done during operating hours, but this still gives the attacker the ability to get 3 reward points a day for every single compromised location. Simply with a spare email address, the attacker can create an anonymous QBOT account and load the rewards points onto it in addition to a primary account, allowing them to unlock the maximum reward at every location once a day.

I have outlined a worse-case scenario where the attacker indiscriminately scans the codes as much as possible. This vector results in the quickest rewards, but would be detectable by QBOT if they cared to. The surreptitious vector would be to strategically chose the locations that you already legitimately frequent, and make sure you get a scan every operating day. This will result in roughly one maximum reward every week and a half, or a loss to the QBOT reward provider of ~$10 a month.

#### Sample Codes

Location String QR Pizza Hut chicago-ilXKFBchcZ000546

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1688070174667/f127862e-1fcc-480e-a905-32d51a7e288f.png)

Subway chicago-ilJBT3yuLQ000543

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1688070175888/29285207-75e4-4810-9e36-8a2563784887.png)

Starbucks chicago-ilQWaWS2x000549

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1688070177194/1d263f05-0998-4c84-83eb-69241ce9ab5c.png)

GreatWraps chicago-ilsotptyYc000537

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1688070178109/87e6ee6c-38ba-4f4b-9d4f-7595fc0d1d6f.png)

Taco Bell chicago-ilZrniejfk000547

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1688070179604/5dbfcf07-4039-437f-8e43-1954c2e35516.png)