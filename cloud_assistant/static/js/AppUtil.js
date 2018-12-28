let getInnerPageRouter = (innerPage) => {
    return (objPage) => {
        innerPage.$emit(objPage);
    };
};

let getShowDialog = (innerPage) => {
    return (dialogName) => {
        innerPage.$emit(name);
    };
}

export default {
    getInnerPageRouter: getInnerPageRouter
};
