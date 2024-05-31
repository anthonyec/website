# Powerlet updates for Manifest V3

Manifest V3 is the newest version of Google's Chrome extension platform, which defines how all extensions interact with the browser. Beginning in June 2024, Google will [no longer support](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3) the previous version, Manifest V2.

All extensions, including [Powerlet](https://chromewebstore.google.com/detail/powerlet/ofecodkcadbenmiknnidnfepbblapgkn), will have to make updates to continue to function.

## What you'll need to do

Powerlet has been updated to work with Manifest V3, but it will require action on your part:

- Accept the new **User Scripts** permission
- Enable **Developer Mode** in `chrome://extensions`

These changes are required because running custom user code has become [heavily restricted](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users). And that's the core functionality of Powerlet.

## Reporting issues

Behind the scenes, it's a [big change](https://github.com/anthonyec/powerlet/pull/85). Much of Powerlet had to be rewritten, so there may be bugs. Please [email me](mailto:anthony.cossins@gmail.com) if you come across any issues. Thanks for your patience!
