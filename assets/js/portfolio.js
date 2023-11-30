function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Example usage
const portfolioId = getQueryParam('id');
console.log(portfolioId);

const portfolioDetails = {
    'web3': {
    'images': [
        'assets/img/portfolio/20231013_122729_0000.jpg',
        'assets/img/portfolio/20231103_004135_0000.png',
        'assets/img/portfolio/B1.jpg'
    ],
    'category': 'Web design',
    'client': 'ASU Company',
    'projectDate': '01 March, 2020',
    'projectURL': 'www.example.com',
    'title': 'This is an example of portfolio detail',
    'description': 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.'
    },
    'tribal': {
    'images': [
        'assets/img/portfolio/20231108_003108_0000.jpg',
        'assets/img/portfolio/20231110_215744_0000.jpg',
        'assets/img/portfolio/20231110_220326_0000.jpg'
    ],
    'category': 'Web design',
    'client': 'ASU Company',
    'projectDate': '01 March, 2020',
    'projectURL': 'www.example.com',
    'title': 'This is an example of portfolio detail',
    'description': 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.'
    },
};

if (portfolioId && portfolioDetails[portfolioId]) {
    const details = portfolioDetails[portfolioId];

    // Update images
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = details.images.map(image => `<div class="swiper-slide"><img src="${image}" alt=""></div>`).join('');

    // Update project information
    const projectInfo = document.querySelector('.portfolio-info ul');
    projectInfo.innerHTML = `
    <li><strong>Category</strong>: ${details.category}</li>
    <li><strong>Client</strong>: ${details.client}</li>
    <li><strong>Project date</strong>: ${details.projectDate}</li>
    <li><strong>Project URL</strong>: <a href="#">${details.projectURL}</a></li>
    `;

    // Update project description
    const projectDescription = document.querySelector('.portfolio-description');
    projectDescription.innerHTML = `<h2>${details.title}</h2><p>${details.description}</p>`;
}