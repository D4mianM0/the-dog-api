document.getElementById("GenerateBreed").addEventListener("click", function () {
    const selectedBreed = document.getElementById("dogBreed").value;
    const imageUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
    
    fetch(imageUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
            }
            return response.json();
        })
        .then((data) => {
            // Obtener la URL de la imagen del objeto de datos
            const imageUrl = data.message;
            
            // Mostrar la imagen en el elemento con el id "BreedDogImage"
            const breedDogImage = document.getElementById("BreedDogImage");
            breedDogImage.src = imageUrl;
        })
        .catch((error) => {
            console.error("Hubo un error al hacer la solicitud:", error);
        });
        
    // También puedes obtener información adicional de una fuente como una API de información de razas de perros y mostrarla en el elemento con el id "BreedInfo"
    fetch(`https://api.example.com/breed-info/${selectedBreed}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
            }
            return response.json();
        })
        .then((infoData) => {
            const breedInfo = document.getElementById("BreedInfo");
            breedInfo.innerHTML = `
                <h3>${infoData.name}</h3>
                <p>Origen: ${infoData.origin}</p>
                <p>Temperamento: ${infoData.temperament}</p>
                <!-- Agrega más información aquí -->
            `;
        })
        .catch((error) => {
            console.error("Hubo un error al obtener información de la raza:", error);
        });
});
