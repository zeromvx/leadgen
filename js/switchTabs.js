const tabs = document.querySelectorAll('.attracting__tabs-item');
const tabsContent = document.querySelectorAll('.tab');

tabs.forEach((tabHeader) => {
    tabHeader.addEventListener('click', switchTab);
});

function switchTab() {
    
    tabs.forEach((item) => {
        item.classList.toggle('attracting__tabs-item--active');
    });

    tabsContent.forEach((tabContent) => {
        if (this.dataset['target'] != tabContent.dataset['target']) {
            tabContent.style.display = "none";
        } else {
            tabContent.style.display = "block";
        }
    });
}