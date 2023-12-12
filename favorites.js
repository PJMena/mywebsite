document.addEventListener('DOMContentLoaded',function() {
        const favoritesData= ["Favorite Color","Favorite Food", "Favorite Hobby","Favorite Book", "Favorite Movie", "Favorite Actor/Actresses","Favorite Singer/Band","Favorite TV show"];

        const favoritesList= document.getElementById('favorites-list');
        favoritesData.forEach((favorite,index)) =>{
            const li = document.createElement('li');
            li.textContent= '${index + 1}. ${favorite}';
            favoritesList.appendChild(li);
        });
});