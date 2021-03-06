const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
}

const menuError = () => {
    return {
        type: 'MENU_ERROR',
    };
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
}

const plusToCart = (id) => {
    return {
        type: 'ITEM_PLUS_TO_CART',
        payload: id
    };
}

const minusToCart = (id) => {
    return {
        type: 'ITEM_MINUS_TO_CART',
        payload: id
    };
}

const clearOrderAfterBuy = () => {
    return {
        type: 'ITEM_CLEAR_ORDER_AFTER_BUY',
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    plusToCart,
    minusToCart,
    clearOrderAfterBuy
};