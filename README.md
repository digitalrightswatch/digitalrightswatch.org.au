# Website build status

[![Netlify Status](https://api.netlify.com/api/v1/badges/31a2bc0e-5bb5-4273-8515-76847ab044f7/deploy-status)](https://app.netlify.com/sites/digitalrightswatch/deploys)


# Running locally

## Install Hugo

Follow the relevant [Hugo installation instructions](https://gohugo.io/installation/) for your situation.

TODO: Confirm which version we running on netlify

## Set up git submodules

This fetches the external theme source code and some other bits:

``` sh
git submodule init

git submodule update

```

TODO: Lock to a specific version of the apsho theme


## Build 

To build the site locally:

```
hugo build
```

This builds the website to a directory public/ just how netlify does. 

## Run locally

If you want to use the built in hugo web server, which is pretty useful really:

``` sh
hugo serve
```

And head to http://localhost:1313 to view the result. Which should look pretty much like what we have running on https://digitalrightswatch.org.au/ unless you have made local modifications.


## Other stuff

Hugo's documentation and `hugo --help`


