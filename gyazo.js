function getfile() {
    file = document.getElementById('gyazo-upload').files

    fetch('https://catbox.moe/user/api.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reqtype:"fileupload", fileToUpload:file })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}
//1