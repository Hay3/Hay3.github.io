function loadArtistInfo() {
    var table = document.getElementsByTagName("table");
    table.append('111111111111');

    var i;
    for (i = 0; i < 5; ++i) {
        let trNode = document.createElement("tr");
        let img = document.createElement("img");

        const id = Math.floor(Math.random() * 100);
        const sexID = Math.floor(Math.random() * 2) <= 1 ? "men" : "women";

        img.src = 'https://randomuser.me/api/portraits/med/${sexID}/${id}.jpg';
        console.log(img.src);

        trNode.appendChild(img);
        table.append(img);
    }
}