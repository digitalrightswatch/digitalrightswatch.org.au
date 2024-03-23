# Digital Rights Watch Static Website

This is the latest version of the [Digital Rights Watch](https://digitalrightswatch.org.au/) website as of February 2024. It is a [Hugo](https://gohugo.io/) static site using the [Apsho](https://jamstackthemes.dev/theme/hugo-apsho/) theme.

## How we got here

The previous version of the website was a WordPress site. Here's how we got here from there:

1. Install the [WordPress to Hugo Exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter) WordPress plugin
2. Use the plugin to export a zip file of all the website content. (NOTE: I followed [this documentation](https://github.com/SchumacherFM/wordpress-to-hugo-exporter?tab=readme-ov-file#if-you-cannot-install-plugins-in-your-wordpresscom-instance) to get an XML export and then do a Hugo export on a local WordPress instance instead)
3. [Create a new Hugo site](https://gohugo.io/getting-started/quick-start/) (`hugo new site drw-website`)
4. Install the theme (`git submodule add git@github.com:StaticMania/hugo-apsho.git themes/apsho && git submodule update`)
4. Drop the `hugo-export.zip` file into into the top of the new site
5. Use the `[wordpress-import](./wordpress-import)` script I wrote to move the converted site's files into the correct places and do some customisations

## The CMS

This website can be managed using [Decap CMS](https://decapcms.org/). Browsing to https://digitalrightswatch.org.au/admin accesses the CMS, and you can log in using your GitHub credentials, assuming you have access to the GitHub repository for this site.

## MVP

- Home page
- Store files in Fastmail file storage for now
- Blog
    - make sure Sam knows how to get in and use the CMS
- Links to donation/campaign pages
- Ensure not to break active links


```
tailscale funnel --set-path=/decap --bg 8081; sudo tailscale funnel --bg 8000
tailscale funnel --https=443 off
python -m http.server -d public/
npx decap-server
```
