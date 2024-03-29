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
        document.getElementById("services-container-id").innerHTML += `<li id="service-li-id" class="slide-visible">
        <div class="card shadow h-100">
            <div class="ratio ratio-16x9">
                <img src="${service?.image}" class="card-img-top" loading="lazy" alt="Services image">
            </div>
            <div class="card-body  p-3 p-xl-5">
                <h3 class="card-title h5">${service?.name}</h3>
                <p class="card-text">${service?.description.slice(0, 140)}</p>
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
    document.getElementById("doctors").innerHTML = ""
    document.getElementById("loding").style.display = "block"
    // console.log(search)
    fetch(`https://testing-8az5.onrender.com/doctor/list/?search=${
        search ? search : ""
      }`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        displayDoctors(data?.results)
    })
 }
//  ? optional chaining, handel error like undefine data
 const displayDoctors = (doctors) => {
    // console.log(doctors.length)
    // for remove previous data
    document.getElementById("loding").style.display = "none"
    if(doctors.length > 0){
        doctors?.forEach(doctor => {
            // console.log(doctor)
            document.getElementById("doctors").innerHTML += `<div class="doctor-card col-md-4">
            <img class="doctor-img" src="${doctor.image}" alt="Doctor-image">
            <h4>${doctor?.full_name}</h4>
            <h6>${doctor?.designation[0]}</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>${doctor?.specialization?.map(iteam => {
                return `<button>${iteam}</button>`
            })}</p>
            <button class="btn btn-info m-2 p-2 text-white"> <a target="_blank" href="DoctorDetails.html?doctorId=${
                doctor.id
              }">Details</a> </button>
        </div>`
        })
    }
    else{
        document.getElementById("doctors").innerHTML += `            <div class="nodata mt-2">
        <img src="images/nodata.png" alt="">
      </div>`
    }

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
            document.getElementById("drop-spe").innerHTML += `<li onclick="loadDoctors('${item.name}')" class="dropdown-item">${item?.name}</li>`;
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

 // ===================Review section start==================

 const loadReview = () => {
    fetch("https://testing-8az5.onrender.com/doctor/review/")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        displayReview(data)
    })
 }
 const displayReview = (reviews) => {
    reviews.forEach(review => {
        document.getElementById("reviews").innerHTML += `<li class="review col-md-3 slide-visible">
        <div class="review_card">
        <div class="d-flex gap-2">
          <div>
            <img class="review_img" src="images/review.webp" alt="Reviewimg">
          </div>
          <div>
            <h4>${review.reviewer}</h4>
            <h4>${review.rating}</h4>
          </div>
        </div>
        <div>
          <h5>Dr. ${review.doctor}</h5>
          <p>${review.body}</p>
          <small>${review.created_on}</small>
        </div>
        </div>
      </li>
      `
    })

 }
 loadReview()
 // ===================Review section  end===================
