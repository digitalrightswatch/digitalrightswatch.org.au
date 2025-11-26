---
draft: true
title: How to Disabile AI Scraping on Google, Meta, and LinkedIn
category:
  - tools-and-guides
featured: []
date: 2025-11-26T05:49:19.182Z
featureImage: /images/ai-scraping.png
cardImage: /images/untitled-design.png
---
Major tech companies have been quietly updating their processes to include scraping personal information to train their AI models. This means often past, present, and future data you post on popular social media sites, as well as in Google email and documents is currently being fed into huge training datasets for AI systems.

While ideally each individual could opt to have a right for their data to not be used to train AI models globally, for now each platform has their own opt-out process.

We've compiled a short guide here to outline how to opt-out of Google, Meta, and LinkedIn using your data to train AI.

## Google

Google has updated their policies and settings to allow scraping of data from emails and Drive documents. Follow the steps below to disable AI training on your data, but please note this will disable Gemini and so-called 'Smart' features like AI assisted email and docs content generation.

### Steps to stop Google training AI on your emails and documents:

* Go to your Gmail settings
* Click 'See all settings'
* In your general settings, scroll down to the bottom
* Smart features: Turn off 'smart features in Gmail, Chat, and Meet'
* Google Workspace smart features: Click ‘Manage Workspace smart feature settings’
* Toggle off: ‘Smart features in Google Workspace’ and ‘Smart features in other Google products

<div class="carousel-container" id="carousel1">
  <div class="carousel">
    <div class="carousel-slide active">
      <img src="/images/google2.png" alt="Image 1">
    </div>
    <div class="carousel-slide">
      <img src="/images/google3.png" alt="Image 2">
    </div>
    <div class="carousel-slide">
      <img src="/images/google4.png" alt="Image 3">
    </div>
  </div>
  
  <button class="carousel-btn prev" onclick="moveSlide(-1, 'carousel1')">&#10094;</button>
  <button class="carousel-btn next" onclick="moveSlide(1, 'carousel1')">&#10095;</button>
  
  <div class="carousel-dots">
    <span class="dot active" onclick="currentSlide(0, 'carousel1')"></span>
    <span class="dot" onclick="currentSlide(1, 'carousel1')"></span>
    <span class="dot" onclick="currentSlide(2, 'carousel1')"></span>
  </div>
</div>

<style>
.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-slide {
  display: none;
  width: 100%;
}

.carousel-slide.active {
  display: block;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 400px;
  object-fit: contain;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 16px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-dots {
  text-align: center;
  padding: 20px 0;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active,
.dot:hover {
  background-color: #717171;
}
</style>

<script>
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function moveSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}
</script>


## Meta

Meta has announced they have begun training their AI models on data from Facebook and Instagram users. This includes retroactively training on past data. Follow these steps in order to request to opt-out of this data collection.

* Navigate to 'Settings & Privacy'
* Click 'Privacy Center'
* Open the 'Other Policies & Articles' accordion
* Click 'How Meta uses information for generative AI models and features'
* Open the 'Your right to object' accordion
* Click 'Learn more and object here'
* Fill out the form and submit

<div class="carousel-container" id="carousel2">
  <div class="carousel">
    <div class="carousel-slide active">
      <img src="/images/meta1.png" alt="Image 1">
    </div>
    <div class="carousel-slide">
      <img src="/images/meta2.png" alt="Image 2">
    </div>
    <div class="carousel-slide">
      <img src="/images/meta3.png" alt="Image 3">
    </div>
    <div class="carousel-slide">
      <img src="/images/meta4.png" alt="Image 4">
    </div>
  </div>
  
  <button class="carousel-btn prev" onclick="moveSlide(-1, 'carousel2')">&#10094;</button>
  <button class="carousel-btn next" onclick="moveSlide(1, 'carousel2')">&#10095;</button>
  
  <div class="carousel-dots">
    <span class="dot active" onclick="currentSlide(0)"></span>
    <span class="dot" onclick="currentSlide(1, 'carousel2')"></span>
    <span class="dot" onclick="currentSlide(2, 'carousel2')"></span>
    <span class="dot" onclick="currentSlide(3, 'carousel2')"></span>
  </div>
</div>

<style>
.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-slide {
  display: none;
  width: 100%;
}

.carousel-slide.active {
  display: block;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 400px;
  object-fit: contain;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 16px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-dots {
  text-align: center;
  padding: 20px 0;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active,
.dot:hover {
  background-color: #717171;
}
</style>

<script>
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function moveSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}
</script>


## LinkedIn

LinkedIn has started using data on their platform as training for AI models. If you want to opt-out of having your personal information used in this way:

* Head first to your 'settings'
* Then the 'data privacy' option
* Turn 'Data for Generative AI Improvement' OFF

<img src="/images/linkedin1.jpg" alt="" style="max-width: 600px; width: 100%;">