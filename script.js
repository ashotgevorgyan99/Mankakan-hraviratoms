document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        window.history.back();  // Վերադարձնում է նախորդ էջ
    }
});

function checkPassword() {
    const password = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    if (password === '0000') {
        document.getElementById('password-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.body.style.overflow = 'auto';
    } else {
        errorMessage.textContent = 'Գաղտնաբառը սխալ է';
    }
}

function searchItems() {
    const searchValue = document.getElementById('search').value.trim();
    const items = document.querySelectorAll('.item');
    const resultPopupOverlay = document.getElementById('result-popup-overlay');
    const resultPopup = document.getElementById('result-popup');
    let found = false;

    items.forEach(item => {
        const title = item.getAttribute('data-title');
        if (title === searchValue) {
            found = true;
            const clonedItem = item.cloneNode(true);
            clonedItem.style.display = 'block';
            while (resultPopup.firstChild && resultPopup.firstChild.tagName !== 'BUTTON') {
                resultPopup.removeChild(resultPopup.firstChild);
            }
            resultPopup.insertBefore(clonedItem, resultPopup.firstChild);
            resultPopupOverlay.style.display = 'flex';
        }
    });

    if (!found) {
        resultPopup.innerHTML = '<p style="color: red; font-weight: bold;">Ոչ մի արդյունք չի գտնվել:</p>';
        resultPopupOverlay.style.display = 'flex';
    }
}

function closePopup() {
    document.getElementById('result-popup-overlay').style.display = 'none';
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 40.1792, lng: 44.4991 }
    });
}

function enlargeImage(imageSrc) {
    closePopup(); // Close the search popup
    document.getElementById("image-modal").style.display = "block";
    document.getElementById("modal-image").src = imageSrc;
}

function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

function openLink(url) {
    window.open(url, "_blank"); // Բացում է հղումը նոր պատուհանում
}

let lastSearchResult = ""; // Վերջին որոնման տվյալները

    function displaySearchResult(result) {
        lastSearchResult = result; // Արխիվավորել տվյալները
        document.getElementById('search-result').innerText = result; // Տեղադրել տվյալները պատուհանում
        document.getElementById('result-popup-overlay').style.display = 'block'; // Ցույց տալ պատուհանը
    }

    function goBack() {
        // Դիտարկել վերջին որոնման արդյունքը, եթե ցանկանում եք օգտագործել այն
        console.log(lastSearchResult); // Կարող եք փոխարինել ձեր անհրաժեշտությամբ
        document.getElementById('result-popup-overlay').style.display = 'none'; // Փակել պատուհանը
    }
    
    function closePopup() {
    document.getElementById('result-popup-overlay').style.display = 'none';
}




if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}





