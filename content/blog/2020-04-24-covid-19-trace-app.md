---
title: The Government Covid-19 Contact Tracing Smartphone App
author: David Paris
date: 2020-04-23T14:02:51+00:00
url: /2020/04/24/covid-19-trace-app/
featureImage: /wp-content/uploads/2020/04/everyone-using-phones.jpg
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
categories:
  - News
  - 'Tools &amp; Guides'
tags:
  - contact tracing app
  - covid-19
  - surveillance

---
_last updated on May 10th prior to legislation being tabled_  
_previously updated on April 26th after the Government launched the app, and _April 29th after comments from Stephen Conroy__ 

**To expedite Covid-19 contact tracing in Australia, the Commonwealth Government has announced a new smartphone application will be in [Google][1] and Apple stores within a fortnight.** 

**This explainer on the privacy impacts of the app has been collated based on information that we&#8217;ve learned as it has slowly been released.**

The app uses Bluetooth Low Energy to detect other phones running the app nearby. When the app detects another phone within 1.5 metres, it records the unique identifier of that phone and the duration of time it was within proximity, and then encrypts it. This data is retained on the phones for 21 days, the duration of contagiousness. If an app user tests positive, stored data for phones that recorded 15 minutes or more of contact—the duration of contact likely to put someone at risk of infection—are uploaded to the government server, and decrypted. A health department official then contacts those potentially infected users.

Any initiative undertaken by the government using digital technologies and personal information must be <span style="text-decoration: underline;">transparent</span>, <span style="text-decoration: underline;">temporary</span> and <span style="text-decoration: underline;">proportionate</span> in order to generate the social licence to function as needed. This app does not meet those standards. There are issues with the efficacy of the app itself, and several reasons why Australians may not adopt it in sufficient numbers to be effective. The government has put that number at 40%. Experts elsewhere [suggest this is too low][2], and Senate hearings conducted by the committee overseeing the governments covid-19 response [uncovered that this number was not based on any modelling][3] at all, as if conjured from thin air.

There is a litany of public failures that undermine the government&#8217;s credibility with tech projects. The census, robodebt, MyGov and more. People are rightly concerned about data loss or misuse regardless of whether it is by accident or design.

There is no strong international case the government can cite. The app was not a big success in Singapore, only about 20% of people installed it. [A 2019 survey reported][4] 67% of Singaporeans trust their government. Only 42% of Australians felt the same way about theirs. Prime Minister Lee Hsien Loong said for almost half of the people infected there, “we do not know where or from whom the person caught the virus,” after the app deployment.

The use of BLE to exchange unique identifiers, properly encrypted on the device, is a good technical solution at first glance. However, privacy safeguards, particularly on Apple iOS, make it unreliable in its current form. Apple users of TraceTogether, the app used in Singapore the Australian one is based on, have reported that unless the app is active on screen and no other Bluetooth device is in use, it does not record connections. [This has been shown to be the case on Australian phones too][5]. Older phones and operating systems seem to be the least reliable, and older hardware is more likely to be owned by more vulnerable people. The reliability issues impact battery life and general usability of the phone, with some anecdotal evidence that users are deactivating, uninstalling or simply ignoring it. Health Minister Greg Hunt suggested Apple were providing a fix in the coming weeks. It is unclear at this stage if that means a change to the framework of the app completely, [as has been the case in Germany][6].

As with any data exchange involving governments, particularly around potentially identifiable personal information, there are numerous privacy concerns. The data app collects (in this case it requires a name, phone number, postcode and an age range on registering, and keeps only encrypted contact IDs on device) should be carefully considered but is not the biggest concern. What authorities will do with data they obtain is key. 

Simple disclosures around what is recorded on the device, for how long, what data is sent to the Government server, who controls that server and who accesses it, what laws it is subject to, as well as when the app will shut down, when data collection will cease and when data will be destroyed aren’t sufficiently addressed in the [Government&#8217;s privacy policy][7].

Information about the new app trickled in as the government responded to criticisms prior to launch. This led to the government declaring the app source code will be open for anyone to review, a stance they [walked back,][8] and then about-faced on again. The [source code was released some two weeks after launch][9], for the app only. [An assessment][10] by the Cyber Security Cooperative Research Centre deemed the app safe. Other experts strongly [criticised the government&#8217;s open source practices][11]. There is no audit trail of the changes made to the code, no way to directly suggest changes or raise concerns around potential vulnerabilities, and pull requests are entirely disabled. The Digital Transformation Office says that [the code that relates to the COVIDSafe National Information Storage System will not be released][12], supposedly to protect privacy. The government has been at pains to say privacy will be respected, but continues to ignore best practice to ensure it.

The design of the app and the legislation governing it both contradict statements made by Government officials that the app would only collect data of other app users within 1.5 metres, for at least 15 minutes. The [Privacy Impact Assessment of the app][13] reveals it collects, and – with consent of a user who tests positive – uploads to the central data store, data about every other user who came within Bluetooth range within the preceding 21 days. The bill does not limit the use of this data.

The infrastructure at the government end has not been independently assessed. The CSCRC was not given access to the entire system. This leaves uncertainty around what happens to the information once it reaches the government. <span style="text-decoration: underline;">Why isn’t the whole data custody chain auditable if the system is only for this one purpose?</span>

A more rights-focussed decentralised app design could perform the same function while removing the need for a government ‘middle-man’ to [handle any data at all][14]. If a user tests positive for the virus, that information could trigger notifications to be sent to contacts from that user’s phone, informing them to seek a test and quarantine.

The centralised model the Government deployed requires users to register their basic information, and data exchanges are handled by a server in Australia provided by Amazon Web Services. AWS infrastructure is subject to US laws governing data, as well as their surveillance regime. This simply means that data from the app could be accessed by US law enforcement, regardless of protections here. Information exchange arrangements between American and Australian agencies could see that data eventually end up in hands of local law enforcement as well. Attorney-General’s Department deputy secretary Sarah Chidgey, responding to questions at the Senate hearings, could not give a “100% guarantee” that the data would not be accessed by US law enforcement.

Prime Minister Scott Morrison said that any information collected would only be used by state and territory health agencies for covid19-related purposes. Attorney-General Christian Porter stated police will be barred from [accessing metadata from the app][15]. And Health Minister Greg Hunt announced [a Determination under the Biosecurity Act][16] to prohibit other access or use of the app or the data.

In other jurisdictions this may well be adequate, but recently passed legislation in Australia completely undermines these provisions, necessitating further legislation.

The [Telecommunications and Other Legislation Amendment (Assistance and Access) Act 2018][17], or TOLA, gives Australian law enforcement and intelligence agencies powers to compel anyone providing any service or product that involves telecommunications or the internet to remove electronic protections like encryption. They can also issue a directive to create or modify features. It is an offence for anyone receiving such an order to even reveal its existence, or to fail to comply with it. Government officials denied that such a backdoor has been created.

An app that records when and for how long people of interest come into contact is undeniably a compelling capability for security agencies to have access to. Former Communications Minister Stephen Conroy (whose offices were raided by the AFP in 2016 while he was in opposition accompanied by an obviously tipped-off media) suggested this recently. He said that based on security briefings he had while in government, he is [not confident the app wouldn&#8217;t be compromised][18] in this way. Deputy chief medical officer Nick Coatsworth revealed that the government had to refuse requests from law enforcement agencies for “added capabilities” to be included in the system.

These extraordinary powers forced the government to include language in the legislation governing the app to override them. The bill [“cancels the effect” of any other law that might enable such prohibited conduct][19]. This does not explicitly apply to warrants or court orders that may be issued for the data.

But extending the capability of the app is not the only avenue authorities could exploit. The metadata retention scheme implemented by the Government in 2015 mandates the collection and retention of identifying information for 2 years. This data is already being accessed by many more agencies than the government assured it would be, unprotected by any warrant requirement. Cross-referencing contact tracing app data could easily create a de-anonymised picture of who met with who and for how long. the legislation needs to explicitly address this possibility.

The Attorney-General and the Prime Minister have desperately attempted to address privacy concerns with this legislation, which is a considerable step forward. But even a commitment like this can’t be accepted uncritically.

A week after [Scott Morrison stated no mobile phone location data was being used][20] by the Government as it was in the UK to monitor trends in response to the virus, [an arrangement between Vodafone and the Government to do exactly that][21] was revealed. Arrangements with other telcos have not been confirmed but are almost certainly in place. This deception typifies the government’s approach to issues around privacy and surveillance in recent years, and shows why the government has had to go to unprecedented lengths to assure the public.

Privacy and other rights concerns were ignored completely when mandatory data retention was introduced, and again when TOLA was introduced. One of the loudest warnings at that time came from industry professionals, who said that the passage of this bill meant any and every piece of software developed or deployed in Australia could no longer be trusted.

Contempt for our rights in the recent past by governments at every level has led to this environment of mistrust, and it could not have come at a worse time.

 [1]: https://play.google.com/store/apps/details?id=au.gov.health.covidsafe
 [2]: https://www.economist.com/science-and-technology/2020/04/16/app-based-contact-tracing-may-help-countries-get-out-of-lockdown
 [3]: https://twitter.com/denhamsadler/status/1257908548974993408
 [4]: https://www.edelman.com/sites/g/files/aatuss191/files/2019-02/2019_Edelman_Trust_Barometer_Global_Report_2.pdf
 [5]: https://www.theguardian.com/world/2020/may/06/covidsafe-app-is-not-working-properly-on-iphones-authorities-admit
 [6]: https://techcrunch.com/2020/04/27/germany-ditches-centralized-approach-to-app-for-covid-19-contacts-tracing/
 [7]: https://www.health.gov.au/covidsafe-privacy-policy
 [8]: https://www.itnews.com.au/news/health-minister-now-unsure-if-source-code-for-covid-contact-tracing-app-is-safe-to-release-546981
 [9]: https://github.com/AU-COVIDSafe
 [10]: https://www.abc.net.au/news/2020-04-21/cyber-agency-supports-security-coronavirus-tracing-app/12168136
 [11]: https://www.innovationaus.com/covidsafe-code-released-but-developers-unhappy/
 [12]: https://www.dta.gov.au/news/dta-publicly-releases-covidsafe-application-source-code
 [13]: https://www.health.gov.au/resources/publications/covidsafe-application-privacy-impact-assessment
 [14]: https://github.com/vteague/contactTracing/blob/master/blog/2020-03-30TweakingTracetogether.md
 [15]: https://www.brisbanetimes.com.au/politics/federal/attorney-general-to-ban-police-from-accessing-coronavirus-app-metadata-20200422-p54m6e.html
 [16]: https://www.legislation.gov.au/Details/F2020L00480/Html/Text
 [17]: https://www.legislation.gov.au/Details/C2018A00148
 [18]: https://twitter.com/joshgnosis/status/1255058581621108742
 [19]: https://www.ag.gov.au/RightsAndProtections/Privacy/Pages/COVIDSafelegislation.aspx
 [20]: https://www.pm.gov.au/media/press-conference-australian-parliament-house-act-12
 [21]: https://www.smh.com.au/technology/mobile-phone-location-data-used-to-track-australians-movements-during-coronavirus-crisis-20200404-p54h09.html