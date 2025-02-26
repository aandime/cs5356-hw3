/* if this was on a backend server we would include this api in a .env file but since its just a website page, im going to leave it */
const apiKey = 'live_jdze3HODv79AFP54FLpMz9HIhwS2KVg1yldMnRJ97xgXax1Bq4RzFbi6iB2xtQFCY';
const breedId = 'bsho';

async function fetchCatImage() {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=1`, {
      headers: {
        'x-api-key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error('No British Shorthair images found.');
    }

    const imgElement = document.getElementById('catImage');
    if (imgElement) {
      imgElement.src = data[0].url;
      imgElement.alt = 'A cute British Shorthair cat';
    } else {
      console.error("Image element with ID 'catImage' not found.");
    }
  } catch (error) {
    console.error('Error fetching cat image:', error);
  }
}

window.onload = fetchCatImage;

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            img.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.3)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });
});

  