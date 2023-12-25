const arrow = document.querySelector(`.arrow`);

arrow.addEventListener(`click`, (e) => {
    const target = (e.target).className;

    if (target === `arrow`) {
        const models = document.querySelector(`.models`);
        models.scrollIntoView({behavior: `smooth`});
    }
});

arrow.addEventListener(`mouseover`, (e) => {
    const target = e.target;

    if (target.className === `arrow`) {
        target.style.color = `gainsboro`;
        target.style.cursor = 'pointer';
    }
});

arrow.addEventListener(`mouseout`, (e) => {
    const target = e.target;

    if (target.className === `arrow`) {
        target.style.color = `whitesmoke`;
        target.style.cursor = 'default';
    }
});