function addimage() {
    const inputs = document.getElementsByTagName("input");

    fetch("http://127.0.0.1:5000/images/", {
            method: "POST",
            body: JSON.stringify({
                name: inputs[0].value,
                image: inputs[1].value,
            }),
            headers: {
                "Content-type": "application/json; charset=UFT-8",

            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            alert("item loaded");
            document.getElementsById("images").reset()
        })
}