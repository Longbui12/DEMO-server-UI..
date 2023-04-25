// 1
var courseAPI = 'http://localhost:3000/ListStudents'

//2
function start() {
  getCourses(renderCourses)
  handleCreateForm()
}

start()

//Functions
// 3
function getCourses(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json()
    })
    .then(callback)
}

// DEMO
async function getCourseById(id) {
  const response = await fetch(courseAPI + '/' + id)

  return response.json()
}

// 6
function createCourse(data, callback) {
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(courseAPI, options)
    .then(function (response) {
      response.json()
    })
    .then(callback)
}

//9
function handleDeleteCourse(id) {
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(courseAPI + '/' + id, options)
    .then(function (response) {
      response.json()
    })
    .then(function () {
      //getCourses(renderCourses)
      var courseItem = document.querySelector('.course-item-' + id) // cách xóa mà không phải gọi API
      if (courseItem) {
        courseItem.remove()
      }
    })
}

// 11
async function updateCourse(id, data) {
  var options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(courseAPI + '/' + id, options)

  return response.json()
}

// 4
function renderCourses(courses) {
  var ListCoursesBlock = document.querySelector('#list-courses')
  var htmls = courses.map(function (course) {
    return `<li class="course-item-${course.id}">
    <h4>Name: ${course.name}</h4>
    <p>Description: ${course.description}</p>
    <p>Age: ${course.age}</p>
    <p>Class: ${course.Class}</p>
    <img src=${course.image}></br>
    <button onclick="handleDeleteCourse(${course.id})">Delete </button>
    <button onclick="handleEditCourse(${course.id})">Edit </button>
   </li>`
  })
  ListCoursesBlock.innerHTML = htmls.join('')
}

// 5
function handleCreateForm() {
  var createButton = document.querySelector('#create')

  createButton.onclick = function () {
    // alert('I am Long')
    // sau khi click no se tra ra
    var name = document.querySelector('input[name="name"]').value
    var description = document.querySelector('input[name="description"]').value
    var age = document.querySelector('input[name="age"]').value
    var Class = document.querySelector('input[name="Class"]').value
    var image = document.querySelector('input[name="image"]').value

    // 7
    var formData = {
      name: name,
      description: description,
      age: age,
      Class: Class,
      image: image
    }

    // 8
    createCourse(formData, function () {
      getCourses(renderCourses)
    })
  }
}

// 10
// async function handleEditCourse(course) {
//   console.log(course)
//   const item = await getCourseById(course)
//   console.log(item)
//   // var nameInput = document.querySelector('input[name="name"]')
//   // var descriptionInput = document.querySelector('input[name="description"]')
//   // var ageInput = document.querySelector('input[name="age"]')
//   // var ClassInput = document.querySelector('input[name="Class"]')
//   // var imageInput = document.querySelector('input[name="image"]')

//   // nameInput.value = course.name
//   // descriptionInput.value = course.description
//   // ageInput.value = course.age
//   // ClassInput.value = course.Class
//   // imageInput.value = course.image

//   // var updateButton = document.querySelector('#update')
//   // updateButton.onclick = function () {
//   //   var data = {
//   //     name: nameInput.value,
//   //     description: descriptionInput.value,
//   //     age: ageInput.value,
//   //     Class: ClassInput.value,
//   //     image: imageInput.value
//   //   }

//   //   updateCourse(course.id, data, function () {
//   //     getCourses(renderCourses)
//   //   })
//   // }
// }
async function handleEditCourse(id) {
  console.log(id)
  const course = await getCourseById(id)
  console.log(course)

  var nameInput = document.querySelector('input[name="name"]')
  var descriptionInput = document.querySelector('input[name="description"]')
  var ageInput = document.querySelector('input[name="age"]')
  var ClassInput = document.querySelector('input[name="Class"]')
  var imageInput = document.querySelector('input[name="image"]')

  nameInput.value = course.name
  descriptionInput.value = course.description
  ageInput.value = course.age
  ClassInput.value = course.Class
  imageInput.value = course.image

  var updateButton = document.querySelector('#update')
  updateButton.onclick = function () {
    var data = {
      name: nameInput.value,
      description: descriptionInput.value,
      age: ageInput.value,
      Class: ClassInput.value,
      image: imageInput.value
    }

    updateCourse(course.id, data, function () {
      getCourses(renderCourses)
    })
  }
}
