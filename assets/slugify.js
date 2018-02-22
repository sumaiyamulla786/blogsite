const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

const.slugify = (val) => {
    return val.toSting().toLowerCase.trim()
    .replace(/&/g,'-and-')    // replace & with -and-
    .replace(/[\s\W-+]/g,'-')  //replace spaces, non words and dashes with single dash

};
titleInput.addEventListener('keyup',(e) =>{
    slugInput.setAttribute('value',slugify(titleInput.value));
});