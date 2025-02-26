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
      throw new Error('no British Shorthair images found.');
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

document.addEventListener("click", () => {
    /* change background color on click, choosing colors that are readable*/
    const colors = ["#f8f9fa", "#e3f2fd", "#f1f8e9", "#fff3e0", "#fce4ec", "#ede7f6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

window.onload = fetchCatImage;