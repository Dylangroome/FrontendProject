
Functional Issues:

1. Issue: Hamburger menu not working on mobile devices
   Tests:
   - Accessed the website using an iPhone running Safari.
   - Tapped on the hamburger menu icon.
   Encounter: The menu did not open when tapping on the hamburger icon.
   Solution: Researched possible causes such as JavaScript errors and CSS conflicts. Found that there was an issue with the JavaScript code handling the menu toggle on mobile devices. Adjusted the JavaScript code to correctly toggle the menu visibility on mobile devices.

2. Issue: Form submission failure on the Contact Us page
   Tests:
   - Filled out the contact form with valid information.
   - Submitted the form.
   Encounter: The form submission resulted in an error message.
   Possible Solutions Researched:
   - Checked the network tab in the browser's developer tools for any errors or failed requests.
   - Inspected the form validation rules to ensure all required fields were filled correctly.
   Resolution: Discovered that the form submission was failing due to a misconfiguration in the server-side form processing script. Updated the script to handle form submissions correctly and validate input data.

3. Issue: Images not loading on the Shop page in Firefox browser
   Tests:
   - Accessed the Shop page using Firefox browser.
   - Noticed that some images were missing or not loading properly.
   Possible Solutions Researched:
   - Checked the console in the browser's developer tools for any errors related to image loading.
   - Verified the image URLs for correctness and accessibility.
   - Examined the CSS styles for any rules affecting image display.
   Resolution: Discovered that the image paths were incorrect in the HTML markup. Updated the image URLs to point to the correct file paths, ensuring compatibility with Firefox browser's image loading mechanism.

Browsers Tested:
1. Safari (iPhone)
2. Firefox (Desktop)


References:

1. Table: Store Page (pokemon-card-store.html) Line 68-90
2. Form: Contact Us Page (contact-us.html) Line 58 - 66
3. YouTube Video: About Us Page (pokemon-card-store-about-us.html) line 59-64