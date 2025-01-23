// 현재 섹션 인덱스 추적
let currentSectionIndex = 0;

// 모든 섹션을 가져옴
const sections = document.querySelectorAll('.section');

// 스크롤 이벤트 리스너 추가
document.addEventListener('wheel', function(event) {
    const delta = event.deltaY; // 스크롤 방향 (양수: 아래, 음수: 위)

    if (delta > 0) {
        // 아래로 스크롤
        goToSection(currentSectionIndex + 1);
    } else {
        // 위로 스크롤
        goToSection(currentSectionIndex - 1);
    }
});

// 섹션 이동 함수
function goToSection(index) {
    if (index < 0 || index >= sections.length) {
        return; // 범위를 벗어나면 아무 것도 하지 않음
    }

    const section = sections[index];
    section.scrollIntoView({
        behavior: 'smooth', // 부드럽게 스크롤
        block: 'start', // 섹션의 시작 위치로 이동
    });

    currentSectionIndex = index; // 현재 섹션 인덱스 업데이트
}
document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        navigation: true, // 화면 오른쪽에 내비게이션 추가
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About Me'],
        showActiveTooltip: true,
        scrollingSpeed: 700, // 스크롤 속도 (밀리초)
        anchors: ['home', 'about'], // URL에 #home, #about 추가
        sectionsColor: ['#ffffff', '#f2f2f2'], // 각 섹션 배경색
    });
});

//about me nav bar 눌럿을때 효과
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link'); // nav 항목들을 가져옵니다.
    
    // 섹션 요소들 가져오기
    const aboutMeSection = document.querySelector('.aboutMeSection'); 
    const namecardBox = document.querySelector('.namecardBox'); // namecardBox는 변하지 않음

    // 섹션 내용을 바꿔주는 함수
    function updateSectionContent(target) {
        if (target === 'aboutMe') {
            aboutMeSection.innerHTML = `
            <div class="skillsLogo">
                <img class="javaIcon icon" src="https://github.com/lukakas0213/Portfolio_Website_final/blob/f9987462b86cc6d24bb5cab0cf7bde1567c76f68/Lucas%20Park%20Final%200121/2.%20About%20Me/Languages/Java%20logo.png?raw=true">
                <img class="pythonIcon icon" src="https://github.com/lukakas0213/Portfolio_Website_final/blob/f9987462b86cc6d24bb5cab0cf7bde1567c76f68/Lucas%20Park%20Final%200121/2.%20About%20Me/Languages/Python%20logo.png?raw=true">
                <img class="cIcon icon" src="https://github.com/lukakas0213/Portfolio_Website_final/blob/f9987462b86cc6d24bb5cab0cf7bde1567c76f68/Lucas%20Park%20Final%200121/2.%20About%20Me/Languages/C%20logo.png?raw=true">
                <img class="htmlIcon icon" src="https://github.com/lukakas0213/Portfolio_Website_final/blob/f9987462b86cc6d24bb5cab0cf7bde1567c76f68/Lucas%20Park%20Final%200121/2.%20About%20Me/Languages/HTML%20logo.png?raw=true">
                <img class="cssIcon icon" src="https://github.com/lukakas0213/Portfolio_Website_final/blob/f9987462b86cc6d24bb5cab0cf7bde1567c76f68/Lucas%20Park%20Final%200121/2.%20About%20Me/Languages/CSS%20logo.png?raw=true">
                <img class="jsIcon icon" src="https://github.com/lukakas0213/Portfolio_Website_final/blob/f9987462b86cc6d24bb5cab0cf7bde1567c76f68/Lucas%20Park%20Final%200121/2.%20About%20Me/Languages/Js%20logo.png?raw=true">
            </div>
            <p class="AIDeveloperText">
                <span class="AIText">AI</span>
                <span class="DeveloperText">Developer</span>
            </p>
            <div class="aboutMeDiscription">
                <p class="aboutMeDiscriptionText">
                    Hello! My name is Lucas Park, a second-year Computer Science
                    <br>
                    student at the University of Maryland. I have a strong passion for
                    <br>
                    solving real-world problems through programming and technol-
                    <br>
                    ogy. My interests lie in Artificial Intelligence (Al), Machine Learn-
                    <br>
                    ing, and Data Analysis. I aim to create innovative projects that 
                    <br>
                    make a tangible impact.
                </p>
            </div>
            `;
        } else if (target === 'experience') {
            aboutMeSection.innerHTML = `
                <h2>Experience</h2>
                <p>저는 다양한 프로젝트에서 경험을 쌓았습니다.</p>
                <img src="experience.jpg" alt="Experience Image" />
            `;
        } else if (target === 'projects') {
            aboutMeSection.innerHTML = `
                <h2>Projects</h2>
                <p>여러 프로젝트를 진행하며 많은 경험을 얻었습니다.</p>
                <img src="projects.jpg" alt="Projects Image" />
            `;
        } else if (target === 'skills') {
            aboutMeSection.innerHTML = `
                <h2>Skills</h2>
                <p>저는 JavaScript, Python, C++ 등을 다룰 수 있습니다.</p>
                <img src="skills.jpg" alt="Skills Image" />
            `;
        }
    }

    // 각 nav 항목에 클릭 이벤트 추가
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작을 방지
            const targetSection = this.getAttribute('data-target'); // 클릭한 항목의 데이터 속성 가져오기

            updateSectionContent(targetSection); // 섹션 내용을 업데이트
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // 모든 링크에서 active 클래스 제거
            navLinks.forEach(link => link.classList.remove("active"));

            // 클릭된 링크에 active 클래스 추가
            e.target.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");  // 화면에 들어오면 visible 클래스를 추가
                observer.unobserve(entry.target);  // 한 번만 애니메이션을 적용하고 이후에는 관찰을 중단
            }
        });
    }, { threshold: 0.5 });  // 50% 이상 화면에 들어왔을 때 트리거

    hiddenElements.forEach((el) => observer.observe(el));  // 모든 .hidden 요소를 감시
});
