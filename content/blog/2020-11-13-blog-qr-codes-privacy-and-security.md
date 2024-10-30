---
title: QR codes, privacy and security
authors: [sam]
date: 2020-11-13T04:51:48+00:00
url: /2020/11/13/blog-qr-codes-privacy-and-security/
featureImage: /wp-content/uploads/2020/11/QR_twitter-09.png
eg_vimeo_ratio:
  - 1
eg_youtube_ratio:
  - 1
eg_wistia_ratio:
  - 1
eg_html5_ratio:
  - 1
eg_soundcloud_ratio:
  - 1
eg_custom_meta_216:
  - 'true'
category:
  - Articles
  - 'Tools and Guides'
tags:
  - covid-19
  - privacy
  - QR codes
  - security

---
As lockdown restrictions continue to ease, we are seeing increased use of technology with the goal of keeping track of who is coming and going from venues and small businesses.

The QR Code ("Quick Response" for those who were wondering), a piece of technology developed in the 90s which had a brief moment of popularity in the early 2000s, has re-emerged this year as the go-to "touchless" system to collect information from individuals visiting venues and businesses around Australia.

You've probably seen QR codes floating around at the local COVID-19 testing site, the supermarket and the pub. You may also have read in the news about how QR Codes [make life easier for cafe owners][1] (yay) or how they can [feed data into marketing companies][2] (boo).

But there's a lot more complexity to QR codes, so we've put together this piece to explain what is actually happening (or \*could\* happen) on your phone when you scan a QR code, what some of the privacy and security risks are that you should be aware of, and steps you can take to protect yourself.

### What is a QR code?

QR codes are a way of encoding information into what is essentially a fancy, machine-readable barcode. Most commonly, they contain a link to a website that you are taken to once your phone camera scans the code. In this case, a QR code essentially acts similarly to any other link to a website you might click on—except that on most devices you can't tell where it's going to take you. It just sends you straight there, like magic!

However, QR codes aren't limited to website links. They can also contain data in other formats that your phone might do various things with, for example, it could contain:

  * Contact information which can be added to your phone's contacts
  * Calendar events, which can be added to your calendar
  * SMS codes, which can automatically compose an SMS on your phone to a specific number
  * App store links, to automatically open the app store on a specific app
  * Wifi credentials, which can automatically connect you to a wifi network*

* for the dangers of connecting to unknown, open and unsecured wifi networks and how to keep yourself safe, [check out this article][3] or [this one][4]. (And yes, that means you should probably stop connecting to the free maccas wifi too.)

### What happens when my phone scans one of these codes?

Unfortunately, there is no singular answer to this question—it depends on the type of phone you have, the app (if any) you're using to scan the code, and what is in the QR code itself.

Some phones may not require an app at all to scan a QR code, and it will happen automatically when you hold your camera over the code. There are also dedicated "barcode scanner" apps, as well as several "check-in" apps that have popped up specifically for COVID-19 contact tracing.

If the QR code contains a link to a website, depending on your phone and if you are using an app, several things could happen. It may open the link and take you to the website immediately or it may give you a pop-up with the link and ask if you want to proceed to that website.

### So what are the concerns?

Here we begin to see some of the privacy and security concerns arise. Scanning a QR code is very similar to clicking on a random link in an email or text message (a popular method with scammers!), or clicking on a link that has been through a "shortening" service that makes a link small and easy to type (such as bit.ly).

**The problem is, you can't possibly know what data a QR code contains just by looking at it with your human eyes.**

If the QR code contains a URL, you won&#8217;t know where it will take you until you scan it. Sure, it could be a benign contact tracing venue form (although, more on that later). But it could also be a malicious website, or something designed for "phishing" attacks that is designed to look like a website you already trust, encouraging you to provide information to it, without realising that you're handing over your information to an unknown entity.

If the QR code doesn't contain a URL, it could contain all kinds of other data that could make changes to your device. As highlighted above, it's possible for QR codes to add contacts or calendar events to your phone, send text messages to numbers on your behalf, or even install new apps on your device, often with only a small pop-up you might click through without realising. While these features of QR codes can save you a lot of time and hassle, they can also be malicious and they'll look exactly the same on a poster. But instead of being alarmed, **we want you to be fully informed of the risks, so you can make your own choices about how you want to use QR codes in the wild.**

### What if the QR code is being used as part of a COVID-19 check-in process?

Setting aside the concerns around malicious actors and potential scammers, we should also be thinking through what it means to have our information collected by every venue or business we are visiting.

Some questions we should be considering are:

  * Does the business owner have access to this data? Or is it kept secure and made available only to official contact tracers in the case of an outbreak, and deleted after the designated amount of days?
  * Is the form asking us for more than the legally mandated first name and phone number? Depending on which state you are in, businesses are only allowed to ask for certain information. Generally speaking, they shouldn't be asking you for an email address for COVID-19 purposes, so if it is asking you for this, be aware of ending up on a marketing database.

Something else to consider is that many of these venues and businesses are outsourcing this registration technology to companies that deal in collecting data, many of which have unclear rules about how that information is stored, used and shared. Small businesses with a turnover of less than three million dollars annual turnover are _not_ covered by the _Privacy Act 1988,_ which means they are not covered by the Australian Privacy Principles for how they handle our personal information. On top of this, many of these businesses do not have experience in handling large amounts of personal information. This is not to shame your local cafe or pub for their data practices, but to acknowledge that they are suddenly required to handle a lot of personal information, without much support to do so safely.

### What does this mean for privacy?

In some ways, digital check-ins can be better for your privacy than a paper-based system, as it means that your information isn't lying around (often unattended) on a piece of paper at the front of a cafe for anyone to see. However, there are dangers associated with automatically scanning QR codes without thinking about the risks.

To make the best decision for your circumstances, here are some questions to ask yourself before you scan a QR code:

  * Is there an alternative to scanning the code? For example, you might be able to type a link manually into your browser. Is the link printed underneath or next to the QR code to make it clear?
  * Can you scan it with a dedicated code scanner app first, which will show you what data is inside the QR code, so you can then decide what to do with it?
  * Is the QR code designed to work with a specific app that you need to download?
  * What information is the app or browser asking for, and is all of it mandatory or necessary?

When we see a form that requires more information than your first name and mobile number, we need to be thinking critically about if we want to provide this information. Don't be afraid to ask the business asking for this information to clarify what they actually require for you to check in. You can also ask them if they have an alternative way for you to check in other than the app or form. If the form is asking for an email address, it could end up on a marketing database. This is an illegal use of contact tracing data, so if you see this happen we recommend getting in touch with the [Office of the Australian Information Commissioner.][5]

Overall, we need to remember to be conscious about the tech we are using, and who we are handing our information over to. One of the overarching concerns we have about the increased use of QR codes in response to COVID-19 is that by normalising their use without also educating people about the risks, we're unwittingly teaching people to trust the technology without fully understanding it.

And if you are a business owner—this is not the time to exploit the opportunity and enrich your marketing with information while people are legally obligated to provide it for public health reasons! Set an example in your community by caring for, and protecting the privacy of your patrons. For those doing the right thing in these difficult circumstances, thank you!

 [1]: https://www.abc.net.au/news/2020-09-10/how-to-use-qr-codes-at-cafes-in-covid-pandemic/12627300
 [2]: https://www.abc.net.au/news/2020-10-31/covid-19-check-in-data-using-qr-codes-raises-privacy-concerns/12823432
 [3]: https://www.wired.com/story/public-wifi-safety-tips/
 [4]: https://www.cloudwards.net/dangers-of-public-wifi/
 [5]: https://www.oaic.gov.au/
