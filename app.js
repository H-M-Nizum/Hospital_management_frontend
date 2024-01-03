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
        // console.log(service)
        // access parent tag : ul and add child li that contain services card
        document.getElementById("services-container-id").innerHTML += `                <li id="service-li-id" class="slide-visible">
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

 const loadDoctors = (search) => {
    fetch(`https://testing-8az5.onrender.com/doctor/list/?search=${
        search ? search : ""
      }`)
    .then((res) => res.json())
    .then((data) => displayDoctors(data?.results))
 }
//  ? optional chaining, handel error like undefine data
 const displayDoctors = (doctors) => {
    console.log(doctors)
    doctors?.forEach(doctor => {
        console.log(doctor)
        document.getElementById("doctors").innerHTML += `<div class="doctor-card">
        <img class="doctor-img" src="${doctor.image}" alt="Doctor-image">
        <h4>${doctor?.full_name}</h4>
        <h6>${doctor?.designation[0]}</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>${doctor?.specialization?.map(iteam => {
            return `<button>${iteam}</button>`
        })}</p>
        <button>Details</button>
    </div>`
    })

 }
 loadDoctors()

//  --------------------Designation section start-----------------
const loadDesignation = () => {
    fetch("https://testing-8az5.onrender.com/doctor/designation/")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          document.getElementById("drop-deg").innerHTML += `<li class="dropdown-item">${item?.name}</li>`;
        });
      });
  };
loadDesignation();
const loadSpecialization = () => {
    fetch("https://testing-8az5.onrender.com/doctor/specialization/")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
            document.getElementById("drop-spe").innerHTML += `<li class="dropdown-item">${item?.name}</li>`;
        });
    });
};

loadSpecialization();

const handleSearch = () => {
    const values = document.getElementById("searchs").value;
    console.log(values)
    loadDoctors(values);
  };
  handleSearch()
//  --------------------- Designation section end-----------------
 // ===================Doctor section  end===================
//  