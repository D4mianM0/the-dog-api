document.getElementById("GenerateRandom").addEventListener("click", function () {
    const apiUrl = "https://dog.ceo/api/breeds/image/random";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
            }
            return response.json();
        })
        .then((data) => {
            // Obtener la URL de la imagen del objeto de datos
            const imageUrl = data.message;

            // Mostrar la imagen en el elemento con el id "RandomDog"
            const randomDogImage = document.getElementById("RandomDog");
            randomDogImage.src = imageUrl;
        })
        .catch((error) => {
            console.error("Hubo un error al hacer la solicitud:", error);
        });
});
