function openMobileDropdown() {
    fetch('./components/menus_dropdowns/navigation-sub-menu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('mobile_dropdown_container').innerHTML = html;
        })
        .catch(error => console.error('Error fetching list:', error));

    const dropdownMenu = document.getElementById('mobile_dropdown_container');
    if (dropdownMenu.style.display === 'flex') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'flex';
    }
}

function closeMobileDropdownOnLeave() {
    const dropdownMenu = document.getElementById('mobile_dropdown_container');
    dropdownMenu.style.display = 'none';
}

// gradient changer function to support the themeSwitch function
function gradientSwitch(gradient) {
    let root = document.documentElement;
    switch(gradient) {
        case "radial":
            root.style.setProperty("--background-image", "var(--background-image-radial)");
            break;
        case "linear-right":
            root.style.setProperty("--background-image", "var(--background-image-linear-right)");
            break;
        case "linear-left":
            root.style.setProperty("--background-image", "var(--background-image-linear-left)");
            break;
        case "linear-top":
            root.style.setProperty("--background-image", "var(--background-image-linear-top)");
            break;
        case "linear-bottom":
            root.style.setProperty("--background-image", "var(--background-image-linear-bottom)");
            break;
        default:
            console.error("Unknown gradient:", gradient);
            break;
    }
}

// just for fun, I added a border switcher too
function borderSwitch(border) {
    let root = document.documentElement;
    switch(border) {
        case "rounded":
            root.style.setProperty("--border-radius", "var(--border-radius-rounded)");
            root.style.setProperty("--border-radius-high", "var(--border-radius-higher)");
            break;
        case "square":
            root.style.setProperty("--border-radius", "var(--border-radius-none)");
            root.style.setProperty("--border-radius-high", "var(--border-radius-none)");
            break;
        default:
            console.error("Unknown border:", border);
            break;
    }
}

function themeSwitch(theme) {
    let root = document.documentElement;
    switch(theme) {
        case "light":
            root.style.setProperty("--primary", "var(--primary-light)");
            root.style.setProperty("--background-primary", "var(--background-light-primary)");
            root.style.setProperty("--background-secondary", "var(--background-light-secondary)");
            root.style.setProperty("--background-tertiary", "var(--background-light-tertiary)");
            break;
        case "dark":
            root.style.setProperty("--primary", "var(--primary-dark)");
            root.style.setProperty("--background-primary", "var(--background-dark-primary)");
            root.style.setProperty("--background-secondary", "var(--background-dark-secondary)");
            root.style.setProperty("--background-tertiary", "var(--background-dark-tertiary)");
            break;
        case "purple":
            root.style.setProperty("--primary", "var(--primary-purple)");
            root.style.setProperty("--background-primary", "var(--background-purple-primary)");
            root.style.setProperty("--background-secondary", "var(--background-purple-secondary)");
            root.style.setProperty("--background-tertiary", "var(--background-purple-tertiary)");
            break;
        case "white":
            root.style.setProperty("--primary", "var(--primary-white)");
            root.style.setProperty("--background-primary", "var(--background-white-primary)");
            root.style.setProperty("--background-secondary", "var(--background-white-secondary)");
            root.style.setProperty("--background-tertiary", "var(--background-white-tertiary)");
            break;
        case "black":
            root.style.setProperty("--primary", "var(--primary-black)");
            root.style.setProperty("--background-primary", "var(--background-black-primary)");
            root.style.setProperty("--background-secondary", "var(--background-black-secondary)");
            root.style.setProperty("--background-tertiary", "var(--background-black-tertiary)");
            break;
        default:
            console.error("Unknown theme:", theme);
            break;
    }
}

// themeSwitchContainer 
function showThemeSwitchContainer() {
    const themeSwitchContainer = document.getElementById('themeSwitchContainer');
    themeSwitchContainer.style.display = 'flex';
}

function hideThemeSwitchContainer() {
    const themeSwitchContainer = document.getElementById('themeSwitchContainer');
    themeSwitchContainer.style.display = 'none';
}

function toggleVisibility() {
    const subNav = document.getElementById('navigation-sub');
    const toggleIconUp = document.querySelector('.toggle-sub-nav-up');
    const toggleIconDown = document.querySelector('.toggle-sub-nav-down');
    if (subNav.classList.contains('slide-down')) {
        subNav.classList.remove('slide-down');
        subNav.classList.add('slide-up');
        toggleIconUp.style.display = 'none';
        toggleIconDown.style.display = 'inline';
    } else {
        subNav.classList.remove('slide-up');
        subNav.classList.add('slide-down');
        toggleIconUp.style.display = 'inline';
        toggleIconDown.style.display = 'none';
    }
}

function toggleStickyNav() {
    const mainNav = document.getElementById('navigation');
    const isChecked = document.getElementById('navigation-sticky-toggle').checked;
    if (isChecked) {
        mainNav.style.position = 'sticky';
        mainNav.style.backgroundImage = 'radial-gradient(circle at 50% 50%, var(--background-primary), var(--background-secondary) 90%, var(--background-tertiary) 50%)';
    } else {
        mainNav.style.position = 'static';
        mainNav.style.backgroundImage = 'none';
    }
}

// error messages
const showErrorToast = async (error) => {
    try {
        console.error('Something magical happened:', error);
        const errorParagraph = document.createElement('p');
        errorParagraph.textContent = 'An error occurred: This is a test error message. Will disapper in 5 seconds. Or just keep clicking it and you\'ll see how production ready this javascript is.';
        toastInfoBar.querySelector('p').textContent = errorParagraph.textContent;
        toastInfoBar.style.display = 'block';
		setTimeout(() => {
			toastInfoBar.style.display = 'none';
		}, 5000);
    } catch (error) {
        console.error('Something magical happened:', error);
    }
}
  
function closeToastInfoBar() {
    const toastInfoBar = document.getElementById('toastInfoBar');
    toastInfoBar.style.display = 'none';
}

// function to render the HTMX search bar component

let isSearchBarRendered = false;
let isSearchBarVisible = false;
function renderSearchBar() {
    if (!isSearchBarRendered) {
        try {
            const searchBar = document.getElementById('searchBarTarget');
            if (isSearchBarVisible) {
                searchBar.style.display = 'none';
                isSearchBarVisible = false;
            } else {
                if (!searchBar.innerHTML.trim()) {
                    // render the search bar only if it's not already in the DOM
                    htmx.ajax(`GET`, `./components/menus_dropdowns/searchBar.html`, { target: `#searchBarTarget`, swap: `beforeend` });
                }
                // Show the search bar
                searchBar.style.display = 'flex';
                isSearchBarVisible = true;
            }
        } catch (error) {
            console.error('Error rendering search bar:', error);
            const errorParagraph = document.createElement('p');
            errorParagraph.textContent = 'An error occurred: ' + error.message;
            const toastInfoBar = document.getElementById('toastInfoBar');
            toastInfoBar.querySelector('p').textContent = errorParagraph.textContent;
            toastInfoBar.style.display = 'block';
        }
    }
}

window.onload = function() {
    toggleVisibility();
    toggleStickyNav();
};