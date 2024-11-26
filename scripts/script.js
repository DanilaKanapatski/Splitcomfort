document.addEventListener('DOMContentLoaded', function() {
    const partnersList = document.querySelector('.partners-list');
    const partnersItems = document.querySelectorAll('.partners-list li');
    const partnersWidth = partnersItems[0].offsetWidth + parseInt(getComputedStyle(partnersList).gap);
    const totalWidth = partnersWidth * partnersItems.length;

    partnersList.style.width = `${totalWidth}px`;

    partnersList.addEventListener('animationiteration', function() {
        partnersList.appendChild(partnersList.firstElementChild);
        partnersList.style.animation = 'none';
        setTimeout(() => {
            partnersList.style.animation = '';
        }, 0);
    });
});