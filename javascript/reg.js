function subscribeAccount() {
    let form = document.getElementById("sagies");
    const inputs = form.getElementsByTagName("input");

    fetch("http://127.0.0.1:5000/add-new/", {
            method: "POST",
            body: JSON.stringify({
                firstname: inputs[0].value,
                lastname: inputs[1].value,
                email: inputs[2].value,
                password: inputs[3].value,
                comment: inputs[4].value,
            }),
            headers: {
                "Content-type": "application/json; chartset=UTF.8",
            },
        })
        .then((response) => response.json())
        .then((json) => {
            alert("account has been created");
            console.log(json);
            form.reset();
        });
}

// function subscribeAccount() {
//     let commentInput = document.getElementById("commentId");
//     console.log(commentInput);

//     fetch("http://127.0.0.1:5000/comment/", {
//             method: "POST",
//             body: JSON.stringify({
//                 comments: commentInput.value,

//             }),
//             headers: {
//                 "Content-type": "application/json; chartset=UTF8",
//             },
//         })
//         .then((response) => response.json())
//         .then((json) => {
//             alert("Your comment has been recieved");
//             console.log(json);
//             document.getElementById("com").reset();
//         });
// }
function loginUser() {
    let form = document.getElementById("login");
    let inputs = form.getElementsByTagName("input");

    let username = inputs[0].value;
    let pass = inputs[1].value;

    fetch("https://guarded-bastion-38164.herokuapp.com/show-sub/")
        .then((res) => res.json())
        .then((data) => {
            let loggedIn = data.filter((user) => {
                return user.username == username && user.password == pass;
            });

            if (loggedIn.length > 0) {
                localStorage.setItem("user", JSON.stringify(loggedIn[0]));
                console.log(loggedIn[0])
                alert(`Welcome back ${loggedIn[0].username}`);
                window.location.href = "../html/index.html";
            } else {
                alert('Invalid Login');
            }
        });
}

function addPeople() {
    const inputs = document.getElementsByTagName("input");

    fetch("https://guarded-bastion-38164.herokuapp.com/add-new/", {
            method: "POST",
            body: JSON.stringify({
                username: inputs[0].value,
                password: inputs[1].value,
                confirm_password: inputs[2].value,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .then((json) => {
            alert("YOU HAVE SUCCESSFULLY REGISTERED");
            window.location.href = "login.html";
            document.getElementById("sign-up").reset();
        });
}