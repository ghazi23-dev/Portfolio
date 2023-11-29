function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElementById('Features'); // Replace 'header' with the ID of the element you want to scroll to
});

link2.addEventListener('click', () => {
    scrollToElementById('Projects'); // Replace 'header' with the ID of the element you want to scroll to
});

link3.addEventListener('click', () => {
    scrollToElementById('About'); // Replace 'column' with the ID of the element you want to scroll to
});

link4.addEventListener('click', () => {
    scrollToElementById('Technologies'); // Replace 'Technologies' with the ID of the element you want to scroll to
});
