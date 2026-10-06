// ================================
// SEARCH COURSES
// ================================

function searchCourses() {

    let input = document.getElementById("searchInput");
    let searchValue = input.value.toLowerCase();

    let courses = document.querySelectorAll(".course-card");

    courses.forEach(function(course) {

        let courseText = course.innerText.toLowerCase();

        if (courseText.includes(searchValue)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }

    });
}


// ================================
// CONTINUE COURSE
// ================================

function continueCourse(courseName) {

    alert(
        "You selected: " +
        courseName +
        "\n\nYour course will continue from your current progress."
    );

}


// ================================
// EXPLORE COURSES BUTTON
// ================================

function scrollToCourses() {

    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });

}


// ================================
// PAGE LOAD MESSAGE
// ================================

document.addEventListener("DOMContentLoaded", function() {

    console.log("LearnHub Learning Management System loaded successfully.");

});