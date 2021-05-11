// write your code here

fetch("http://localhost:3000/images")
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log("Inside fetch:" , data)
      renderPostCards(data)
   })


   function renderPostCards (posts) {
      for (const post of posts){
         renderPostCard(post)
      }
   }

   function renderPostCard (post) {
      
   }

const imageContainer = document.querySelector(".image-container")

const imageArticleEl = document.createElement("article")
imageArticleEl.setAttribute("class", "image-card")

const imageTitleEl = document.createElement("h2")
imageTitleEl.setAttribute("class", "title")
imageTitleEl.innerText = data.title

const imageImageEl = document.createElement("img")
imageImageEl.setAttribute("class" , "image")
imageImageEl.setAttribute("src" , data.image)

const likesSectionEl = document.createElement("div")
likesSectionEl.setAttribute("class" , "likes-section")

const likeSpanEl = document.createElement("span")
likeSpanEl.setAttribute("class" , "likes")
likeSpanEl.innerText = `${data.likes} likes`

const likeBtn = document.createElement("button")
likeBtn.setAttribute("class" , "like-button")
likeBtn.innerText = "♥"

const commentsList = document.createElement("ul")
commentsList.setAttribute("class" , "comments")

const commentListItem1 = document.createElement("li")
commentListItem1.innerText = "Get rid of these comments"
const commentListItem2 = document.createElement("li")
commentListItem2.innerText = "And replace them with the real ones"
const commentListItem3 = document.createElement("li")
commentListItem3.innerText = "From the server"

const commentForm = document.createElement("form")
commentForm.setAttribute("class", "comment-form")

const commentInput = document.createElement("input")
commentInput.setAttribute("class", "comment-input")
commentInput.setAttribute("type", "text")
commentInput.setAttribute("name", "comment")
commentInput.setAttribute("placeholder", "Add a comment...")

const commentButton = document.createElement("button")
commentButton.setAttribute("class" , "comment-button")
commentButton.setAttribute("type" , "submit")
commentButton.innerText = "Post"

imageArticleEl.append(imageTitleEl, imageImageEl, likesSectionEl, commentsList, commentForm)
likesSectionEl.append(likeSpanEl, likeBtn,)
commentsList.append(commentListItem1, commentListItem2, commentListItem3,)
commentForm.append(commentInput, commentButton)

imageContainer.append(imageArticleEl)


// console.log(imageArticleEl,
//    imageTitleEl,
//    imageImageEl,
//    likesSectionEl,
//    likeSpanEl,
//    likeBtn,
//    commentsList,
//    commentListItem1,
//    commentListItem2,
//    commentListItem3,
//    commentForm,
//    commentInput,
//    commentButton)
