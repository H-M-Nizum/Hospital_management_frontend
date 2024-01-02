// ===================Services section  start===================

// load data from api
 const loadservices = () =>{
    fetch("https://testing-8az5.onrender.com/services/")
    .then((res) => res.json())
    .then((data) => displayServicesData(data))
    .catch((err) => console.log(err))
 }

//  Display data that provide loadservice function
const displayServicesData = (services) => {
    services.forEach(service => {
        console.log(service)
        // access parent tag : ul and add child li that contain services card
        const parenttag = document.getElementById("services-container-id").innerHTML += `                <li id="service-li-id" class="slide-visible">
        <div class="card shadow h-100">
            <div class="ratio ratio-16x9">
                <img src="${service.image}" class="card-img-top" loading="lazy" alt="Services image">
            </div>
            <div class="card-body  p-3 p-xl-5">
                <h3 class="card-title h5">${service.name}</h3>
                <p class="card-text">${service.description.slice(0, 140)}</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
    </li>`
    });
}

 loadservices()

 // ===================Services section  end===================
 
 // ===================Doctor section  start===================
 // ===================Doctor section  end===================
 