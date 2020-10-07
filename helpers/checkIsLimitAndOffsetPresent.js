module.exports = (params, limit, offset) => {
    if (!limit && !offset)
    return {where: params, raw: true};

    return {where: params, limit: +(limit), offset: +(offset), raw: true}

}