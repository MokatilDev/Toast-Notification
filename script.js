const Notifications = document.querySelector("ul");
const Success = document.querySelector("li");
const btns = document.querySelectorAll("button");


const details = {
    Success: {
        icon: "fa-solid fa-circle-check",
        text: "Success: This is a success toast",
    },
    Error: {
        icon: "fa-solid fa-circle-xmark",
        text: "Error: This is an error toast",
    },
    Warning: {
        icon: "fa-solid fa-circle-exclamation",
        text: "Warning: This is a warning toast",
    },
    Info: {
        icon: "fa-solid fa-solid fa-circle-info",
        text: "Info: This is an infomartion toast",
    },
}

function Remove1(e) {
    e.classList.add("hide")
    setTimeout(() => {
        e.remove()
    }, 290)
}

function toats(e) {
    return `<div>
    <i class="fa-sharp ${details[e].icon}"></i>
    <span>${details[e].text}</span>
    </div>
    <i onclick="Remove1(this.parentElement)" class="fa-sharp fa-solid fa-xmark"></i>`
}


btns.forEach(element => {
    element.addEventListener("click", () => {
        const li = document.createElement("li")
        li.setAttribute("id", `${element.id}Toast`)
        li.innerHTML = toats(element.id)
        Notifications.appendChild(li)
        setTimeout(() => {
            li.classList.add("hide")
            setTimeout(() => {
                li.remove()
            }, 290)
        }, 5000)
    });
})




