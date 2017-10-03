# adapt-printPage

**Print page** is an *extension* for the [Adapt framework](https://github.com/adaptlearning/adapt_framework).  
<img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/resources01.gif" alt="Resources in action">      

**Print page** provides the learner the opportunity to print the current Adapt course page that they are currently on. It provides either an print icon in the navigation bar or creates a faux component with a prompt to print at the bottom of the page.

## Motivation

Our department creates online courses for students that are studying masters programs full time at a top twenty-five global university. As such, our students require ways to engage with their content more than just scrolling through an eLearning course. Research shows the best way to engage with content is by being able to annotate. We looked into some online annotation tools but we were hesitant about requiring our learners to sign up for new accounts. We also looked into tools such as [Adapt2Html](https://github.com/cgkineo/adapt2html) but this tool didn't work with Authoring Tool output and would take time to produce and append to the course as a PDF.

Eventually we had the realization that Adapt courses looked pretty good when you just printed the page. Then we could just use the `@print` media query to style components further so that they would would work for a static printed page. We initially added the LESS that styled the printed document in the theme and provided a text prompt telling users to print the page but soon realized it would be easier to just spin the functionality out to a component that could provide an icon or link to print the page as well as storing the styling LESS.

<div float align=right><a href="#top">Back to Top</a></div>

## Settings  

**_printPage** (object):
>**_isEnabled** (boolean): Turns **Print page** on and off. Acceptable values are `true` and `false`.
>
>**_showOn** (string): if value is equal to `navigation` the Print page extension will appear as an icon in the navigation bar. Otherwise the extension renders at the bottom of the page.
>
>**text** (string): This setting is only works when the extension is rendered at the bottom. This attribute sets the text that prompts the learner to print the page.

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

*   Please note that this extension only prints the **current page** the learner is on. If you wish to provide the learner with all the content you should look into a solution that is not dynamically created as this is.
*   This extension has been configured to work within the workflow of the King's Online team use of Adapt plugins. If you are using this plugin with non-core plugins you should configure the `print.less` file to correctly work with any plugins that you are using.

----------------------------
**Version number:**  2.0.5   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>

**Framework versions:**  2.0     

**Authors / maintainers:** [Simon Date](simon.date@kcl.ac.uk), [Louise Bennett](louise.bennett@kcl.ac.uk)

**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari iOS 9+10, Safari OS X 9+10, Opera   
