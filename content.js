// Array of replacement image URLs
const replacementImages = [
  'https://www.media.hw-static.com/media/2016/10/borat-20th-century-fox-103116.jpg',
  'https://www.dispatch.com/gcdn/authoring/2017/11/15/NCOD/ghows-OH-857cbdaf-4264-4814-87a8-4c4f10b9cc6d-543bc385.jpeg?width=660&height=448&fit=crop&format=pjpg&auto=webp',
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/9180/production/_115084273_cfbc1938-3feb-4a79-88f4-593f24d3ad3b.jpg',
  'https://i2-prod.mirror.co.uk/incoming/article22837869.ece/ALTERNATES/s615b/1_Borat-2-trailer-reveals-Sacha-Baron-Cohen-was-the-Trump-impersonator-who-interrupted-Mike-Pences-CP.jpg',
  'https://compote.slate.com/images/e018abe7-603e-499c-b261-b5c935b4b0ec.jpeg?crop=1560%2C1040%2Cx0%2Cy0',
  'https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2006/11/whats_real_in_borat.jpg',
  'https://decider.com/wp-content/uploads/2020/10/Borat-.jpg?quality=80&strip=all&w=1200',
  'https://www.indiewire.com/wp-content/uploads/2020/09/MCDBORA_FE045.jpg?w=600&h=337&crop=1',
  'https://s.abcnews.com/images/Entertainment/HT-borat1-ml-161103.jpg',
  'https://i0.wp.com/www.thewrap.com/wp-content/uploads/2021/04/borat-subsequent-moviefilm-review-a-worthy-sequel-that-matches-everything-offered-in-the-first-part_rollout-scaled.jpg?fit=1280%2C647&ssl=1',
  'https://imgix.ranker.com/list_img_v2/18966/2798966/original/borat-behind-the-scenes?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355',
  'https://netstorage-tuko.akamaized.net/images/819d5fb99a2cb0a3.jpg?imwidth=900',
  'https://imgix.ranker.com/user_node_img/50096/1001919740/original/borat-was-reported-as-a-possible-terrorist-and-the-fbi-opened-a-file-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375'
];


// Array of domains to avoid
const avoidDomains = [
  'google.com',
  'google.co.uk',
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * replacementImages.length);
  return replacementImages[randomIndex];
}

function shouldAvoidDomain() {
  return avoidDomains.some(domain => window.location.hostname.includes(domain));
}

function replaceImages() {
  // Check if we're on an avoided domain
  if (shouldAvoidDomain()) {
    return; // Exit the function if we're on an avoided domain
  }

  // Replace standard <img> tags
  const images = document.getElementsByTagName('img');
  for (let img of images) {
    if (!img.dataset.replaced) {
      img.src = getRandomImage();
      img.srcset = '';
      img.dataset.replaced = 'true';
    }
  }

  // Replace <source> tags within <picture> elements
  const sources = document.getElementsByTagName('source');
  for (let source of sources) {
    if (source.srcset && !source.dataset.replaced) {
      const newImage = getRandomImage();
      source.srcset = `${newImage} 1x, ${newImage} 2x`;
      source.dataset.replaced = 'true';
    }
  }

  // Replace <img> tags within <picture> elements
  const pictures = document.getElementsByTagName('picture');
  for (let picture of pictures) {
    const img = picture.querySelector('img');
    if (img && !img.dataset.replaced) {
      img.src = getRandomImage();
      img.srcset = '';
      img.dataset.replaced = 'true';
    }
  }
}

// Initial replacement
replaceImages();

// Observe DOM changes to replace new images
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && 
        (mutation.attributeName === 'src' || mutation.attributeName === 'srcset')) {
      const element = mutation.target;
      if (!element.dataset.replaced) {
        if (element.tagName.toLowerCase() === 'img') {
          element.src = getRandomImage();
          element.srcset = '';
        } else if (element.tagName.toLowerCase() === 'source') {
          const newImage = getRandomImage();
          element.srcset = `${newImage} 1x, ${newImage} 2x`;
        }
        element.dataset.replaced = 'true';
      }
    } else if (mutation.addedNodes.length) {
      replaceImages();
    }
  });
});

observer.observe(document.body, { 
  subtree: true, 
  childList: true, 
  attributes: true, 
  attributeFilter: ['src', 'srcset'] 
});

// Handle scroll events
window.addEventListener('scroll', replaceImages, { passive: true });

// Periodically check for new images
setInterval(replaceImages, 1000);