# message-board

A website made to help people interested with programming.

### Description

You are able to post a question and other people are able to post answers. you are also able to view other peoples questions and post answers to theirs.

##specifacations

| Behavior                   | Input Example     | Output Example    |
|:---:|:---:|:---:|
|user can create a post question|user: jim question: why this? img:(pic) content:explaining why question|post created and listed on homepage|
|users can view question on own page|user clicks question|routes to page displaying only that question and all comments|
|user can post comment on question|the answer is this|answer is displayed on that posts page|
|user can edit comment|answer is that not this|updated comment to answer is that|


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Setup

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://ChanceMagno.github.io/message-board
).
  * Clone this track survey repository by typing, `git clone(https://ChanceMagno.github.io/message-board
)`
* Download
  * Click [here](https://ChanceMagno.github.io/message-board
/archive/master.zip) to download the repo
  * Unzip the zipped repository

## Installation

* `git clone <https://ChanceMagno.github.io/message-board>` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
