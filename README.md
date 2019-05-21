# adapt-page2TextFile
================

An extension that allows you to save to a text file from the current page you are on. This extension can be used within Adapt Authoring Tool. Please note the button will not show in the drawer until '?dev=save' is typed in front of the # in the URL path. This is so that users will not be able to see question feedback potentially giving them the answers in the course when the page is saved to a text file.<br><br>

<a href="https://www.youtube.com/embed/QnE6aPBvc7M" target="_blank"><img src="page2text-screen.png?raw=true" alt="Save to a text file extension" width="768" height="552" border="10" /><br><br>CLICK ABOVE TO WATCH THE YOUTUBE VIDEO</a>

## Function

This extension provides the learner the opportunity to save the current Adapt course page that they are currently on to a text file. It provides a button in the drawer once clicked the page will be downloaded as a text file. The button can be labelled by editing it in the project settings of the course. This extension is handy if a person is looking to translate a certain page with in the course.


## Settings  

**URL Parameters** (object):
>**?dev=save** (string): Shows the button in the drawer when `?dev=save` is typed in front of # of url path.
>
**_page2TextFile** (object):
>**_isEnabled** (boolean): Turns **Page 2 Text File** on and off. Acceptable values are `true` and `false`.
>
>**_mypage2txt** (string): Place text in the button in the drawer for the save page as text file.
>

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

*   Please note that this extension only prints the **current page** the learner is on. If you wish to provide the learner with all the content you should look into a solution that is not dynamically created as this is.

----------------------------
**Version number:**  2.0.5   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>

**Framework versions:**  2.0     

**Authors / maintainers:** [Mike Stevens](mesgraphix@gmail.com)

**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari iOS 9+10, Safari OS X 9+10, Opera   
