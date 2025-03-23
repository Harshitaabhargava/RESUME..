var app = angular.module("resumeApp", []);

app.controller("resumeCtrl", function($scope) {
    $scope.name = "Harshita Bhargava";
    $scope.title = "BCA Fresher | Emerging Software Developer | Foundational Skills in Java, Python & C++ | Tech Enthusiast";
    $scope.about = "I am a BCA graduate with a strong foundation in Python, Java, and web development. Passionate about problem-solving and software development, I am eager to apply my skills and grow in the tech industry.";
    $scope.education = "Bachelor of Computer Applications (BCA) - JIWAJI UNIVERSITY ,GWALIOR(M.P)";
    $scope.skills = ["HTML & CSS", "JavaScript & AngularJS", "Python & Django", "UI/UX Design", "Adobe Photoshop"];
    $scope.languages = ["English(professional)", "Hindi(native)"];
    $scope.leadership = "Active participant in NCC (National Cadet Corps) with cadet caption, showcasing leadership and discipline.";
    $scope.achievements = ["NCC C Certificate Holder", "INSPIRE Award Recipient"];
    $scope.projects = [
        { name: "Career Management System", description: "A Django-based career tracking system with an admin panel." },
        { name: "Portfolio Website", description: "Designed and developed an interactive portfolio with AngularJS." }
    ];
    $scope.email = "harshitabhargava885@gmail.com";
    $scope.linkedin = "https://www.linkedin.com/in/harshita-bhargava-999ab0239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

    $scope.toggleTheme = function() {
        document.body.classList.toggle("dark-mode");
    };

    $scope.downloadResume = function() {
        var link = document.createElement("a");
        link.href = "resume.pdf"; // Ensure you have a resume.pdf file in the project folder
        link.download = "Harshita_Bhargava_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
});
