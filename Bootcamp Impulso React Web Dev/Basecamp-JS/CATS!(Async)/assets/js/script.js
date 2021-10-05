const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('change-cat');

const getCats = async () => {
   // try {
   //    const data = await fetch(BASE_URL);
   //    const json = await data.json();
   
   //    return json.webpurl;

   // } catch(e) {
   //    console.log(e.message);

   // }

   const data = await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((e) => console.log(e));

   return data.webpurl

};

const loadImage = async () => {
   const img = document.getElementById('cat');
   img.src = await getCats();

}

btn.addEventListener('click', loadImage);

loadImage();