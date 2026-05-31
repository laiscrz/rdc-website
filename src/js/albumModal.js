export function initAlbumModal(){

    const openAlbum =
    document.getElementById("openAlbum");

    const albumModal =
    document.getElementById("albumModal");

    const closeAlbum =
    document.getElementById("closeAlbum");

    if(
        !openAlbum ||
        !albumModal ||
        !closeAlbum
    ) return;

    openAlbum.addEventListener("click", () => {

        albumModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

    closeAlbum.addEventListener("click", () => {

        albumModal.classList.remove("active");

        document.body.style.overflow = "";

    });

    albumModal.addEventListener("click", (e) => {

        if(e.target === albumModal){

            albumModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    document.addEventListener("keydown", (e) => {

        if(
            e.key === "Escape" &&
            albumModal.classList.contains("active")
        ){

            albumModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}