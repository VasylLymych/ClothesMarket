module.exports = {
    // 400 error code
    //+
    BAD_REQUEST_USER_IS_ALREADY_BLOCKED: {
        message: 'User is already blocked',
        code: 4001
    },
    //+
    BAD_REQUEST_USER_IS_ALREADY_UNBLOCKED: {
        message: 'User is already unblocked',
        code: 4002
    },
    //+
    BAD_REQUEST_USER_IS_NOT_PRESENT: {
        message: 'User is not present',
        code: 4003
    },
    //+
    BAD_REQUEST_NO_TOKEN: {
        message: 'Token is not present',
        code: 4004
    },
    //+
    BAD_REQUEST_COMMENT_NOT_PRESENT: {
        message: 'Comment is not present',
        code: 4005
    },
    //+
    BAD_REQUEST_USER_WITH_SUCH_EMAIL_IS_ALREADY_PRESENT: {
        message: 'User with such email is already present',
        code: 4006
    },
    //+
    BAD_REQUEST_PRODUCT_IS_NOT_PRESENT: {
        message: 'Product is not present',
        code: 4007
    },
    //+
    BAD_REQUEST_ADMIN_NOT_PRESENT: {
        message: 'Admin is not present',
        code: 4008
    },
    //+
    BAD_REQUEST_YOU_ARE_NOT_ADMIN: {
        message: 'You are not a admin',
        code: 4009
    },
    BAD_REQUEST_WRONG_EMAIL: {
        message: 'Wrong email',
        code: 40010
    },
    BAD_REQUEST_GOOGLE_AUTH: {
        message: 'Google auth error',
        code: 40011
    },
    BAD_REQUEST_FACEBOOK_AUTH: {
        message: 'Facebook auth error',
        code: 40012
    },
    BAD_REQUEST_WRONG_PASSWORD: {
        message: 'Wrong password',
        code: 40013
    },
    BAD_REQUEST_NO_EMAIL: {
        message: "Please insert your email in email's field",
        code: 40014
    },
    BAD_REQUEST_PRODUCT_NOT_PRESENT: {
        message: "Product is not present",
        code: 40015
    },
    BAD_REQUEST_PRODUCT_IS_ALREADY_LIKED: {
        message: "Product is already liked",
        code: 40016
    }, BAD_REQUEST_PRODUCT_IS_ALREADY_PRESENT_IN_CART: {
        message: "Product is already present in cart",
        code: 40017
    }, BAD_REQUEST_NO_PRODUCTS_IN_CART: {
        message: "There are no products in cart",
        code: 40018
    },BAD_REQUEST_PRODUCT_IS_NOT_PRESENT_IN_CART: {
        message: "Product is not present in cart",
        code: 40019
    },
    BAD_REQUEST_PURCHASE_NOT_PRESENT: {
        message: 'Purchase is not present',
        code: 40020
    }, BAD_REQUEST_SOME_PURCHASES_ARE_ALREADY_PRESENT: {
        message: 'Some purchases are already present:',
        code: 40021
    },
    BAD_REQUEST_PRODUCT_PHOTO_IS_NOT_PRESENT: {
        message: 'Product photo is not present',
        code: 40022
    }, BAD_REQUEST_OLD_AND_NEW_PASSWORDS_ARE_THE_SAME: {
        message: 'Old and new passwords are the same',
        code: 40023
    }, BAD_REQUEST_SOME_PRODUCTS_ARE_ABSENT: {
        message: 'Some products are absent:',
        code: 40024
    },

    //401 error code
    UNAUTHORIZED_USER: {
        message: 'User is not authorized',
        code: 4011
    },
    //+
    UNAUTHORIZED_BAD_ACCESS_TOKEN: {
        message: 'Access token is not valid',
        code: 4012
    },
    //+
    UNAUTHORIZED_BAD_REFRESH_TOKEN: {
        message: 'Refresh token is not valid',
        code: 4013
    },
    //+
    UNAUTHORIZED_BAD_TOKEN: {
        message: 'Action token is not valid',
        code: 4014
    },


    //403 error code

    //+
    FORBIDDEN_USER_IS_BLOCKED: {
        message: 'User is blocked',
        code: 4031
    },
    //+
    FORBIDDEN_PASSWORDS_DO_NOT_MATCH: {
        message: 'Passwords do not match',
        code: 4032
    },
    //+
    FORBIDDEN_WRONG_ACTION_TOKEN: {
        message: 'Wrong action token',
        code: 4034
    },
    //+
    FORBIDDEN_RECORD_NOT_PRESENT: {
        message: 'Reception record is not present',
        code: 4036
    },
    //+
    FORBIDDEN_PHOTO_SIZE: {
        message: 'photo size is more then 5mb',
        code: 4038
    },
    //+
    FORBIDDEN_PHOTO_MIMETYPE: {
        message: 'photo mimetype is forbidden.Please use only next mimetypes',
        code: 4040
    },
    FORBIDDEN_USER_IS_DELETED: {
        message: "User's profile is deleted"
    }

};