function LogCategoriesInfo(categoriesList) {
    console.log(`Number of categories: ${categoriesList.length}\n`);

    categoriesList.forEach(element => {
        let heading = element.firstElementChild;
        console.log(
            `Category : ${heading.innerHTML}\n` +
            `Elements : ${element.querySelectorAll('li').length}\n`
        );
    });
}

let categories = document.querySelectorAll('#categories > li');
LogCategoriesInfo(Array.from(categories));