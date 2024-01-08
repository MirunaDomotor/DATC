const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form"); // Corrected the selector

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share an ambrosia infestation place";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const allCategoriesButton = document.getElementById("btn-all");
  const cetateButton = document.getElementById("btn-cetate");
  const araduluiButton = document.getElementById("btn-aradului");
  const blascoviciButton = document.getElementById("btn-blascovici");
  const mehalaButton = document.getElementById("btn-mehala");
  const elisabetinButton = document.getElementById("btn-elisabetin");
  const plopiButton = document.getElementById("btn-plopi");
  const iosefinButton = document.getElementById("btn-iosefin");
  const frateliaButton = document.getElementById("btn-fratelia");
  const ciardaButton = document.getElementById("btn-ciarda");
  const torontaluluiButton = document.getElementById("btn-torontalului");
  const soareluiButton = document.getElementById("btn-soarelui");
  const giroculuiButton = document.getElementById("btn-girocului");
  const fabricButton = document.getElementById("btn-fabric");
  const freidorfButton = document.getElementById("btn-freidorf");
  const lipoveiButton = document.getElementById("btn-lipovei");
  const braytimButton = document.getElementById("btn-braytim");
  const circumvalatiuniiButton = document.getElementById(
    "btn-circumvalatiunii"
  );
  const ronatButton = document.getElementById("btn-ronat");
  const complexButton = document.getElementById("btn-complex");
  const tipografilorButton = document.getElementById("btn-tipografilor");
  const ghirodaButton = document.getElementById("btn-ghiroda");
  const padureaButton = document.getElementById("btn-padurea");
  const dumbravitaButton = document.getElementById("btn-dumbravita");
  const mosnitaButton = document.getElementById("btn-mosnita");
  const girocButton = document.getElementById("btn-giroc");
  const urseniButton = document.getElementById("btn-urseni");
  const saguluiButton = document.getElementById("btn-sagului");

  // Add references to other category buttons

  const factList = document.querySelector(".fact-list");
  const allFacts = factList.querySelectorAll(".fact");

  function showAllFacts() {
    allFacts.forEach((fact) => {
      fact.style.display = "block";
    });
  }

  function filterFacts(category) {
    allFacts.forEach((fact) => {
      const tag = fact.querySelector(".tag").textContent.toLowerCase();
      if (tag === category || category === "all") {
        fact.style.display = "block";
      } else {
        fact.style.display = "none";
      }
    });

    // Check if there are any facts displayed for the selected category
    const factsForCategory = Array.from(allFacts).some((fact) => {
      const tag = fact.querySelector(".tag").textContent.toLowerCase();
      return tag === category;
    });

    if (!factsForCategory) {
      // Show all facts if no facts are available for the selected category
      showAllFacts();
    }
  }

  allCategoriesButton.addEventListener("click", function () {
    showAllFacts();
  });

  cetateButton.addEventListener("click", function () {
    filterFacts("cetate");
  });

  araduluiButton.addEventListener("click", function () {
    filterFacts("aradului");
  });
  blascoviciButton.addEventListener("click", function () {
    filterFacts("blascovici");
  });

  saguluiButton.addEventListener("click", function () {
    filterFacts("sagului");
  });
  mehalaButton.addEventListener("click", function () {
    filterFacts("mehala");
  });
  elisabetinButton.addEventListener("click", function () {
    filterFacts("elisabetin");
  });
  plopiButton.addEventListener("click", function () {
    filterFacts("plopi");
  });
  iosefinButton.addEventListener("click", function () {
    filterFacts("iosefin");
  });
  frateliaButton.addEventListener("click", function () {
    filterFacts("fratelia");
  });
  ciardaButton.addEventListener("click", function () {
    filterFacts("ciarda");
  });
  torontaluluiButton.addEventListener("click", function () {
    filterFacts("torontalului");
  });
  soareluiButton.addEventListener("click", function () {
    filterFacts("soarelui");
  });
  giroculuiButton.addEventListener("click", function () {
    filterFacts("girocului");
  });
  fabricButton.addEventListener("click", function () {
    filterFacts("fabric");
  });
  freidorfButton.addEventListener("click", function () {
    filterFacts("freidorf");
  });
  lipoveiButton.addEventListener("click", function () {
    filterFacts("lipovei");
  });
  braytimButton.addEventListener("click", function () {
    filterFacts("braytim");
  });
  circumvalatiuniiButton.addEventListener("click", function () {
    filterFacts("circumvalatiunii");
  });
  ronatButton.addEventListener("click", function () {
    filterFacts("ronat");
  });
  complexButton.addEventListener("click", function () {
    filterFacts("complexul");
  });
  tipografilorButton.addEventListener("click", function () {
    filterFacts("tipografilor");
  });
  ghirodaButton.addEventListener("click", function () {
    filterFacts("ghiroda");
  });
  padureaButton.addEventListener("click", function () {
    filterFacts("padurea");
  });
  dumbravitaButton.addEventListener("click", function () {
    filterFacts("dumbravita");
  });
  mosnitaButton.addEventListener("click", function () {
    filterFacts("mosnita");
  });
  girocButton.addEventListener("click", function () {
    filterFacts("giroc");
  });
  urseniButton.addEventListener("click", function () {
    filterFacts("urseni");
  });
  saguluiButton.addEventListener("click", function () {
    filterFacts("sagului");
  });
});

function openLoginForm() {
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to close the login form
function closeLoginForm() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on the scroll position
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
