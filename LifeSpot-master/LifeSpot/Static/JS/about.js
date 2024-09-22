const writeReview = reviews => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${reviews['userName']}</b>  ${reviews['date']}</i></p>` +
        `<p>${reviews['comment']}</p>` +
        '</div>';
}

function Reviews() {
    let reviews = {}

    reviews["userName"] = prompt("Напишите Ваше имя")
    if (reviews["userName"] == null) {
        return
    }
    reviews["comment"] = prompt("Оставьте свой отзыв")
    if (reviews["comment"] == null) {
        return
    }
    reviews["date"] = new Date().toLocaleString()

    writeReview(reviews)
}
